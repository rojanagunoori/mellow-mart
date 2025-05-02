# Mellow Mart - E-Commerce Platform

**Mellow Mart** is a modern, responsive e-commerce application built with **Next.js** and **Tailwind CSS**. The platform allows users to browse through various product categories, add products to their cart, and make purchases. It is designed with a clean, intuitive interface, providing a seamless shopping experience across both desktop and mobile devices.

## Key Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop views using Tailwind CSS.
- **Product Catalog**: Users can view a wide range of products, each with detailed descriptions, images, and pricing.
- **Shopping Cart**: Integrated cart functionality that allows users to add and remove items, adjust quantities, and view their total order cost.
- **Category Filters**: The platform includes various product categories such as Men’s Clothing, Women’s Clothing, Electronics, and Jewelry.
- **Add to Cart with Real-time Updates**: Utilizes React Context API for global state management to display real-time cart updates.
- **Hover Effects**: Interactive product images with hover zoom effects to enhance the user experience.

## Technologies Used

- **Frontend**:
  - **Next.js**: A powerful React framework used for building server-rendered and statically generated web applications.
  - **Tailwind CSS**: A utility-first CSS framework that enables rapid UI development.
  - **React Context API**: For managing global state, particularly for the shopping cart functionality.
- **Deployment**:
  - **Surge**: A static web publishing platform for deploying the site live.

## How It Works

1. **Browse Products**: Users can navigate through various product categories, each showcasing multiple products with detailed information like title, description, price, and ratings.
2. **Add to Cart**: Users can easily add products to their shopping cart. The cart dynamically updates as users add or remove items.
3. **Checkout (Future Implementation)**: Users will soon be able to proceed to checkout and complete their purchase (integration with payment gateways will be added).

## Project Links

- **GitHub Repository**: [https://github.com/rojanagunoori/mellow-mart.git](https://github.com/rojanagunoori/mellow-mart.git)
- **Live Demo**: [https://mellow-mart.surge.sh/](https://mellow-mart.surge.sh/)

## Future Enhancements

- **User Authentication**: Implementing user sign-in and sign-up functionality to save cart items and order history.
- **Payment Gateway Integration**: Adding support for online payments using popular services like Stripe or PayPal.
- **Product Reviews**: Allow users to leave reviews and ratings for products they purchase.

## Getting Started

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/rojanagunoori/mellow-mart.git
Install dependencies:


npm install
Run the development server:


npm run dev
The application will be accessible at http://localhost:3000.