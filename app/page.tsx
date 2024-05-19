"use client";

import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-between w-full">
        <Image
          src="/img/rabbitmtrx.jpeg"
          alt="good evening"
          width={200}
          height={200}
          className="m-auto rounded-full"
        />
      </main>
    </>
  );
}
