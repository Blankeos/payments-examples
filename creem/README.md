# 🥯 Creem Example

## 🚀 Quickstart

```sh
# 1. Create env variables. Follow Guide steps 1 and 2.
cp .env.example .env

# 2. Run and install
bun install
bun dev
```

## 📖 Guide

### 1. Platform

1. Go to https://www.creem.io. Login
2. Login with Google.
3. Create a **Store** (you can create more later).
4. Create a **Product** (Name, Description, Transaction Type, Price, Tax Category, Picture). Follow the products in the root README.md.

- Bonus: You can add **Product Features** to automate _license key generation_, _file download_, _private note_.)

### 2. Environment Variables

```sh
CREEM_API_KEY=creem_123456789123456789123 # From Developers > API Keys
```

### 3. Backend Implementation

1. A "Redirect" Endpoint to **Checkout**.

> Reference: `server/modules/creem/creem.controller.ts`

```ts
import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/checkout", async (req: Request, res: Response) => {
  try {
    const response = await axios.post(
      `https://api.creem.io/v1/checkouts`,
      {
        product_id: PRODUCT_ID, // 👈 Change
        request_id: REQUEST_ID, // OPTIONAL: but helpful for tracking
        // OPTIONAL: Usually set on the Product (in Platform Console), but you can override.
        // Also called "Return/Redirect URL".
        success_url: SUCCESS_URL
        // OPTIONAL: Pre-fill the customer email in checkout.
        customer: {
          email: "yourUserEmail@gmail.com"
        },
        // OPTIONAL: Add a discount (based on the Discount in Platform console)
        discount_code: "BF200XX",
      },
      {
        headers: { "x-api-key": process.env.CREEM_API_KEY }, // 👈 Change
      }
    );

    res.redirect(response.data.checkout_url); // Just redirect.
  } catch (error) {
    console.error("Error creating checkout:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

### 4. Frontend Implementation

> Not yet implemented.

### My remarks

- It's literally super easy, just behind Paddle.
- From signup, to finishing creating a product, then it literally gives you contextually relevant code to implement it in your code.
- It even has automatic **Product Features**, so you almost don't need to implement any code yourself for delivering the product (i.e. webhooks).
