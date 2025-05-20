# Shan Tech Gadgets Website

A modern e-commerce website showcasing tech products with cookie-based tracking functionality for user interactions.

## Features

### 1. Product Showcase
- 10 different tech products with detailed descriptions
- High-quality product images
- Responsive product cards with animations
- Detailed individual product pages

### 2. Cookie-Based Tracking
The website implements two types of cookie tracking:

#### Recently Viewed Products
- Tracks the last 5 products viewed by the user
- Updates automatically when visiting product pages
- Persists across browser sessions (30-day cookie)
- Displays in a dedicated section on the homepage

#### Most Visited Products
- Tracks the 5 most frequently visited products
- Counts number of visits per product
- Sorts products by visit count
- Persists across browser sessions (30-day cookie)
- Displays in a dedicated section on the homepage

### 3. UI Features
- Sticky navigation bar with scroll effects
- Back to top button
- Smooth scroll animations
- Responsive design for all screen sizes
- Product card hover effects
- Modern gradient backgrounds

## Demo

### Watch how it works:

https://user-images.githubusercontent.com/shanmukha66/Cookie_App_Webtracking/assets/main/Working.mov

<video src="Working.mov" controls title="Demo Video"></video>

## Technical Implementation

### Cookie Structure

#### Recently Viewed Cookie
```javascript
{
    "recentlyViewed": [
        {
            "id": "product-id",
            "name": "Product Name",
            "image": "image-path"
        }
        // ... up to 5 items
    ]
}
```

#### Most Visited Cookie
```javascript
{
    "mostVisited": [
        {
            "id": "product-id",
            "name": "Product Name",
            "image": "image-path",
            "visits": 5
        }
        // ... up to 5 items
    ]
}
```

## How to Run

1. Clone the repository:
```bash
git clone <repository-url>
cd Cookie
```

2. Start a local server (multiple options):

Using Python (Python 3):
```bash
python3 -m http.server 8000
```

Using Python (Python 2):
```bash
python -m SimpleHTTPServer 8000
```

Using Node.js (with http-server):
```bash
npx http-server
```

3. Open your browser and navigate to:
- If using Python: `http://localhost:8000`
- If using http-server: `http://localhost:8080`

## File Structure
```
Cookie/
├── index.html           # Main homepage
├── styles.css          # Global styles
├── js/
│   ├── cookies.js      # Cookie tracking implementation
│   └── ui.js           # UI enhancement functions
├── images/             # Product images
│   ├── smartphone.png
│   ├── laptop.png
│   └── ...
└── products/           # Individual product pages
    ├── smartphone.html
    ├── laptop.html
    └── ...
```

## Testing Cookie Functionality

1. Visit different product pages by clicking on "Learn More" buttons
2. Return to homepage to see "Recently Viewed Products" updated
3. Visit same products multiple times to see "Most Visited Products" change
4. Clear browser cookies to reset tracking

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Notes

- Cookies expire after 30 days
- Maximum of 5 items in each tracking category
- Product images should be in PNG format
- Local server required for proper functionality
- JavaScript must be enabled in the browser

## Development

To modify the cookie functionality:
1. Edit `js/cookies.js` for cookie logic
2. Edit `js/ui.js` for UI enhancements
3. Modify cookie expiration in `setCookie()` function (currently 30 days)

## Troubleshooting

1. If images don't load:
   - Verify image paths in HTML files
   - Ensure images are in the correct directory
   - Check image file extensions (should be .png)

2. If cookies don't work:
   - Enable JavaScript in browser
   - Allow cookies in browser settings
   - Check browser console for errors

3. If styles don't apply:
   - Verify CSS file path
   - Clear browser cache
   - Check browser console for 404 errors 