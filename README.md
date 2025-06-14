# Products Web Application

A modern React application for browsing and managing products with advanced filtering, search, and favorites functionality. Built with React, TypeScript, Vite, and Tailwind CSS.

## ✨ Features

- **Product Catalog**: Browse through a comprehensive list of products fetched from FakeStore API
- **Real-time Search**: Search products by title with instant filtering
- **Category Filtering**: Filter products by category (Electronics, Jewelery, Men's Clothing, Women's Clothing)
- **Price Sorting**: Sort products by price (Low to High / High to Low)
- **Favorites System**: Mark products as favorites with localStorage persistence
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile
- **Loading States**: Smooth loading experiences with skeleton components
- **Error Handling**: Robust error handling with user-friendly messages
- **State Management**: Advanced state management using useReducer for complex product operations
- **Persistent Favorites**: Favorite products persist across browser sessions

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **HTTP Client**: Axios
- **State Management**: React Hooks (useState, useEffect, useReducer)
- **Icons**: Lucide React
- **Code Quality**: ESLint, Prettier, Husky
- **Utility Libraries**:
  - `clsx` and `tailwind-merge` for conditional styling
  - `class-variance-authority` for component variants

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **Yarn** (recommended) or npm

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd web
```

### 2. Install Dependencies

```bash
# Using Yarn (recommended)
yarn install

# Or using npm
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your environment variables:

```env
VITE_API_URL=https://fakestoreapi.com
```

> **Note**: The application is configured to work with FakeStore API by default. You can change this to point to your own API endpoint.

### 4. Start Development Server

```bash
# Using Yarn
yarn dev

# Or using npm
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production

```bash
# Using Yarn
yarn build

# Or using npm
npm run build
```

### 6. Preview Production Build

```bash
# Using Yarn
yarn preview

# Or using npm
npm run preview
```

## 📜 Available Scripts

| Script          | Description                      |
| --------------- | -------------------------------- |
| `yarn dev`      | Start development server         |
| `yarn build`    | Build for production             |
| `yarn preview`  | Preview production build locally |
| `yarn lint`     | Run ESLint                       |
| `yarn lint:fix` | Fix ESLint issues automatically  |
| `yarn format`   | Format code with Prettier        |

## 🏗 Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable React components
│   ├── sections/    # Page section components
│   │   └── products-section.tsx
│   ├── product-card.tsx
│   ├── card-skeleton.tsx
│   ├── search-bar.tsx
│   ├── category-select.tsx
│   └── sort-select.tsx
├── hooks/           # Custom React hooks
│   ├── useProducts.tsx      # Main product state management
│   └── usePersistedState.ts # localStorage persistence hook
├── lib/             # Utility functions and configurations
│   ├── api.ts       # Axios instance configuration
│   ├── constants.ts # Application constants
│   ├── utils.ts     # Utility functions
│   └── functions.ts # Helper functions
├── pages/           # Page components
│   └── index.tsx    # Home page
├── services/        # API service functions
│   └── products.service.ts
├── styles/          # Global styles and CSS
├── types/           # TypeScript type definitions
│   └── products.ts  # Product-related types
├── App.tsx          # Root component
└── main.tsx         # Application entry point
```

## 🎯 Design Decisions

### State Management

- **useReducer for Complex State**: Used `useReducer` instead of multiple `useState` hooks for managing the complex product state (filtering, sorting, searching)
- **Custom Hooks**: Separated concerns by creating `useProducts` for product logic and `usePersistedState` for localStorage functionality
- **Centralized State**: All product-related state is managed in one place for better maintainability

### API Integration

- **Service Layer**: Created a separate service layer (`products.service.ts`) for API calls to keep components clean
- **Axios Configuration**: Centralized API configuration in `lib/api.ts` for consistent request handling
- **Error Handling**: Comprehensive error handling at both service and component levels

### Component Architecture

- **Component Composition**: Used component composition over prop drilling
- **Reusable Components**: Created reusable form components (`SearchBar`, `CategorySelect`, `SortSelect`)
- **Loading States**: Implemented skeleton components for better UX during loading

### Styling Approach

- **Tailwind CSS**: Chose Tailwind for utility-first styling and consistent design system
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Component Variants**: Used utility functions for conditional styling

### Data Persistence

- **localStorage**: Implemented favorites persistence using localStorage with a custom hook
- **Type Safety**: Full TypeScript support for all data structures and API responses

## 🔧 Configuration

### Environment Variables

The application uses the following environment variables:

- `VITE_API_URL`: Base URL for the API endpoint (defaults to FakeStore API)

### API Integration

The application expects a REST API with the following endpoint:

- `GET /products` - Returns an array of products

Expected product data structure (compatible with FakeStore API):

```typescript
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
```

## 🔍 Key Components

### useProducts Hook

Central state management for:

- Product data fetching
- Real-time search functionality (searches by title)
- Category filtering (Electronics, Jewelery, Men's/Women's Clothing)
- Price sorting (ascending/descending)
- Favorites management with persistence

### usePersistedState Hook

Generic hook for localStorage persistence:

- Automatic serialization/deserialization
- Type-safe implementation
- Used for favorites persistence

### ProductCard Component

Displays individual product information with:

- Product image with fallback
- Title and description
- Price display
- Favorite toggle functionality
- Responsive layout

## 🔄 What I'd Improve With More Time

### Testing

- **Unit Tests**: Write comprehensive unit tests for custom hooks (`useProducts`, `usePersistedState`)
- **Component Tests**: Add React Testing Library tests for all components
- **Integration Tests**: Test the complete user flows (search, filter, favorite)
- **API Tests**: Mock API responses and test error scenarios

- **Docker**: Add Docker support for easy deployment

### UI/UX Improvements

- **Enhanced Styling**: Improve the overall visual design with better color schemes, shadows, and animations
- **Advanced Animations**: Add smooth transitions for filtering, sorting, and favorites
- **Better Loading States**: More sophisticated loading animations and progressive loading
- **Dark Mode**: Implement dark mode support with theme switching
- **Image Optimization**: Add image lazy loading and placeholder improvements
- **Mobile UX**: Enhanced mobile experience with touch gestures and better responsive breakpoints

### Additional Features

- **Product Details Page**: Dedicated page for individual product details
- **Advanced Filtering**: Filter by price range, ratings, and multiple categories
- **Search Enhancements**: Fuzzy search, search history, and search suggestions
- **Pagination**: Implement pagination for better performance with large datasets
- **Sorting Options**: Add more sorting options (rating, name, date added)
- **Favorites Management**: Dedicated favorites page with bulk actions

### Performance Optimizations

- **Code Splitting**: Implement route-based code splitting
- **Memoization**: Add React.memo and useMemo where appropriate
- **Virtual Scrolling**: For handling large product lists
- **Image Optimization**: WebP format support and responsive images
