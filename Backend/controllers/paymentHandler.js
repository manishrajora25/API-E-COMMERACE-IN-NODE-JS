// controllers/paymentHandler.js
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECCRET_KEY);

/**
 * POST /payment
 * Expected body: { amount: 5000 } // amount in paise (₹50 => 5000)
 */
export const paymentHandler = async (req, res) => {
  try {
    let { amount, currency = "inr", metadata = {} } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount is required (in paise)" });
    }

    amount = parseInt(amount, 10);
    if (Number.isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ["card"],
      metadata, // optional: order id, user id etc.
    });

    res.json({ clientSecret: paymentIntent.client_secret, id: paymentIntent.id });
  } catch (err) {
    console.error("PaymentHandler Error:", err);
    res.status(500).json({ error: err.message });
  }
};
