# Appscrip Technical Assessment - Product Listing Page (PLP)

A responsive, high-performance E-commerce Product Listing Page built with Next.js (App Router), CSS Modules, and Server-Side Rendering (SSR). This project strictly adheres to a zero-utility CSS library policy (no Tailwind CSS, Bootstrap, or Material UI) and is fully optimized for SEO and modern web performance standards.

---

## Overview

This project was developed for the Appscrip Frontend Technical Assessment. It implements a complete Product Listing Page featuring server-side data fetching from the FakeStore API, custom responsive layouts, interactive filter structures, and complete metadata and structured schema integration.

- **Candidate Name**: Ankit Malviya
- **Repository Name**: Appscrip-task-ankit-malviya
- **Deployment Platform**: Netlify / Vercel

---

## Technical Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules (Plain CSS with modular encapsulation)
- **Data Source**: FakeStore API (with server-side fallback handling)
- **Rendering Strategy**: Server-Side Rendering (SSR) with Incremental Static Regeneration (ISR)
- **SEO & Structured Data**: Schema.org JSON-LD, Open Graph, and custom metadata

---

## Key Features & Architecture

### Core Functionality
- **Dynamic Product Grid**: Displays products in a responsive grid layout with support for desktop, tablet, and mobile views.
- **Server-Side Data Fetching**: Fetches product listings on the server to ensure fast initial page loads and optimal search engine indexability.
- **Filter Sidebar**: Expandable/collapsible filter categories with multi-selection logic and mobile drawer capability.
- **Product Cards**: Interactive design including custom image containers, product details, hover effects, and wishlist interaction states.

### SEO & Standards Compliance
- **Semantic HTML**: Built using proper structural elements (`header`, `main`, `nav`, `section`, `article`, `footer`).
- **Heading Hierarchy**: Strict adherence to single `h1` tag usage alongside structured `h2` and `h3` tags.
- **Image Optimization**: Custom descriptive `alt` tags and keyword-optimized asset naming conventions.
- **Structured Schema**: Embedded JSON-LD schema markup (`Product` and `Breadcrumbs`) for enhanced search engine rich snippets.
- **Open Graph & Metadata**: Configured title, description, canonical tags, and Open Graph attributes in root layout.

---

## Project Directory Structure

```
appscrip-task/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Main page with SSR
│   │   ├── globals.css         # Global styles
│   │   └── page.module.css     # Page-specific styles
│   └── components/
│       ├── Header/             # Navigation header
│       ├── Footer/             # Footer component
│       ├── Filter/             # Filter sidebar
│       ├── ProductCard/        # Individual product card
│       ├── ProductList/        # Product grid with pagination
│       └── PageContent/        # Main content area
├── public/
│   └── images/                 # Product images
├── .gitignore                  # Git ignore file
├── package.json               # Dependencies and scripts
├── README.md                  # Project documentation
└── tsconfig.json              # TypeScript configuration
```

---

## Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Features

### Product Display
- 9 products per page with pagination
- Real product images from API
- Hover effects with top/bottom borders
- Heart icon for wishlist (right-aligned)
- Out of stock indicators

### Filter System
- 8 filter categories with expandable options
- Checkbox selection for each option
- "Unselect all" functionality
- Mobile-responsive filter sidebar

### Header
- Logo and navigation
- Search, wishlist, cart, and user icons
- Language selector
- Mobile hamburger menu
- Icon size: 24x24px on desktop

### Responsive Design
- **Mobile**: < 576px
- **Tablet**: 576px - 1024px  
- **Desktop**: > 1024px

---

## SEO Implementation

### SEO Features
- Meta title and description
- Open Graph tags for social sharing
- Twitter Card integration
- JSON-LD Schema markup for products
- Breadcrumb schema
- Proper H1 and H2 heading structure
- Alt text on all images
- SEO-friendly image naming
- Canonical URLs
- Robots meta configuration

### API Integration
The application uses FakeStoreAPI with automatic fallback to mock data:

```typescript
// API endpoint
https://fakestoreapi.com/products

// Revalidation: 1 hour
next: { revalidate: 3600 }
```

---

## Task Requirements Compliance

### Completed Requirements
- HTML & CSS implementation
- React.js with Next.js framework
- Server-Side Rendering (SSR)
- Responsive for mobile & tablet
- Clean code structure
- Proper naming conventions
- Minimum pre-built packages
- Screen size optimization
- Page title and description
- H1 & H2 tags
- Schema markup (JSON-LD)
- SEO-friendly image names
- Alt text on images
- Mock API integration (FakeStoreAPI)

### Deployment Ready
- Ready for Netlify deployment
- GitHub repository named: Appscrip-task-ankit-malviya
- Public repository for evaluation

---

## Performance

- **Initial Load**: Server-side rendering for fast first paint
- **Navigation**: Client-side for subsequent page loads
- **Images**: Lazy loading with proper dimensions
- **API**: Cached with ISR for optimal performance

---

## Code Quality

- **Component Architecture**: Separation of server and client components
- **Type Safety**: Full TypeScript implementation
- **CSS Organization**: CSS Modules for scoped styling
- **Error Handling**: API fallback mechanisms
- **Performance**: Optimized images and caching

---

## Author

**Ankit Malviya**
- Task: Appscrip Frontend Development Challenge
- Repository: Appscrip-task-ankit-malviya

---

## License

This project is created for evaluation purposes as part of the Appscrip task assignment.

---

**Note**: This project demonstrates professional frontend development practices including modern React patterns, SEO optimization, and responsive design principles.