import express from "express";
import { createForm, cartForm, wishlistForm, getAllProducts, updateProduct, getSingleProducts, getCartData, removeFromCart, wishlistData, removeFromWishlist, deleteProduct } from "../controllers/productController.js";
import {checkAdmin} from "../middleware/checkToken.js"
import { uploadCloud } from "../middleware/cloudinaryUpload.js";
import paymentRoutes from "./paymentRoutes.js";

const router = express.Router();

/**
 * @swagger
 * /api/product/add:
 *   post:
 *     summary: Submit form with image upload
 *     description: Creates a new form entry with associated image
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - image
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john@example.com
 *               phone:
 *                 type: string
 *                 example: 9876543210
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Form submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Form created successfully
 *       400:
 *         description: Bad request or missing fields
 */
router.post("/add", uploadCloud.single("image"), createForm);


/**
 * @swagger
 * /api/product/all:
 *   get:
 *     summary: Get all products
 *     description: Returns a list of all available products
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 *                   description:
 *                     type: string
 *                   category:
 *                     type: string
 */
router.get("/all", getAllProducts);



/**
 * @swagger
 * /product/{id}:
 *   get:
 *     summary: Get a single product by ID
 *     description: Fetch a product using its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 price:
 *                   type: number
 *                 description:
 *                   type: string
 *                 category:
 *                   type: string
 *       404:
 *         description: Product not found
 */
router.get("/:id", getSingleProducts);

// router.post("/cart/:id",checkAdmin, cartForm);
/**
* @swagger
* /api/product/cart/{id}:
*   post:
*     summary: Add a product to the user's cart
*     description: Adds a product to the authenticated user's cart using the product ID
*     security:
*       - cookieAuth: []  # or bearerAuth if you're using tokens
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: The ID of the product to add to the cart
*         schema:
*           type: string
*     responses:
*       200:
*         description: Product added to cart successfully
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                   example: Product added to cart
*       401:
*         description: Unauthorized - user must be logged in
*       404:
*         description: Product not found
*/
router.post("/cart/:id", checkAdmin, cartForm);


/**
* @swagger
* /api/product/cart/data:
*   get:
*     summary: Get user's cart data
*     description: Retrieves the current authenticated user's cart with populated product details
*     security:
*       - cookieAuth: []  # or bearerAuth if you’re using Authorization header
*     responses:
*       200:
*         description: Successfully retrieved cart data
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 cart:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                       product:
*                         type: object
*                         properties:
*                           _id:
*                             type: string
*                           name:
*                             type: string
*                           price:
*                             type: number
*                           description:
*                             type: string
*                           category:
*                             type: string
*                       quantity:
*                         type: number
*       401:
*         description: Unauthorized - User not authenticated
*       404:
*         description: User not found
*/
router.get("/cart/data", checkAdmin, getCartData);






/**
 * @swagger
 * /wishlist/data:
 *   get:
 *     summary: Get the authenticated user's wishlist
 *     description: Retrieve all products from the logged-in user's wishlist.
 *     tags:
 *       - Wishlist
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Wishlist fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 wishlist:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       product:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           image:
 *                             type: string
 *                           originalPrice:
 *                             type: number
 *                           category:
 *                             type: string
 *       401:
 *         description: Unauthorized - user not logged in
 *       500:
 *         description: Server error
 */
router.get("/wishlist/data", checkAdmin, wishlistData)



/**
* @swagger
* /api/product/wishlist/{id}:
*   post:
*     summary: Add a product to the wishlist
*     description: Adds a product to the user's wishlist using the product ID
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: The ID of the product to add to the wishlist
*         schema:
*           type: string
*     responses:
*       200:
*         description: Product added to wishlist successfully
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                   example: Product added to wishlist
*       400:
*         description: Bad request (e.g., product already in wishlist)
*       404:
*         description: Product not found
*/
router.post("/wishlist/:id", wishlistForm);





/**
* @swagger
* /api/product/update/{id}:
*   put:
*     summary: Update a product
*     description: Updates the details of a specific product by its ID
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: The ID of the product to update
*         schema:
*           type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*               price:
*                 type: number
*               description:
*                 type: string
*               category:
*                 type: string
*     responses:
*       200:
*         description: Product updated successfully
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                   example: Product updated successfully
*       400:
*         description: Invalid input
*       404:
*         description: Product not found
*/
router.put("/update/:id",  updateProduct);





// router.delete("/delete/:id", deleteProduct);
/**
* @swagger
* /api/product/delete/{id}:
*   delete:
*     summary: Delete a product
*     description: Deletes a specific product by its ID
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: The ID of the product to delete
*         schema:
*           type: string
*     responses:
*       200:
*         description: Product deleted successfully
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                   example: Product deleted successfully
*       404:
*         description: Product not found
*/
// router.delete("/delete/:id", deleteProduct);

router.delete("/cart/:id", checkAdmin, removeFromCart);








/**
 * @swagger
 * /wishlist/{id}:
 *   delete:
 *     summary: Remove a product from the user's wishlist
 *     description: Deletes a product from the authenticated user's wishlist.
 *     tags:
 *       - Wishlist
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to remove from the wishlist
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product successfully removed from wishlist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product removed from wishlist
 *       401:
 *         description: Unauthorized - user not logged in
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.delete("/wishlist/:id", checkAdmin, removeFromWishlist )

router.delete("/:id", checkAdmin, deleteProduct);

// router.post("/payment",paymentRoutes )


export default router;   