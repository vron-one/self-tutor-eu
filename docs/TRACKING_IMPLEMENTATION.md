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

## Google Tag Manager (GTM) Integration — Step by Step

This project loads GTM **only when analytics consent is granted**. If the user
clicks "Reject All", GTM is never injected.

### Step 1: Create a GTM Container

1. Go to https://tagmanager.google.com
2. Create a new container for `selftutor.eu`
3. Copy the container ID (e.g. `GTM-NX3GZWF4`)

### Step 2: Install GTM via Cookie Consent (Already Implemented)

GTM is injected **only after consent** in:

- `src/components/CookieBanner.tsx`
- `src/lib/gtm.ts`

The loader runs when:
- user accepts analytics cookies, or
- consent exists and `analytics: true` on page load

### Step 3: Create a GA4 Configuration Tag (Recommended)

1. In GTM, go to **Tags → New**
2. Choose **Google Analytics: GA4 Configuration**
3. Enter your GA4 Measurement ID
4. Trigger: **All Pages**
5. Save

### Step 4: Track SPA Page Views

Because this is a SPA, use a **History Change** trigger:

1. **Triggers → New → History Change**
2. Enable "All history changes"
3. Create a **GA4 Event** tag with event name `page_view`
4. Trigger it on History Change

Note: we also push a `page_view` event to `dataLayer` when analytics are allowed.

### Step 5: Track Downloads (iOS/Android)

The app emits a custom event when download links are clicked:

```ts
trackEvent("download_click", { platform: "ios|android", source: "download_page" })
```

Create a GTM tag:

1. **Tags → New → GA4 Event**
2. Event name: `download_click`
3. Add parameters:
   - `platform`
   - `source`
4. Trigger: **Custom Event**
   - Event name: `download_click`

### Step 6: Track Help Center Requests

The app emits:

```ts
trackEvent("help_request_submit", { topic, language })
```

Create another GTM tag:

1. **Tags → New → GA4 Event**
2. Event name: `help_request_submit`
3. Parameters:
   - `topic`
   - `language`
4. Trigger: **Custom Event**
   - Event name: `help_request_submit`

### Step 7: Test With Preview Mode

1. In GTM, click **Preview**
2. Enter `https://selftutor.eu`
3. Accept analytics cookies in the banner
4. Navigate the site and click download links
5. Confirm events appear in Tag Assistant and GA4 DebugView

### Consent Guardrail (Important)

- If the user rejects analytics, `dataLayer` events are never sent
- GTM is not injected, so **no tags fire**
- This keeps tracking GDPR-compliant

## Privacy Considerations

- No tracking occurs until user gives consent
- Consent is stored locally, not on server
- Users can clear consent by clearing browser storage
- All tracking respects the user's cookie preferences
