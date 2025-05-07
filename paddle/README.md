# ❇️ Paddle

## 🚀 Quickstart

```sh
# 1. Create env variables. Follow Guide steps 1, 2, and 3.3.
cp .env.example .env

# 2. Run and install
bun install
bun dev
```

## 📖 Guide

### 1. Platform

1. Go to Paddle, signup for "Paddle Billing"
2. Create the **Products** from **Paddle > Catalog > Products**. Follow the products in the root README.md.
3. After creating products, note down their **Price IDs**
4. Generate a **Client-Side Token** from **Paddle > Developer Tools > Authentication**.

### 2. Environment Variables

```sh
# From Paddle > Developer Tools > Authentication

PUBLIC_ENV__PADDLE_SELLER_ID="12345"
PUBLIC_ENV__PADDLE_CLIENT_SIDE_TOKEN="test_1234a123a123a123a123a123a12"

# NOTE: I prefixed it with PUBLIC_ENV_ (or whatever your framework uses) to expose on client-side.
# since Paddle can work without a backend (It's that easy)
```

### 3. Backend Implementation

> 🙏 Surprisingly not needed...

### 4. Frontend Implementation

1. Install `@paddle/paddle-js`
2. Make a context provider for Paddle. That does:

- Initialize paddle.
- Have an `openCheckout({ ... })` function.

> Refer to: `paddle.store.ts`

3. Create the product page

- Paste the **Price ID** you noted before into `const products = [{ id: '<PASTE HERE>', ... },...]`.

> Refer to: `index/+Page.tsx`

## Resources

- https://github.com/PaddleHQ/paddle-js-wrapper
- https://developer.paddle.com/build/checkout/build-overlay-checkout
- https://www.youtube.com/watch?v=r7uf_u7tI7k (Super outdated)
