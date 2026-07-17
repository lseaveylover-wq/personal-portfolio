# How to Add the Programming Laptop Lottie Animation

## Quick Setup

1. **Visit the Lottie File:**
   - Go to: https://lottiefiles.com/free-animation/programming-computer-wr6yLa2L3D

2. **Download the JSON:**
   - Click the "Download" button
   - Select "Lottie JSON"
   - Save the file

3. **Add to Your Project:**
   - Copy the downloaded JSON file to: `public/programming-laptop.json`
   - Or use any other name and update the path in `app/components/LaptopIllustration.tsx`

## Alternative: Use Direct URL

If you want to use the animation directly from LottieFiles CDN:

1. On the LottieFiles page, click "Share"
2. Copy the "Lottie URL" or "CDN URL"
3. Update the first URL in the `sources` array in `LaptopIllustration.tsx`

## The Component Will:

✅ Try to load from multiple sources
✅ Show a loading spinner while fetching
✅ Fall back to SVG illustration if Lottie fails
✅ Work perfectly with or without the animation file

## Current Setup:

The component tries these sources in order:
1. LottieFiles CDN (if available)
2. Alternative CDN
3. Local file at `/public/programming-laptop.json`
4. Fallback to custom SVG

## Install Dependencies:

```bash
npm install
```

The `lottie-react` package is already included in package.json!

## Run the Project:

```bash
npm run dev
```

Visit http://localhost:3000 and enjoy your animated laptop! 🎉
