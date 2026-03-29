# Image Ray Track

A smooth, drag-based image carousel built with vanilla HTML, CSS, and JavaScript. Images slide horizontally across the screen in response to mouse or touch input, with a parallax object-position effect that adds depth and dimension to each photo as you drag.

---

## Preview

A fullscreen, black-background gallery of seven high-resolution nature photographs. Drag left or right to glide through the track. Each image subtly shifts its internal crop as the track moves, creating a cinematic parallax effect.

---

## Features

- **Drag to scroll** — click and drag (or touch and swipe) to navigate the image track
- **Parallax object-position** — each image's visible crop shifts as the track moves, giving a layered, 3D-like feel
- **Touch support** — works on mobile and tablet via `ontouchstart`, `ontouchmove`, and `ontouchend` events
- **Smooth animation** — uses the Web Animations API with a 2500ms easing curve for fluid motion
- **Hover scale effect** — individual images scale up slightly on hover for visual feedback
- **No dependencies** — pure vanilla JavaScript, zero libraries or frameworks

---

## Tech Stack

| Layer      | Technology                   |
|------------|------------------------------|
| Markup     | HTML5                        |
| Styling    | CSS3 (Flexbox, custom sizing)|
| Logic      | Vanilla JavaScript (ES6+)    |
| Images     | Unsplash (external URLs)     |
| Animation  | Web Animations API           |

---

## File Structure

```
Image-Ray-Track/
├── INDEX.HTML      # Page structure and image track markup
├── INDEX.CSS       # Layout, track positioning, image styles
└── INDEX.JS        # Mouse and touch event logic, animation control
```

---

## How It Works

**HTML** sets up a `div#image-track` container holding seven `<img>` tags. The container carries three custom `data-*` attributes that act as state:

- `data-mouse-down-at` — stores the X position where the mouse was pressed
- `data-prev-percentage` — stores the track's scroll percentage before the current drag
- `data-percentage` — the current scroll percentage during a drag

**JavaScript** computes how far the mouse has moved relative to the window width, converts that to a percentage between `0` and `-100`, and applies two simultaneous animations:

1. The track container translates horizontally via `transform: translateX()`
2. Each image's `object-position` shifts from `100%` to `25%` as the percentage changes, creating the parallax crop effect

**CSS** positions the track absolutely at the center of the viewport. Images are sized in `vmin` units so the layout scales proportionally across screen sizes.

---

## Getting Started

No build tools or installs required. Just open the file in a browser.

```bash
# Clone the repository
git clone https://github.com/switchd2/Image-Ray-Track-.git

# Open in browser
cd Image-Ray-Track-
open INDEX.HTML
```

Or drag `INDEX.HTML` directly into any modern browser window.

---

## Usage

- **Desktop** — hold down the mouse button anywhere on the page and drag left or right
- **Mobile / Tablet** — swipe left or right with a finger
- Release to stop; the track keeps its last position until the next drag

---

## Customization

**Swap images** — replace the `src` URLs in `INDEX.HTML` with any image links. Keep `draggable="false"` on each `<img>` to prevent the browser's native drag behavior from interfering.

**Add more images** — just add more `<img class="image" ... />` elements inside `#image-track`. The layout will expand automatically.

**Adjust image size** — in `INDEX.CSS`, change `width` and `height` on `.image`. Values are in `vmin` so they scale with the viewport.

**Change animation speed** — in `INDEX.JS`, the `duration: 2500` value (in milliseconds) controls how fast the track and images animate. Lower it for snappier movement, raise it for a more luxurious glide.

**Parallax intensity** — the expression `125 + nextPercentage * 1.5` in `INDEX.JS` controls how aggressively the image crop shifts. Increase the `1.5` multiplier for a stronger parallax, decrease it for a subtler effect.

---

## Browser Support

Works in all modern browsers that support the Web Animations API:

- Chrome 84+
- Firefox 63+
- Safari 13.1+
- Edge 84+

---

## License

This project is open source. Feel free to use, modify, and build on it.
