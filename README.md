🛒 E-Commerce Project

🌐 Live Demo

Frontend URL: https://api-e-commerace-in-node-js-1.onrender.com

Backend URL: https://api-e-commerace-in-node-js.onrender.com

📌 Tech Stack

Frontend: ⚛️ React + ⚡ Vite + 🎨 Tailwind CSS
Backend: 🟢 Node.js + 🚀 Express + 🍃 MongoDB
Authentication: 🔑 JWT 
Media Handling: 🖼️ Cloudinary (Image Uploads)
Payments: 💳 Stripe Sandbox
Middleware: 🧩 Custom Authentication & Error Handling

🚀 Features

✅ User signup & login with email  verification
✅ Product listing, details, and categories
✅ Add to Cart, Wishlist, and Checkout
✅ Order management system
✅ Admin panel for product management
✅ Secure authentication with JWT
✅ Image uploads with Cloudinary
✅ Stripe payment gateway (Sandbox mode)
✅ Custom middlewares (Auth, Admin, Error Handling)
✅ Fully responsive UI

📂 Table of Contents

Backend Routes

Cloudinary Integration

Middleware

Stripe Sandbox Payment

🛠️ Backend Routes
🔹 Auth Routes

- POST /api/auth/register → Register user with OTP

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

🔹 Wislist Routes

- POST /api/wishlist → Add to wishlist

- GET /api/wishlist → Get user wishlist

- DELETE /api/wishlist/:id → Remove item from wishlist


🔹 Order Routes

- POST /api/orders → Place new order

- GET /api/orders → Get user orders

- GET /api/orders/admin → Get all orders (Admin only)


🔹 Payment Routes (Stripe)

- POST /api/payment/create-checkout-session → Create Stripe checkout session


🖼️ Cloudinary Integration

✔️ Store and manage product images in the cloud
✔️ Integrated using cloudinary npm package
✔️ Custom uploadMiddleware for handling file uploads

🧩 Middleware

🔒 authMiddleware → Protects routes, verifies JWT
👑 adminMiddleware → Ensures user has admin role
⚠️ errorMiddleware → Handles server-side errors

💳 Stripe Sandbox Payment

🔗 Integrated Stripe Checkout for secure payments (Sandbox mode).

Test Card Details:

Card Number: 4242 4242 4242 4242

Expiry: Any future date (e.g. 12/34)

CVC: Any 3 digits (e.g. 123)

Payment Flow:

1️⃣ Add items to cart
2️⃣ Proceed to checkout
3️⃣ Enter Stripe test card details
4️⃣ On success → redirect to /success
5️⃣ On cancel → redirect to /cancel