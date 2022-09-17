/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`w-screen h-screen bg-gray-900`}>
    <div class={tw`p-4 mx-auto max-w-screen-md bg-gray-900`}>
      <img
        src="/Ethereum_logo_2014.svg.png"
        height="10px;"
        width="20px;"
        class="mx-auto"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-10`}>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
    </div>
    </div>
  );
}
