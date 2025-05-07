## Payments Examples

Comparing the different SaaS Payment Providers available in the Philippines.

> [!NOTE]
> Not yet finished.

Todos:

- [ ] Creem
- [x] Paddle
- [ ] LemonSqueezy
- [ ] PayMongo
- [ ] Xendit

<!-- - [x] Products
  - [x] Simple one-time payment with tiers (Basic, Professional Set for Watercolor Brushes)
  - [x] Recurring Subscription (Membership)
  - [ ] One-time payment with extra units (Watercolor event tickets)
- [ ] Discounts
- [ ] Webhook
- [ ] Non-paddle related: Simple Auth + Database signifiying that the user has paid -->

## Goal

- Each example will have a **common project structure, products, and transaction types**

  - SaaS Name: "Watercolor Co"
  - Tagline: "Paid art club that sells digital brushes and a subscription"
  - Products

    | Name                                     | Description                                                                  | Transaction                     | Price | Tax Category  |
    | ---------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------- | ----- | ------------- |
    | Watercolor Brush Pack (Basic)            | Basic set of watercolor brushes.                                             | One-time payment                | $10   | Digital Goods |
    | Watercolor Brush Pack (Professional Set) | Watercolor brush pack for professionals.                                     | One-time payment                | $20   | Digital Goods |
    | WatercolorCo Premium                     | Access to art tutorials, all brushes, and community of artists for feedback. | Subscription                    | $7/m  | Digital Goods |
    | Watercolor Event Tickets                 | .                                                                            | One-time payment (but w/ units) | $7/m  | Digital Goods |

- Each example will have **implementation notes**. That cover:
  - Platform Registration
  - Code Integration (Packages Installed, Environment Variables, Backend Implementation, Frontend Implementation)
- **Tech Stack**: SolidJS + Hono + Vike
- **Platform Activation** - Verification process and other legal stuff for your account to start receiving payments is not covered.

## Definition of Terms

- One-time Payment or Single payment - a product you buy for 1 time.
- Subscription - Recurring payments on the same product.
- Merchant of Record (MoR) - The entity responsible for managing the payment process on behalf of the merchant. Cross-border tax compliance is easy but usually in exchange for a higher fee, but essentially paying for convenience.
- Tax Category (based on Creem)
  - Digital Goods or services
  - Software as a Service (SaaS)
  - Ebooks

## Learnings

- **Common things** every payment provider have:
  - 1. Platform Registration (on their webapp)
    - Make a product
    - Set a price
  - 2. Environment Variables
    - Usually just an **API Key**
  - 3. Backend Endpoints
    - `GET /checkout` - Redirect to Checkout URL.
    - `GET /success` - After completing the transaction, it should go back to our site. That's when we can process it.
