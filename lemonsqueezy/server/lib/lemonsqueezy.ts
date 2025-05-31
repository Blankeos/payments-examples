import { privateConfig } from "@/config.private";
import { lemonSqueezySetup } from "@lemonsqueezy/lemonsqueezy.js";

export function lemonSqueezyInit() {
  const apiKey = privateConfig.LEMONSQUEEZY_API_KEY;

  lemonSqueezySetup({
    apiKey,
    onError: (error) => console.error("Error!", error),
  });
}
