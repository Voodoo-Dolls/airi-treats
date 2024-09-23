import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return (
    <>
      <button className="snipcart-add-item"
        data-item-id="starry-night"
        data-item-price="79.99"
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-image="/assets/images/starry-night.jpg"
        data-item-name="The Starry Night">
        Add to cart
      </button>
    </>
  )

  // return <SliceZone slices={home.data.slices} components={components} />;
}
