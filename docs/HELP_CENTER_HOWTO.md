# Help Center Form - Setup & Testing Guide

## Overview

The Help Center page (`/help`) provides a contact form that sends submissions to an n8n backend via webhook. It includes:

- Form validation (all fields required)
- Email confirmation matching
- Topic selection dropdown
- Google reCAPTCHA v3 protection
- JSON POST request to n8n

## Environment Variables

Copy `.env.example` to `.env` or `.env.local` for local development, then set
these values. Use the same values as GitHub Actions secrets for CI/CD builds:

```env
APP_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
APP_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id
```

The build generates `public/config.js` from these values via
`scripts/generate-config.mjs`. The frontend reads them at runtime from
`window.__APP_CONFIG__`.

## CI/CD (GitHub Pages)

Create the following GitHub Actions secrets and they will be injected at build
time:

- `APP_RECAPTCHA_SITE_KEY`
- `APP_N8N_WEBHOOK_URL`

## Setting Up Google reCAPTCHA (v3)

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click the **+** button to create a new site
3. Choose **reCAPTCHA v3**
4. Add your domains:
   - `localhost` (for development)
   - Your production domain (e.g., `selftutor.eu`)
5. Copy the **Site Key** and add it as `APP_RECAPTCHA_SITE_KEY`
6. Copy the **Secret Key** and add it to your n8n workflow for server-side verification

## Setting Up n8n Webhook

### 1. Create a new workflow in n8n

1. Add a **Webhook** node as the trigger
2. Set HTTP Method to **POST**
3. Copy the webhook URL (Test URL for testing, Production URL for live)

### 2. Configure the workflow

The form sends JSON with this structure:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "topic": "feedback",
  "message": "This is my feedback message",
  "captchaToken": "recaptcha_token_here",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "language": "en"
}
```

### 3. Verify reCAPTCHA (Recommended)

Add an **HTTP Request** node to verify the captcha:

```
POST https://www.google.com/recaptcha/api/siteverify
Body (form-urlencoded):
  - secret: YOUR_RECAPTCHA_SECRET_KEY
  - response: {{ $json.captchaToken }}
```

### 4. Process the form data

Add nodes to:
- Send email notification
- Store in database
- Create ticket in support system
- etc.

### Example n8n Workflow

```
[Webhook] → [reCAPTCHA Verify] → [IF Success] → [Send Email] → [Respond to Webhook]
```

When using reCAPTCHA v3, also validate:

- `success` is true
- `action` matches `help_center_submit`
- `score` meets your threshold (for example `>= 0.5`)

## Testing Locally

### 1. Set up environment variables

Create a `.env.local` file:

```env
APP_RECAPTCHA_SITE_KEY=your_site_key
APP_N8N_WEBHOOK_URL=your_n8n_test_webhook_url
```

### 2. Test the form

1. Navigate to `/help`
2. Fill in all required fields:
   - First Name
   - Last Name
   - Email
   - Confirm Email (must match)
   - Topic (select any except "Choose...")
   - Message
3. Click "Send" (reCAPTCHA v3 runs in the background)

### 3. Verify in n8n

1. Check your n8n execution history
2. Verify the JSON payload is received correctly
3. Check that all fields are populated

## Form Validation Rules

The "Send" button is **disabled** when:

- ❌ First Name is empty
- ❌ Last Name is empty
- ❌ Email is empty
- ❌ Confirm Email is empty or doesn't match Email
- ❌ Topic is "Choose..."
- ❌ Message is empty
- ❌ reCAPTCHA token could not be generated

## Topic Values

| Display Label | Value Sent |
|--------------|------------|
| Choose... | `choose` |
| Feedback | `feedback` |
| Found Error | `found_error` |
| Feature Request | `feature_request` |
| Business Request | `business_request` |
| Google Meet | `google_meet` |
| Question about vron | `question_about_vron` |

## Troubleshooting

### reCAPTCHA not working
- Check that `APP_RECAPTCHA_SITE_KEY` is set correctly
- Verify the domain is registered in Google reCAPTCHA admin

### Form submission fails
- Check browser console for errors
- Verify `APP_N8N_WEBHOOK_URL` is correct
- Ensure n8n webhook is active and listening

### CORS errors
- Configure CORS in your n8n webhook node
- Or use n8n's built-in CORS handling

## Security Notes

- Never expose the reCAPTCHA **Secret Key** in frontend code
- Always verify reCAPTCHA tokens server-side (in n8n)
- For v3, validate the `action` and `score` in n8n
- Consider rate limiting in n8n to prevent abuse
- Sanitize and validate all input data in n8n before processing
