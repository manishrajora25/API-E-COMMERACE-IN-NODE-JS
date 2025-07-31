import express from "express";

import { loginUser,logoutUser,registerUser } from "../controllers/userControll.js";
// import { upload } from "../middleware/uploadMiddleware.js"; 
// import { upload } from "../middleware/cloudinaryUpload.js";
import { uploadCloud } from "../middleware/cloudinaryUpload.js"
import {checkAdmin } from "../middleware/checkToken.js"


const router = express.Router();

/**
 * @swagger
 * /api/product/login:
 *   post:
 *     summary: User login
 *     description: Authenticates a user and returns a token or sets a cookie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: yourPassword123
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login successful
 *                 token:
 *                   type: string
 *                   example: your-jwt-token-here
 *       401:
 *         description: Invalid email or password
 */
router.post("/login", loginUser);

 
/**
 * @swagger
 * /api/product/register:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user with profile image upload
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User registered successfully
 *       400:
 *         description: Validation error or missing fields
 */
router.post("/register", uploadCloud.single("image"), registerUser);

/**
 * @swagger
 * /api/product/checkToken:
 *   get:
 *     summary: Verify user authentication token
 *     description: Checks if the user is authenticated and returns user data
 *     security:
 *       - cookieAuth: []  # or bearerAuth if you're using Authorization header
 *     responses:
 *       200:
 *         description: Token is valid, user is authenticated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 User:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *       401:
 *         description: Unauthorized - Invalid or missing token
 */
router.get("/checkToken", checkAdmin, (req, res) => {
    res.json({ User: req.user });
  });
  
router.post("/logout", logoutUser);/**
* @swagger
* /api/product/logout:
*   post:
*     summary: Logout user
*     description: Logs out the currently authenticated user by clearing the auth token (cookie or session)
*     responses:
*       200:
*         description: Logout successful
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                   example: Logged out successfully
*       400:
*         description: No active session or already logged out
*/
router.post("/logout", logoutUser);


export default router;  