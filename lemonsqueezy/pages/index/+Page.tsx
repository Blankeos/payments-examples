import { useMetadata } from "vike-metadata-solid";

export default function Page() {
  useMetadata({});

  const [items, setItems] = createStore<{ variantId: string; quantity: number }[]>([]);

  function toggleAddItem(productId: string, quantity: number) {
    setItems(
      produce((_draft) => {
        const _item = _draft.find((_item) => _item.variantId === productId);

        // Add New
        if (!_item) {
          _draft.push({ variantId: productId, quantity });
          return;
        }

        // Remove since exists.
        _draft.splice(_draft.indexOf(_item), 1);
      })
    );
  }

  function openCheckout() {
    const redirectToCheckoutURL = honoClient.lemonsqueezy.checkout[":variantId"]
      .$url({
        param: { variantId: items[0].variantId },
      })
      .toString();

    navigate(redirectToCheckoutURL);
    // honoClient.lemonsqueezy.checkout[":variantId"].$get({
    //   param: {
    //     variantId: items[0].variantId,
    //   },
    // });
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
                active={Boolean(items.find((_item) => _item.variantId === product.id))}
                name={product.name}
                price={product.price}
                onClick={() => toggleAddItem(product.id, 1)}
                recurring={product?.recurring ?? false}
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
import { createStore, produce } from "solid-js/store";
import { navigate } from "vike/client/router";

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
