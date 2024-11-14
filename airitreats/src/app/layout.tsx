import type { Metadata, ResolvingMetadata } from 'next'
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import Head from "next/head";
import Header from "@/components/Header/Header";
import "./snipcart.css"
import "./global.scss"
import { bodyFont, headerFont, subheadingFont, buttonFont } from "./fonts";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";
import { Suspense } from "react";
import Loading from "./loading";






export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()

  const page = await client.getSingle("settings")

  return {
    title: page.data.site_title || "Airitreats",
    // description: page.data.me,
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headerFont.variable} ${subheadingFont.variable} ${buttonFont.variable}`}>

      <body>
        <Suspense fallback={<Loading />}>
          <Header />
          <div id="snipcart" className="snipcart"></div>
          {children}
          <Footer />
          <Toaster position="top-center" richColors duration={2500} />

        </Suspense>

      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
