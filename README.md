🛒 E-Commerce Project

- Frontend URL: https://api-e-commerace-in-node-js-1.onrender.com

- Backend URL: https://api-e-commerace-in-node-js.onrender.com

 This is a full-stack E-Commerce Web Application built with:

 Frontend: React + Vite + Tailwind CSS

 Backend: Node.js + Express + MongoDB

 Authentication: JWT

 Image Uploads: Cloudinary

 Middleware: Custom authentication & error handling

Payment Integration: Stripe Sandbox

🚀 Features

User signup, login with email OTP verification

Product listing, details, and categories

Add to Cart, Wishlist, and Checkout

Order management

Admin panel for managing products

Secure authentication with JWT

Image uploads with Cloudinary

Stripe payment gateway integration (Sandbox mode)

Custom middlewares for authentication, authorization, and error handling

Responsive UI

🛠️ Backend Routes
🔹 Auth Routes

- POST /api/auth/register → Register user with email OTP

- POST /api/auth/login → Login user

- POST /api/auth/verify-otp → Verify OTP


🔹 Product Routes

- GET /api/products → Get all products

- GET /api/products/:id → Get product by ID

- POST /api/products → Add product (Admin only)

- PUT /api/products/:id → Update product (Admin only)

- DELETE /api/products/:id → Delete product (Admin only)


🔹 Cart Routes

- POST /api/cart → Add to cart

- GET /api/cart → Get user cart

- DELETE /api/cart/:id → Remove item from cart


🔹 Order Routes

- POST /api/orders → Place new order

- GET /api/orders → Get user orders

- GET /api/orders/admin → Get all orders (Admin only)


🔹 Payment Routes (Stripe)

- POST /api/payment/create-checkout-session → Create Stripe checkout session


🖼️ Cloudinary Integration

- Used for uploading and storing product images.

- Integrated with backend via cloudinary npm package and a custom uploadMiddleware.


🧩 Middleware

- authMiddleware → Protect routes, verify JWT

- adminMiddleware → Check if user is admin

- errorMiddleware → Centralized error handling

💳 Stripe Sandbox Payment

- This project uses Stripe Payment Gateway in Sandbox Mode for test transactions.

- Test Card Details:

- Card Number: 4242 4242 4242 4242

- Expiry: Any future date (e.g. 12/34)

CVC: Any 3 digits (e.g. 123)

Flow:

- Add items to cart

- Proceed to checkout

- Pay using Stripe test cards

- On success → redirect to /success

- On cancel → redirect to /cancel