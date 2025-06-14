# Products Web Application

A modern React application for browsing and managing products with advanced filtering, search, and favorites functionality. Built with React, TypeScript, Vite, and Tailwind CSS.

## ✨ Features

- **Product Catalog**: Browse through a comprehensive list of products
- **Advanced Search**: Search products by name, description, or category
- **Smart Filtering**: Filter products by category with real-time updates
- **Flexible Sorting**: Sort products by price (ascending/descending) and other criteria
- **Favorites System**: Mark products as favorites and manage your wishlist
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile
- **Loading States**: Smooth loading experiences with skeleton components
- **Error Handling**: Robust error handling with user-friendly messages

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **HTTP Client**: Axios
- **State Management**: React Hooks (useState, useEffect, useReducer)
- **Icons**: Lucide React
- **Code Quality**: ESLint, Prettier, Husky

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **Yarn** (recommended) or npm

## 🚀 Quick Start

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
VITE_API_URL=https://your-api-endpoint.com/api
```

> **Note**: Replace `https://your-api-endpoint.com/api` with your actual API endpoint URL.

### 4. Start Development Server

```bash
# Using Yarn
yarn dev

# Or using npm
npm run dev
```

The application will be available at `http://localhost:5173`

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
│   ├── product-card.tsx
│   └── card-skeleton.tsx
├── hooks/           # Custom React hooks
│   └── useProducts.tsx
├── lib/             # Utility functions and configurations
│   ├── api.ts       # Axios instance configuration
│   └── constants.ts # Application constants
├── pages/           # Page components
│   └── index.tsx    # Home page
├── services/        # API service functions
│   └── products.service.ts
├── styles/          # Global styles and CSS
├── types/           # TypeScript type definitions
└── main.tsx         # Application entry point
```

## 🔧 Configuration

### Environment Variables

The application uses the following environment variables:

- `VITE_API_URL`: Base URL for the API endpoint

### API Integration

The application expects a REST API with the following endpoint:

- `GET /products` - Returns an array of products

Expected product data structure:

```typescript
interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  // Add other properties as needed
}
```

## 🎨 Styling

This project uses **Tailwind CSS v4** for styling with:

- Responsive design utilities
- Custom component styling
- Dark mode support (if implemented)
- Modern CSS Grid and Flexbox layouts

## 🔍 Key Components

### useProducts Hook

Central state management for:

- Product data fetching
- Search functionality
- Category filtering
- Sorting logic
- Favorites management

### ProductCard Component

Displays individual product information with:

- Product image
- Name and description
- Price display
- Favorite toggle
- Responsive layout

## 🚀 Deployment

### Build for Production

```bash
yarn build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
yarn preview
```

## 🧪 Development Guidelines

### Code Quality

- ESLint configuration for code consistency
- Prettier for code formatting
- Husky for pre-commit hooks
- TypeScript for type safety

### Best Practices

- Component composition over inheritance
- Custom hooks for reusable logic
- Proper error boundaries
- Accessible UI components
- Performance optimization with React.memo where needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run linting and formatting (`yarn lint:fix && yarn format`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `vite.config.ts` or kill the process using the port
2. **API connection issues**: Verify the `VITE_API_URL` environment variable
3. **Build failures**: Clear node_modules and reinstall dependencies

### Getting Help

If you encounter issues:

1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure your API endpoint is accessible
4. Check network connectivity

## 🔄 Version History

- v0.0.0 - Initial release with core product browsing functionality
