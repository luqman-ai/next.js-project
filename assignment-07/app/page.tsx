// pages/Home page
import { Montserrat } from "next/font/google";
const mons = Montserrat({ weight: "500", subsets: ["latin"] });
import Head from 'next/head';
import CardGrid from './(component)/cardGrid/cardGrid';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Tailwind CSS Card Grid</title>
        <meta name="description" content="Next.js Tailwind CSS Card Grid Layout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-4">Card Grid Layout</h1>
        <CardGrid />
      </main>
    </div>
  );
}