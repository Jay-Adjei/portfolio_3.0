# AI Image Generator Prompt for OG Image

## Prompt for AI Image Generators (DALL-E, Midjourney, Stable Diffusion, etc.)

Copy and paste this prompt into your AI image generator:

```
Create a professional Open Graph social media preview image for a web developer portfolio. 

Technical specifications:
- Dimensions: 1200x630 pixels, horizontal landscape format (1.91:1 aspect ratio)
- Format: High quality, clean design suitable for social media sharing

Design requirements:
- Modern, minimalist design with a dark theme (dark navy/black background with subtle gradients)
- Include the text "Japhet Adofo-Adjei" prominently displayed as the main heading
- Add subtitle text: "Web Developer & Designer"
- Include tech stack icons or text: "React • Next.js • JavaScript • Modern Web Development"
- Use a sleek, futuristic aesthetic with purple/blue gradient accents matching the portfolio theme:
  * Primary gradient: #3b82f6 (blue) to #8b5cf6 (purple) to #ec4899 (pink)
  * Alternative accent: #433ecf (purple) to #570978 (magenta)
- Add subtle geometric shapes or code-inspired patterns in the background
- Professional typography, modern sans-serif font
- Clean, spacious layout with good contrast for readability
- Include a subtle portfolio tagline: "Building Modern Digital Experiences"

Style:
- Professional tech/developer aesthetic
- Dark mode friendly
- Minimalist but visually striking
- Modern gradient effects
- Clean lines and geometric elements
- Tech/cyberpunk-inspired but professional
- No cluttered elements, focus on elegance

Color palette (matching your portfolio):
- Primary background: Dark navy (#0f172a) or deep black (#0a0a0a)
- Accent gradients: 
  * Blue to Purple: #3b82f6 → #8b5cf6
  * Purple to Pink: #8b5cf6 → #ec4899
  * Alternative: #433ecf → #570978
- Text: Light/white (#f1f5f9 or #ffffff) for high contrast
- Subtle glow effects on text or geometric elements
- Optional grid pattern overlay (subtle, low opacity)

Avoid:
- Cluttered designs
- Too many elements
- Low contrast text
- Unprofessional fonts
- Bright/neon colors that clash
```

## Alternative Shorter Prompt

If the AI generator has character limits, use this condensed version:

```
Professional 1200x630px Open Graph image: Dark theme portfolio preview for "Japhet Adofo-Adjei - Web Developer & Designer". Modern minimalist design with purple/blue gradients (#433ecf to #570978), dark navy background (#0f172a), tech stack text "React • Next.js • JavaScript", subtle geometric patterns, clean typography, professional developer aesthetic, high contrast, elegant spacing.
```

## Platform-Specific Tips

### For DALL-E (ChatGPT):
- Use the full prompt above
- You can add: "in the style of modern tech company branding, similar to Vercel or Stripe"

### For Midjourney:
- Use: `/imagine prompt:` followed by the condensed version
- Add style modifiers: `--ar 1.91:1 --style raw --v 6`

### For Stable Diffusion:
- Use the full prompt
- Add negative prompt: "cluttered, low quality, blurry, unprofessional, bright colors, neon"

### For Adobe Firefly:
- Use the full prompt
- Select "Social Media" or "Banner" format
- Choose "Dark" theme

## Customization Options

You can modify the prompt to match your preferences:

**For a lighter theme:**
- Change "dark theme" to "light theme with white/light gray background"
- Change text color to dark instead of light

**For a more colorful design:**
- Add: "vibrant color accents, colorful gradient backgrounds"

**For a more minimalist design:**
- Add: "ultra-minimalist, lots of white space, simple typography only"

**To include your logo:**
- Add: "include space for a logo in the top left or center"

## After Generation

Once you have the image:
1. Download it at the highest quality
2. Resize to exactly 1200x630 pixels if needed (use tools like Canva, Photoshop, or online resizers)
3. Optimize the file size (should be under 1MB)
4. Save as PNG or JPG
5. Place it at: `public/assets/images/og-image.png`

## Quick Test

After creating the image, you can test it using:
- https://www.opengraph.xyz/ (paste your URL)
- Facebook Debugger
- Twitter Card Validator
