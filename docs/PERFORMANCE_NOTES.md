# VAAL Performance Notes

## Hero Video

- Current file: `/assets/homepage/home-hero-skyview.mp4`
- Current source size: about 112 MB.
- Current handling: used directly with `muted`, `autoPlay`, `loop`, `playsInline`, `preload="auto"`, and poster fallback.
- TODO in code: create optimized 1920x1080 MP4, 1920x1080 WebM, and optional 2560x1440 MP4 versions later and keep the 4K file as the master.

## Image Handling

- Images are rendered with `object-fit: cover` and stable aspect ratios to avoid distortion.
- Amenity cards use portrait ratios.
- Hero and editorial images use overlays and focal framing rather than stretching.

## Netlify Compatibility

- The app builds as static App Router pages with `next build`.
- Inquiry form markup is in `src/components/sections/InquiryForm.tsx` with `form name="vaal-inquiry"`, `method="POST"`, `data-netlify="true"`, and hidden metadata fields.
- A Neon-backed lead store remains a TODO: create the leads table, store source metadata, add a server route or server action, and connect to CRM later.
