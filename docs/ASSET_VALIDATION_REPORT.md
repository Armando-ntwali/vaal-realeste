# VAAL Asset Validation Report

Generated during Prompt 1 implementation.

## Source Folders Used

- `selected-assets/public-assets-ready`: used for ready brand, Cadenza logo, Bridge pattern, WhatsApp, and Bridge unit asset.
- `final assets`: used for the confirmed final homepage, Cadenza, Bridge, and shared amenity assets that were not present in `selected-assets/public-assets-ready`.
- `vaal_old2`: not touched.

## Public Asset Structure

The requested structure exists under `public/assets`:

- `brand`
- `homepage`
- `shared/amenities`
- `cadenza/logos`
- `cadenza/hero`
- `cadenza/exteriors`
- `cadenza/interiors`
- `cadenza/amenities`
- `bridge/logos`
- `bridge/hero`
- `bridge/pattern`
- `bridge/exteriors`
- `bridge/units`
- `bridge/amenities`

## Final Public Assets

| Path | Dimensions | Size |
| --- | --- | ---: |
| `/assets/brand/vaal-logo.svg` | SVG | 4,804 bytes |
| `/assets/brand/whatsapp.svg` | SVG | 2,245 bytes |
| `/assets/homepage/home-hero-skyview.mp4` | video master | 117,876,348 bytes |
| `/assets/homepage/home-hero-skyview-poster.jpg` | 2560x1440 | 947,620 bytes |
| `/assets/homepage/home-cadenza-preview-4k.jpg` | 3840x2560 | 2,106,818 bytes |
| `/assets/homepage/home-bridge-preview.jpg` | 1536x1024 | 2,371,112 bytes |
| `/assets/shared/amenities/amenity-culture-neighborhood.jpg` | 1122x1402 | 2,275,599 bytes |
| `/assets/shared/amenities/amenity-iconic-design.jpg` | 1122x1402 | 2,363,039 bytes |
| `/assets/shared/amenities/amenity-service-lifestyle.jpg` | 1122x1402 | 2,484,065 bytes |
| `/assets/shared/amenities/amenity-wellness.jpg` | 1600x2000 | 1,255,137 bytes |
| `/assets/cadenza/logos/cadenza-logo-gold.png` | 1024x922 | 46,703 bytes |
| `/assets/cadenza/hero/cadenza-hero-exterior-night.jpg` | 1672x941 | 2,238,786 bytes |
| `/assets/cadenza/exteriors/cadenza-exterior-main-render.jpg` | 1672x941 | 1,927,529 bytes |
| `/assets/cadenza/interiors/cadenza-interior-living-room.jpg` | 1536x1024 | 2,229,806 bytes |
| `/assets/cadenza/amenities/cadenza-amenity-family-spaces.jpg` | 1600x2000 | 707,922 bytes |
| `/assets/cadenza/amenities/cadenza-amenity-garden.jpg` | 1600x2000 | 1,280,328 bytes |
| `/assets/cadenza/amenities/cadenza-amenity-gym.jpg` | 1600x2000 | 554,157 bytes |
| `/assets/cadenza/amenities/cadenza-amenity-pool.jpg` | 1600x2000 | 1,488,273 bytes |
| `/assets/cadenza/amenities/cadenza-amenity-social-living.jpg` | 1122x1402 | 2,443,540 bytes |
| `/assets/bridge/logos/bridge-logo-mark-white.svg` | SVG | 429 bytes |
| `/assets/bridge/hero/bridge-hero-building-render.jpg` | 1672x941 | 3,162,504 bytes |
| `/assets/bridge/pattern/bridge-pattern-background.png` | 1727x829 | 12,498 bytes |
| `/assets/bridge/exteriors/bridge-lifestyle-exterior.jpg` | 1672x941 | 2,404,734 bytes |
| `/assets/bridge/units/bridge-unit-studio-main.jpg` | 1536x1024 | 2,612,759 bytes |
| `/assets/bridge/amenities/bridge-amenity-cinema.jpg` | 1600x2000 | 427,584 bytes |
| `/assets/bridge/amenities/bridge-amenity-lounge.jpg` | 1600x2000 | 723,760 bytes |
| `/assets/bridge/amenities/bridge-amenity-wellness.jpg` | 1600x2000 | 703,241 bytes |

## Notes

- The hero video is the 4K master and is intentionally preserved for this build.
- Several hero/render assets are below the ideal 2560x1440 target, but they are still strong enough for the first desktop demo when used with `object-fit: cover` and careful overlays.
- Shared amenity editorial images are portrait-oriented and appropriate for 4:5 cards.
