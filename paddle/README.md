# paddle-solid-example

A Paddle integration that works in the 🇵🇭 Philippines :D. If you're just learning, I recommend cloning this and taking a few hours to study it (even if I don't use similar tech as you).

Concept: A Watercolor Brush Company

Features covered

- [x] Products
  - [x] Simple one-time payment with tiers (Basic, Professional Set for Watercolor Brushes)
  - [x] Recurring Subscription (Membership)
  - [ ] One-time payment with extra units (Watercolor event tickets)
- [ ] Discounts
- [ ] Webhook
- [ ] Non-paddle related: Simple Auth + Database signifiying that the user has paid

## Quickstart

1. Fill environment variables

   - `cp .env.example .env`
   - `PUBLIC_ENV__PADDLE_SELLER_ID` - From **Paddle > Developer Tools > Authentication**
   - `PUBLIC_ENV__PADDLE_CLIENT_SIDE_TOKEN` - From **Paddle > Developer Tools > Authentication**

2. Create Products and Prices in Paddle

   - Go to **Paddle > Catalog > Products**
   - Make the following:
     - Watercolor Brush (Basic) - $4 - One-time payment
     - Watercolor Brush (Profesional Set) - $14 - One-time payment
     - Watercolor Co Membership - $4 - Recurring Subscription per month
   - After creating the products, get their **Price IDs**
   - Go to `index/+Page.tsx` of this project and paste the **Price IDs** in the `products.id`.

3. Install deps and run dev server
   ```sh
   bun install
   bun dev
   ```

## Some notes

Paddle-related:

- [x] Get **Seller ID** from \***\*Paddle > Developer Tools > Authentication\*\*** Page
- [x] Create a **Product** and **Price** from **Paddle > Catalog > Products**
- [x] Generate a **Client-Side Token** from **Paddle > Developer Tools > Authentication**

Code-related:

- [x] Install @paddle/paddle-js
- [x] Make a context provider surrounding Paddle.
  - Initialize.
  - Checkout function.
- [x] Create your product page.

## Resources

- https://github.com/PaddleHQ/paddle-js-wrapper
- https://developer.paddle.com/build/checkout/build-overlay-checkout
- https://www.youtube.com/watch?v=r7uf_u7tI7k (Super outdated)

<!-- ```
                                > Success
                               /
[Checkout] -> Checkout Session
                               \
                                > Cancel
```

No webhooks, no database, just using the Stripe sdk.
I gave up midway. Stripe isn't available in the 🇵🇭 Philippines :D. -->

<!--
# 🐇 Solid Hop

💙 A **minimal** and **unopinionated** Vike + Solid + Hono starter.

❤️ We love Vike and Solid, but it might be overwhelming to setup. The goal of this starter is to get you up and running quickly with good defaults without getting in the way of your opinions.

This is more or less what you would get from a starter with `create next-app` or `create svelte` or `create solid`.

If you want a more opinionated and fully-featured boilerplate instead: http://github.com/blankeos/solid-launch

## Tech Stack:

1. Vike + Hono - For SSR + Your own Server.
2. SolidJS
3. Bun (Can swap this with Node easily if you want).
4. Tools: ESLint, Prettier

## Quick Start

1. Clone

```sh
git clone https://github.com/blankeos/solid-hop <your-app-name>
cd <your-app-name>
rm -rf .git # This is your app. Start the commits fresh :D
```

1. Install

```sh
bun install
```

3. Run dev server

```sh
bun dev
```

## Building and Deployment

1. Build

```sh
bun run build
```

2. Wherever you deploy, just run make sure that this is ran:

```sh
bun run preview # Just runs server.ts
``` -->
