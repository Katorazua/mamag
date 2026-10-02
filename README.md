<div align="center">

# Mama G

### Authentic Taste. Made With Love.

**A warm, responsive digital menu for a fictional Nigerian restaurant in Makurdi, Benue State.**

[Explore the Menu](menu.html) · [Our Story](about.html) · [Events](events.html)

![HTML5](https://img.shields.io/badge/HTML5-semantic-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-responsive-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=222)
![No backend](https://img.shields.io/badge/backend-none-lightgrey)

</div>

---

## About the project

Mama G is a frontend-only restaurant website made with plain HTML, CSS, and JavaScript. It introduces the restaurant, shares its story and events, and lets visitors browse, search, and filter a Nigerian-inspired menu.

> **School project demo:** Mama G and its restaurant story are fictional. Online ordering, payment, and reservations are not connected.

## Pages

| Page | What you'll find |
| --- | --- |
| [Home](index.html) | Welcome section, popular dishes, restaurant introduction, and highlights |
| [About](about.html) | Fictional restaurant story, philosophy, kitchen, and values |
| [Menu](menu.html) | Twelve dishes with live search and category filters |
| [Events](events.html) | Family dinners, weekend specials, celebrations, and event enquiries |
| [Dish details](menu/) | Individual pages with descriptions, ingredients, portions, and prices |

## Features

- Responsive layouts for desktop, tablet, and mobile
- Mobile navigation with keyboard-friendly controls
- Client-side menu search and category filtering
- Individual dish pages with related meal links
- Search overlay, scroll effects, and subtle reveal animations
- Reduced-motion support for visitors who prefer less animation
- Naira prices and Nigerian restaurant content

## Built with

- **HTML5** for semantic page structure
- **CSS3** for styling, layout, and responsive design
- **Vanilla JavaScript** for navigation, filtering, search, and interactions
- **Inter** via Google Fonts and **Font Awesome** via CDN
- Food photography served from Unsplash; replace the image URLs with local files when ready

## Project structure

```text
.
├── index.html
├── about.html
├── menu.html
├── events.html
├── menu/
│   ├── jollof-rice.html
│   ├── fried-rice.html
│   ├── coconut-rice.html
│   ├── pounded-yam.html
│   ├── amala-ewedu.html
│   ├── pepper-soup.html
│   ├── grilled-chicken.html
│   ├── fried-fish.html
│   ├── beef-suya.html
│   ├── plantain.html
│   ├── chapman.html
│   └── zobo.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── menu-details.css
├── js/
│   ├── main.js
│   ├── menu.js
│   └── search.js
└── images/
```

## Run locally

No build step or package installation is needed. From the project folder, start a local server:

```bash
python -m http.server 8000
```

Then visit **http://localhost:8000**. You can also open `index.html` directly in a browser; using a local server is recommended.

## Learn and customize

### How the files work together

Each page links to the shared stylesheets in its `<head>`:

```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/responsive.css">
```

Pages load JavaScript with a deferred script reference:

```html
<script src="js/main.js" defer></script>
```

Detail pages live one folder deeper, so their paths start with `../`, for example `../css/style.css`.

### Add a menu item

1. Add a card to `menu.html`, following an existing card's structure.
2. Set its `data-category`, `data-name`, and `data-description` values so search and filters can find it.
3. Add a descriptive image `alt` attribute, price, and detail-page link.
4. Create the linked page in `menu/` using an existing dish detail page as a guide.
5. Add the new detail page to the menu list above.

### Change a price or image

- **Price:** Update the price on the menu card and on the matching detail page.
- **Image:** Replace the `src` URL in the HTML. To use a local image, place it in `images/` and use a path such as `images/jollof-rice.jpg`. Include a useful `alt` description.

## Project boundaries

This is a static frontend demonstration. The “Order Now” links return visitors to the menu; there is no order submission, backend, database, payment, or booking service. Contact and social details are sample project content and should be updated before real-world use.

## Ideas for future work

- Add a real enquiry or reservation form
- Connect order requests to a backend
- Replace sample contact details and add verified restaurant photography
- Add customer reviews and a photo gallery

---

<div align="center">

Made as a learning project to explore how HTML, CSS, and JavaScript work together.

</div>
