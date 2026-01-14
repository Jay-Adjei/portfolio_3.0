# Open Graph Image Guide

## What I've Added

I've enhanced your website's metadata with comprehensive Open Graph and Twitter Card tags. This will make your website look great when shared on social media platforms like:
- Facebook
- Twitter/X
- LinkedIn
- Discord
- Slack
- WhatsApp
- And more!

## What You Need to Do

### 1. Create an OG Image

You need to create an Open Graph image at:
```
public/assets/images/og-image.png
```

**Recommended Specifications:**
- **Size**: 1200 x 630 pixels (1.91:1 aspect ratio)
- **Format**: PNG or JPG
- **File size**: Under 1MB (optimized)
- **Content**: Should include:
  - Your name: "Japhet Adofo-Adjei"
  - Your title/role: "Web Developer" or "Full Stack Developer"
  - Your portfolio tagline or key skills
  - Your logo or a professional photo
  - Brand colors that match your website

**Tools to Create OG Images:**
- Canva (has OG image templates)
- Figma
- Photoshop
- Online tools like [og-image.vercel.app](https://og-image.vercel.app)

### 2. Set Your Site URL

Add your website URL to your `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Replace `yourdomain.com` with your actual domain name.

### 3. Update Twitter Handle (Optional)

If you have a Twitter/X account, update line 51 in `src/app/layout.js`:

```javascript
creator: '@yourtwitterhandle', // Replace with your actual handle
```

### 4. Add Verification Codes (Optional)

If you want to verify your site with search engines, uncomment and add your verification codes in the `verification` section of the metadata.

## Testing Your Unfurl

After deploying, test your social media previews:

1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **Open Graph Preview**: https://www.opengraph.xyz/

**Note**: After making changes, you may need to clear the cache on these platforms to see the updated preview.

## What's Included

✅ Open Graph tags for Facebook, LinkedIn, etc.
✅ Twitter Card tags (large image format)
✅ Proper meta descriptions
✅ SEO-friendly keywords
✅ Canonical URLs
✅ Robots meta tags for search engines
✅ Site name and creator information

## Quick Fix: Use Existing Image

If you want to quickly test, you can temporarily use an existing image. Update line 39 in `src/app/layout.js`:

```javascript
url: '/assets/images/logo.png', // or any existing image
```

But I recommend creating a proper OG image for the best results!
