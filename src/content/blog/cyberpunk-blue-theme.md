---
title: "New Aesthetic: Cyberpunk Blue Theme"
date: "Feb 09, 2026"
desc: "Applying a modern neon aesthetic to the portfolio using Tailwind CSS."
image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000"
slug: "cyberpunk-blue-theme"
---

# Cyberpunk Blue Theme

I've updated the portfolio with a "Cyberpunk Blue" theme. This involves a dark background with vibrant **Cyan** and **Violet** accents.

## Tailwind Configuration

I extended the color palette in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#22d3ee', // cyan-400
        'secondary': '#8b5cf6', // violet-500
      }
    }
  }
}
```

## Typography

Using the `@tailwindcss/typography` plugin ensures that these blog articles look great and are easy to read.

```bash
npm install -D @tailwindcss/typography
```

And in the code:
```html
<div class="prose prose-slate max-w-none">
  <!-- Content -->
</div>
```

The result is a futuristic feel that matches the modern tech stack.
