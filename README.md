# Sunrise Biotech - Premium Natural Health Products

A modern, fully functional e-commerce website frontend for Sunrise Biotech, specializing in premium natural spirulina and moringa health products.

## 🌱 About

Sunrise Biotech offers the finest natural health products including:
- Spirulina Powder, Tablets, and Mother Culture
- Moringa Powder, Dry Leaves, and Tablets

All products are 100% pure, lab-tested, and scientifically proven for optimal health benefits.

## ✨ Features

### 🛍️ E-commerce Functionality
- **Product Catalog**: Complete product listings with detailed descriptions
- **Shopping Cart**: Add, remove, and manage items
- **Checkout Process**: User-friendly checkout with form validation
- **WhatsApp Integration**: Direct ordering through WhatsApp for instant communication

### 🎨 Design & UX
- **Modern Design**: Clean, professional interface with natural green color scheme
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Elegant transitions and hover effects
- **Accessibility**: Semantic HTML and proper ARIA labels

### 📱 Pages Included
- **Home**: Hero section, featured products, company benefits
- **Products**: Filterable product grid with category sorting
- **Shopping Cart**: Full cart management with quantity controls
- **Checkout**: Complete order form with WhatsApp integration
- **About Us**: Company story, mission, and values
- **Contact**: Contact form, business information, and WhatsApp chat

### 🎨 Color Scheme
- **Primary**: #18230F (Deep Forest Green)
- **Secondary**: #27391C (Forest Green)
- **Accent**: #255F38 (Nature Green)
- **Highlight**: #1F7D53 (Emerald Green)

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui components
- **Routing**: React Router v6
- **State Management**: React Context API
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sunrise-biotech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:8080
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 WhatsApp Integration

The website integrates with WhatsApp for seamless customer communication:

1. **Product Orders**: "Buy Now" buttons open WhatsApp with pre-filled product details
2. **Cart Checkout**: Complete cart contents sent via WhatsApp
3. **Contact Form**: Contact inquiries forwarded to WhatsApp
4. **Quick Chat**: Direct WhatsApp contact buttons throughout the site

### Configuration
Update the WhatsApp number in the following files:
- `src/components/ProductCard.tsx`
- `src/pages/Cart.tsx`
- `src/pages/Checkout.tsx`
- `src/pages/Contact.tsx`
- `src/components/Footer.tsx`

Replace `+91-9737204425` with your actual WhatsApp business number.

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── ProductCard.tsx    # Product display component
├── contexts/
│   └── CartContext.tsx    # Shopping cart state management
├── data/
│   └── products.ts        # Product catalog data
├── pages/
│   ├── Home.tsx          # Homepage
│   ├── Products.tsx      # Product listing
│   ├── Cart.tsx          # Shopping cart
│   ├── Checkout.tsx      # Order completion
│   ├── About.tsx         # Company information
│   ├── Contact.tsx       # Contact page
│   └── NotFound.tsx      # 404 error page
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── index.css             # Design system & global styles
```

## 🎨 Design System

The project uses a comprehensive design system with:
- **Color Tokens**: Semantic color variables for consistency
- **Component Variants**: Predefined styles for different use cases
- **Responsive Grid**: Mobile-first responsive design
- **Animation Classes**: Smooth transitions and micro-interactions
- **Typography Scale**: Consistent text sizing and hierarchy

## 🛒 Product Management

Products are managed through the `src/data/products.ts` file. To add new products:

1. Add product data to the `products` array
2. Include product image in `public/images/`
3. Update categories if needed

Example product structure:
```typescript
{
  id: "unique-id",
  name: "Product Name",
  description: "Product description...",
//   price: 999,
  image: "/images/product-image.jpg",
  category: "Spirulina" | "Moringa",
  benefits: ["Benefit 1", "Benefit 2"],
//   weight: "100g"
}
```

## 📸 Images

Product images are stored in `public/images/` and are automatically optimized. The current product images include:
- spirulina-powder.jpg
- spirulina-tablets.jpg
- spirulina-culture.jpg
- moringa-powder.jpg
- moringa-leaves.jpg
- moringa-tablets.jpg

## 🔧 Customization

### Brand Colors
Update colors in `src/index.css` under the `:root` CSS variables section.

### Product Categories
Modify categories in `src/data/products.ts` and update the filter logic in `src/pages/Products.tsx`.

### Contact Information
Update business details in:
- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`
- `index.html` (structured data)

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first CSS approach
- Touch-friendly button sizes
- Optimized images for mobile
- Swipe-friendly product cards
- Mobile-optimized checkout flow

## 🚀 Deployment

The website can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Build the project and upload the `dist/` folder to your hosting provider.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📧 Support

For questions or support:
- Email: patelajay63610@gmail.com
- WhatsApp: +91-9737204425, 08048783099

- Website: http://www.sunrisebiotech.in


## 📄 License

This project is proprietary software of Sunrise Biotech. All rights reserved.

---

Built with ❤️ for natural health and wellness.