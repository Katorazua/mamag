# Mama G Digital Menu

Mama G Digital Menu is a beginner-friendly restaurant website built with plain HTML, CSS, and JavaScript. It shows a restaurant landing page, an about page, a menu page with filters and search, an events page, and detailed menu item pages.

## Technologies used

- HTML5 for page structure
- CSS3 for styling and responsive layout
- Vanilla JavaScript for navigation, search, filtering, and animation
- Font Awesome for icons
- Google Fonts for the Inter typeface

## Project structure

```text
mama-g/
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
├── README.md
└── images/
```

## How HTML links to CSS

Each HTML file links to CSS files in the `<head>` section using a normal `<link rel="stylesheet" href="...">` tag. Example:

```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/responsive.css">
```

This is how the browser loads the styling for the page.

## How HTML links to JavaScript

JavaScript files are linked in the HTML with the `<script src="..." defer></script>` pattern. Example:

```html
<script src="js/main.js" defer></script>
```

The `defer` attribute helps the script load after the HTML is parsed, which is good for most page interactivity.

## How to add a new menu item

1. Pick a food image and save it in the `images/` folder or use a remote image URL.
2. Add a new card to `menu.html` in the same card format as the other items.
3. Copy the card structure and add your food name, description, category, and price.
4. Create a matching detail page in the `menu/` folder.
5. Update the links so the new card points to its new page.

## How to change menu prices

Open `menu.html` and find the `₦` price text in the food card. Change the number in that card. If the item has a detail page, update the price there too.

## How to replace images

Either:

- replace the current URL in the HTML with a new image URL, or
- save the new image inside the `images/` folder and update the `src` attribute.

Example:

```html
<img src="images/your-new-food.jpg" alt="Description of the food" loading="lazy">
```

## How to run the project locally

Because this is a frontend-only website, you can run it with a simple local web server.

### Option 1: Use Python

```bash
cd your-folder
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 2: Open the HTML files directly

You can also open `index.html` in the browser, but a local server is better because it behaves more like a real website.

## Future improvements

- Add a real online ordering form
- Connect the menu to a backend database
- Add a payment system
- Add reservation booking
- Create a photo gallery
- Add customer reviews and ratings

## Note for students

This project is a simple front-end MVP. It is designed to help you understand how HTML gives structure, CSS gives style, and JavaScript adds interactivity. The goal is to keep the code clean, readable, and easy to learn.
