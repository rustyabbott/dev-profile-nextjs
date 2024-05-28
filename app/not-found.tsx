import Image from "next/image";
import Header from "./components/header";

export default function PageNotFound() {
  return (
    <>
      <Header />

      <main className="flex flex-col min-h-screen items-center justify-center w-full">
        <h1 className="absolute top-[100px] text-4xl">Woah</h1>
        <h2 className="absolute top-[150px]">404 Not Found</h2>
        <Image
          src="/img/spicolli.jpg"
          alt="spicolli"
          width={200}
          height={200}
          className="m-auto rounded-full"
        />
      </main>
    </>
  );
}
