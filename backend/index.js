import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());


app.post("/create-checkout-session", async (req, res) => {
  try {
    const { items, deliveryMethod } = req.body;

    const sessionConfig = {
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map(item => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: parseInt(item.price.replace("$", "")) * 100,
        },
        quantity: item.quantity,
      })),
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cart',
    };

    // Add shipping address collection only if delivery is selected
    if (deliveryMethod === "delivery") {
      sessionConfig.shipping_address_collection = {
        allowed_countries: ['US'],
      };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    res.json({ url: session.url });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
