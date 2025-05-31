// import { usePaddleContext } from "@/store/paddle.store";
// import { CheckoutOpenLineItem } from "@paddle/paddle-js";

import { useMetadata } from "vike-metadata-solid";

export default function Page() {
  useMetadata({});

  const [items, setItems] = createStore<{ productId: string; quantity: number }[]>([]);

  function toggleAddItem(productId: string, quantity: number) {
    setItems(
      produce((_draft) => {
        const _item = _draft.find((_item) => _item.productId === productId);

        // Add New
        if (!_item) {
          _draft.push({ productId: productId, quantity });
          return;
        }

        // Remove since exists.
        _draft.splice(_draft.indexOf(_item), 1);
      })
    );
  }

  function openCheckout() {
    honoClient.creem.checkout[":productId"].$get({
      param: {
        productId: items[0].productId,
      },
    });
  }
  return (
    <>
      <div class="flex flex-col flex-1">
        <div class="h-20" />

        <div class="flex items-center justify-center gap-4">
          <For each={PRODUCTS}>
            {(product) => (
              <ProductCard
                id={product.id}
                active={Boolean(items.find((_item) => _item.productId === product.id))}
                name={product.name}
                price={product.price}
                onClick={() => toggleAddItem(product.id, 1)}
                recurring={product.recurring ?? false}
              />
            )}
          </For>
        </div>

        <div class="h-20" />

        <button
          class="self-center border rounded px-3 py-1 bg-emerald-500 text-white border-emerald-300 transition active:scale-95"
          onClick={() => {
            // const _items = unwrap(items);
            openCheckout();
          }}
        >
          Checkout
        </button>

        <div class="h-5" />

        <div class="flex flex-col gap-y-1 items-center max-w-lg w-full mx-auto">
          <h2>Items to Checkout</h2>

          <pre class="text-sm text-gray-500 bg-neutral-800 font-mono w-full p-5 min-h-44 rounded-lg">
            {JSON.stringify(items, null, 2)}
          </pre>
        </div>
      </div>
    </>
  );
}

// ===========================================================================
// Subcomponents
// ===========================================================================

import { PRODUCTS } from "@/constants/products";
import { honoClient } from "@/lib/hono-client";
import { For, mergeProps, VoidProps } from "solid-js";
import { createStore, produce, unwrap } from "solid-js/store";

type ProductCardProps = {
  id: string;
  active?: boolean;
  name: string;
  price: number;
  recurring?: boolean;
  onClick?: () => void;
};

function ProductCard(rawProps: VoidProps<ProductCardProps>) {
  const props = mergeProps(
    {
      recurring: false,
    },
    rawProps
  );

  return (
    <button
      class={`select-none p-2 h-44 w-44 border rounded-lg flex flex-col gap-y-3 items-center justify-center active:scale-95 transition ${props.active ? "bg-gray-100" : "bg-white"}`}
      onClick={rawProps.onClick}
    >
      <span>{props.name}</span>

      <span class="text-sm text-gray-500">
        USD {props.price}
        {props.recurring && <span class="text-xs text-gray-500">/month</span>}
      </span>

      <span class="text-sm text-orange-400">{props.recurring ? "Subscription" : "One-Time"}</span>
    </button>
  );
}
