import { productById } from "@/constants/products";
import { zValidator } from "@hono/zod-validator";
import axios from "axios";
import { Hono } from "hono";
import { z } from "zod";

export const creemController = new Hono()
  .basePath("creem")

  // Checkout
  .get(
    "/checkout/:productId",
    zValidator(
      "param",
      z.object({
        productId: z.string(),
      })
    ),
    async (c) => {
      console.log("🚀 Checkout");
      try {
        const validParam = c.req.valid("param");

        if (!productById(validParam.productId)) {
          throw new Error("Product not found.");
        }

        const response = await axios.post(
          `https://test-api.creem.io/v1/checkouts`,
          {
            product_id: validParam.productId, // 👈 Change
          },
          {
            headers: { "x-api-key": process.env.CREEM_API_KEY }, // 👈 Change
          }
        );

        return c.redirect(response.data.checkout_url);
      } catch (error) {
        console.error("Error creating checkout:", error);
        return c.text("Internal Server Error", 500);
      }
    }
  );
