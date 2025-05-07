import { PaddleContextProvider } from "@/store/paddle.store";
import "@/styles/global.css";
import getTitle from "@/utils/get-title";

import { createSignal, type FlowProps } from "solid-js";

import { useMetadata } from "vike-metadata-solid";

useMetadata.setGlobalDefaults({
  title: getTitle("Home"),
  description: "Demo showcasing Vike and Solid.",
});

export default function RootLayout(props: FlowProps) {
  return (
    <PaddleContextProvider>
      <div class="min-h-screen flex flex-col">
        {/* <nav>
        <a href="/">Home</a>
        <span>{" | "}</span>
        <a href="/dashboard">Dashboard</a>
        <span>{" | "}</span>
        <Counter />
      </nav> */}
        <main class="flex-1 flex flex-col">{props.children}</main>
      </div>
    </PaddleContextProvider>
  );
}

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      Root Counter {count()}
    </button>
  );
}
