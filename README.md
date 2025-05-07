## Payments Examples

Comparing the different SaaS Payment Providers available in the Philippines.

- [ ] Creem
- [x] Paddle
- [ ] LemonSqueezy
- [ ] PayMongo
- [ ] Xendit

## Goal

- Each example will have a **common project structure, products, and transaction types**

  - SaaS Name: "Watercolor Co"
  - Tagline: "Paid art club that sells digital brushes and a subscription"
  - Products

    | Name                                     | Description                                                                  | Transaction      | Price | Tax Category  |
    | ---------------------------------------- | ---------------------------------------------------------------------------- | ---------------- | ----- | ------------- |
    | Watercolor Brush Pack (Basic)            | Basic set of watercolor brushes.                                             | One-time payment | $10   | Digital Goods |
    | Watercolor Brush Pack (Professional Set) | Watercolor brush pack for professionals.                                     | One-time payment | $20   | Digital Goods |
    | WatercolorCo Premium                     | Access to art tutorials, all brushes, and community of artists for feedback. | Subscription     | $7/m  | Digital Goods |

- Each example will have **implementation notes**. That cover:
  - Platform Registration
  - Code Integration (Packages Installed, Environment Variables, Backend Implementation, Frontend Implementation)
- **Tech Stack**: SolidJS + Hono + Vike
- **Platform Activation** is not covered.

## Definition of Terms

- One-time Payment or Single payment.
- Subscription
- Merchant of Record (MoR) - The entity responsible for managing the payment process on behalf of the merchant. Cross-border tax compliance is easy but usually in exchange for a higher fee, but essentially paying for convenience.
- Tax Category (based on Creem)
  - Digital Goods or services
  - Software as a Service (SaaS)
  - Ebooks

## Learnings

- **Common things** every payment provider have:
  - Platform Registration (on their webapp)
    - Make a product
    - Set a price
  - Environment Variables
    - Usually just an **API Key**
  - Backend Endpoints
    - `GET /checkout` - Redirect to Checkout URL
    - `GET /success` - After completing the transaction, it should go back to our site.
