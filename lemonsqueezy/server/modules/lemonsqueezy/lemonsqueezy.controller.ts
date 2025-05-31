import { zValidator } from "@hono/zod-validator";
import { createCheckout } from "@lemonsqueezy/lemonsqueezy.js";
import { Hono } from "hono";
import { z } from "zod";

export const lemonsqueezyController = new Hono()
  .basePath("lemonsqueezy")

  // Checkout
  .get(
    "/checkout/:variantId",
    zValidator(
      "param",
      z.object({
        variantId: z.string(),
      })
    ),
    async (c) => {
      console.log("🚀 Checkout");
      try {
        const validParam = c.req.valid("param");

        const checkout = await createCheckout(185581, validParam.variantId);

        const url = checkout.data?.data.attributes.url;
        if (!url) {
          throw new Error("Invalid checkout URL");
        }

        return c.redirect(url);
      } catch (error) {
        console.error("Error creating checkout:", error);
        return c.text("Internal Server Error", 500);
      }
    }
  );
