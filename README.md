## Payments Examples

Comparing the different SaaS Payment Providers available in the Philippines.
This explores a very specific way of adding payments: SaaS Apps w/ Auth.

> [!NOTE]
> Not yet finished.

Todos:

- [x] Creem
- [x] Paddle
- [x] LemonSqueezy
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
    | Watercolor Event Tickets                 | A ticket to an upcoming event.                                               | One-time payment (but w/ units) | $7/m  | Digital Goods |

- Each example will have **implementation notes**. That cover:
  - Platform Registration
  - Code Integration (Packages Installed, Environment Variables, Backend Implementation, Frontend Implementation)
- **Tech Stack**: SolidJS + Hono + Vike
- **Platform Activation** -

## Definition of Terms

- One-time Payment or Single payment - a product you buy for 1 time.
- Subscription - Recurring payments on the same product.
- Merchant of Record (MoR) - The entity responsible for managing the payment process on behalf of the merchant. Cross-border tax compliance is easy but usually in exchange for a higher fee, but essentially paying for convenience.
- Tax Category (based on Creem)
  - Digital Goods or services
  - Software as a Service (SaaS)
  - Ebooks

## Scope

Explores:

- SaaS apps w/ auth and predictable pricing.
- Discounts.
- Webhooks.

Doesn't Explore:

- Getting product without auth (i.e. license key generation sent via email). It's easier to do with Creem and LS I think, just send a payment link, no backend needed.
- Complex pricing structures: Usage-based volume, seat-based.
- Legal stuff - Verification process and other legal stuff for your account to start receiving payments.
- Refunds of one-time payments. Assume this is

## Learnings

- **Common things** every payment provider have:

  - 1. Platform Registration (on their webapp)
    - Make a product
    - Set a price
  - 2. Environment Variables
    - Usually just an **API Key**
  - 3.  At a minimum you should implement these to get working payments:

    - [x] **BE Endpoint: Redirect to Checkout.** `GET /checkout` - Redirect to Checkout URL. Navigate to this via an `href` or a `window.open`. Under the hood, it uses the SDK/REST API that returns a checkout URL, which you use to redirect the user to the checkout page.
    - [x] **BE Endpoint: Webhook handler.** for checkout events - handle both successful and failed checkouts to track order status and update system accordingly.
      - One knowledge gap I had was what if the server could not process it at the time. The platforms usually have exponential backoffs (retry after 5s, then 10s, then 20s, etc.).
      - Just make sure the webhook acknowledges with `200 OK` so the platform knows it's received.
      - Last case is you re-running the webhook for your user, or a way for your user to re-running the webhook (idk about this)?
    - [x] **UX: Purchased indicator.** - your app should indicate obviously that the good/subscription is owned by the user. I think this should always be supplemented by invoice viewing, but not necessary.
    - Bonus:
      - [x] **Invoice viewing** - Make sure your user can access all their invoices made on your site. But the platform can actually provide this via email upon purchase or their customer portal.
      - [x] **Refunds and order management** - Can be done via the platforms dashboard initially, I think their entry point is their email, idk how this escalates though to communicate with you though.
      - [x] **Retrieve product and variant details via API.** If you don't have a `constants/products.ts` file. But I think it's fine not to do this. Since pricing for SaaS apps rarely changes without careful consideration.
