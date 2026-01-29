## PizzaMate deep-link redirect pages (Vercel deploy)

This folder contains **static HTML pages** (Tailwind via CDN) for PizzaMate:

## Pages

### Policies
- `privacy-policy.html`
- `terms-and-conditions.html`

### Appwrite email redirect pages (deep links)

- `reset-password.html` → redirects to `pizzamate://reset-password?...`
- `verify-email.html` → redirects to `pizzamate://verify-email?...`

## Deploy using Vercel CLI (deploy ONLY this folder)

### - In order to check which account is logged in
```bash
vercel whoami
```

### - For more details - 
```bash
vercel teams ls 
```

### 1) Login (one-time)

```bash
vercel login
```

### 2) Deploy preview (recommended first)

From your project root:

```bash
cd /Users/abhverma18/Desktop/Sample-Projects/pizza-mate/public
vercel
```

Notes:
- When Vercel asks **“Framework preset”**, choose **Other**.
- When it asks for a build command/output directory, you can choose **No build command** and keep defaults (these are plain HTML files).

After it finishes, Vercel will print a **Preview URL** like:
- `https://your-project-xxxxx.vercel.app`

### 3) Deploy to production

```bash
cd /Users/abhverma18/Desktop/Sample-Projects/pizza-mate/public
vercel --prod
```

## After deploy: the URLs you will use

If your domain is:
- `https://YOUR-SITE.vercel.app`

Then the redirect pages are:
- **Reset Password**: `https://YOUR-SITE.vercel.app/reset-password.html`
- **Verify Email**: `https://YOUR-SITE.vercel.app/verify-email.html`

## Where to add these links (App + Appwrite)

### A) In the app (so Appwrite emails contain the hosted pages)

Set this environment variable for your Expo builds:
- `EXPO_PUBLIC_WEB_REDIRECT_BASE_URL=https://YOUR-SITE.vercel.app`

Or set in `app.json` (less ideal for production secrets, but this is public anyway):
- `expo.extra.webRedirectBaseUrl`

### B) In Appwrite Console

Add your Vercel domain as an allowed platform/domain:
- **Appwrite Console → Project → Platforms → Add Platform → Web**
- Add: `YOUR-SITE.vercel.app` (or your custom domain)

This ensures Appwrite will allow redirects to your hosted pages.

