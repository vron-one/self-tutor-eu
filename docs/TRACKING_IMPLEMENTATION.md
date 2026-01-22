# Page Tracking & Cookie Banner Implementation Guide

This document explains how to implement and use the GDPR-compliant cookie banner and page tracking system for SelfTutor.

## Overview

The tracking system consists of:
1. **Cookie Banner** - GDPR-compliant consent management
2. **Page Tracking Hook** - Tracks page views on Help Center, Downloads, etc.
3. **Event Tracking** - Custom event tracking (downloads, form submissions)

## Components

### 1. Cookie Banner (`src/components/CookieBanner.tsx`)

A bilingual (EN/DE) cookie consent banner that:
- Shows on first visit (with 500ms delay to avoid flash)
- Stores consent in localStorage as `selftutor_cookie_consent`
- Dispatches `cookieConsentUpdated` event when preferences change
- Supports three consent categories:
  - **Necessary** (always enabled)
  - **Analytics** (page views, user behavior)
  - **Marketing** (personalized ads)

### 2. Page Tracking Hook (`src/hooks/usePageTracking.ts`)

Provides:
- `usePageTracking()` - Hook to track page views
- `trackEvent(name, data)` - Function to track custom events

## Setup Instructions

### Step 1: Add Cookie Banner to App

The Cookie Banner is already added to `src/App.tsx`:

```tsx
import CookieBanner from "@/components/CookieBanner";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      {/* ... other providers ... */}
      <BrowserRouter>
        <PageTracker /> {/* Tracks all page views */}
        <Routes>
          {/* ... routes ... */}
        </Routes>
      </BrowserRouter>
      <CookieBanner />
    </LanguageProvider>
  </QueryClientProvider>
);
```

### Step 2: Configure Tracking Webhook (Optional)

To send tracking data to n8n:

1. Set the environment variable:
   ```
   VITE_TRACKING_WEBHOOK_URL=https://your-n8n-instance.com/webhook/tracking
   ```

2. In n8n, create a webhook that accepts POST requests with JSON body.

### Step 3: n8n Webhook Setup for Tracking

Create a new workflow in n8n:

1. **Webhook Node**
   - Method: POST
   - Path: `/tracking`
   - Response Mode: Immediately

2. **Switch Node** (optional)
   - Route by `type` field: `page_view` or `custom_event`

3. **Database/Sheet Node**
   - Save to Google Sheets, Airtable, or database

Example payload for page views:
```json
{
  "type": "page_view",
  "page": "/help",
  "title": "Help Center - SelfTutor",
  "timestamp": "2025-01-22T10:30:00.000Z",
  "referrer": "https://google.com",
  "userAgent": "Mozilla/5.0...",
  "language": "en-US",
  "screenWidth": 1920,
  "screenHeight": 1080
}
```

Example payload for custom events:
```json
{
  "type": "custom_event",
  "event": "download_click",
  "data": {
    "platform": "ios",
    "source": "download_page"
  },
  "page": "/download",
  "timestamp": "2025-01-22T10:35:00.000Z"
}
```

### Step 4: Track Custom Events

Import and use `trackEvent` in your components:

```tsx
import { trackEvent } from "@/hooks/usePageTracking";

// In Download page
const handleDownloadClick = (platform: string) => {
  trackEvent("download_click", { 
    platform, 
    source: "download_page" 
  });
};

// In Help Center
const handleFormSubmit = () => {
  trackEvent("help_form_submit", { 
    topic: formData.topic 
  });
};
```

## Testing

### Test Cookie Banner

1. Open browser DevTools → Application → Local Storage
2. Delete `selftutor_cookie_consent` key
3. Refresh page - banner should appear after 500ms
4. Click buttons and verify localStorage is updated

### Test Tracking

1. Accept analytics cookies in the banner
2. Open browser DevTools → Console
3. Navigate between pages
4. Look for `[Tracking] Page view:` logs
5. Check `[Tracking] Custom event:` for custom events

### Test with n8n

1. Set `VITE_TRACKING_WEBHOOK_URL` to your n8n webhook
2. In n8n, add a "Set" node after webhook to see incoming data
3. Execute workflow and navigate through the site
4. Check n8n execution history for received payloads

## Tracked Pages

The following pages are automatically tracked:
- `/` - Home page
- `/download` - Download page
- `/help` - Help Center
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/imprint` - Imprint

## Cookie Consent Storage Format

```typescript
interface CookieConsent {
  necessary: boolean;  // Always true
  analytics: boolean;  // User choice
  marketing: boolean;  // User choice
  timestamp: string;   // ISO timestamp
}
```

## Programmatic Consent Check

```tsx
import { getCookieConsent, isAnalyticsAllowed } from "@/components/CookieBanner";

// Get full consent object
const consent = getCookieConsent();

// Quick check for analytics
if (isAnalyticsAllowed()) {
  // Load analytics scripts
}
```

## Google Analytics Integration (Optional)

If you add Google Analytics later:

1. Add GA script to `index.html` (only load if consent given)
2. The tracking hook automatically sends `gtag` events when available

## Privacy Considerations

- No tracking occurs until user gives consent
- Consent is stored locally, not on server
- Users can clear consent by clearing browser storage
- All tracking respects the user's cookie preferences
