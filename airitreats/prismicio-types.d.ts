// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type CategoryDocumentDataSlicesSlice = never;

/**
 * Content for Category documents
 */
interface CategoryDocumentData {
  /**
   * Category Name field in *Category*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category.category_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  category_name: prismic.KeyTextField;

  /**
   * Slice Zone field in *Category*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: category.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CategoryDocumentDataSlicesSlice> /**
   * Meta Title field in *Category*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: category.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Category*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: category.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Category*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: category.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CategoryDocumentData>,
    "category",
    Lang
  >;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Address field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: 13 Amherst Crescent, St. Albert, AB T8N 2P7
   * - **API ID Path**: footer.address
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address: prismic.KeyTextField;

  /**
   * Phone field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: (xxx) xxx-xxxx
   * - **API ID Path**: footer.phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone: prismic.KeyTextField;

  /**
   * Google Maps URL of your location field in *Footer*
   *
   * - **Field Type**: GeoPoint
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.your_map_location
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#geopoint
   */
  your_map_location: prismic.GeoPointField;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type PageDocumentDataSlicesSlice = HeroSlice | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type ProductDocumentDataSlicesSlice = ProductDetailsSlice;

/**
 * Content for Product documents
 */
interface ProductDocumentData {
  /**
   * Category field in *Product*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: product.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  category: prismic.ContentRelationshipField<"category">;

  /**
   * Slice Zone field in *Product*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: product.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProductDocumentDataSlicesSlice>;
}

/**
 * Product document from Prismic
 *
 * - **API ID**: `product`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProductDocumentData>,
    "product",
    Lang
  >;

/**
 * Item in *Settings → Links*
 */
export interface SettingsDocumentDataLinksItem {
  /**
   * Link field in *Settings → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Position field in *Settings → Links*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.links[].position
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  position: prismic.SelectField<"Front" | "Menu Dropdown" | "More Dropdown">;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Name of Website
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Site Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  site_logo: prismic.ImageField<never>;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Links field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<SettingsDocumentDataLinksItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | CategoryDocument
  | FooterDocument
  | PageDocument
  | ProductDocument
  | SettingsDocument;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Header field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.header
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  header: prismic.KeyTextField;

  /**
   * Body Text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body_text: prismic.KeyTextField;

  /**
   * Link URL field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.link_url
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_url: prismic.LinkField;

  /**
   * Link Label field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.link_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_label: prismic.KeyTextField;

  /**
   * Hero Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.hero_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *ProductDetails → Default → Primary → Product Gallery*
 */
export interface ProductDetailsSliceDefaultPrimaryProductGalleryItem {
  /**
   * Image field in *ProductDetails → Default → Primary → Product Gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_details.default.primary.product_gallery[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *ProductDetails → Default → Primary*
 */
export interface ProductDetailsSliceDefaultPrimary {
  /**
   * Product Name field in *ProductDetails → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_details.default.primary.product_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  product_name: prismic.KeyTextField;

  /**
   * Product Price field in *ProductDetails → Default → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: Ex. 4.50
   * - **API ID Path**: product_details.default.primary.product_price
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  product_price: prismic.NumberField;

  /**
   * Product Description field in *ProductDetails → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_details.default.primary.product_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  product_description: prismic.RichTextField;

  /**
   * Main Image field in *ProductDetails → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_details.default.primary.main_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  main_image: prismic.ImageField<never>;

  /**
   * Product Gallery field in *ProductDetails → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: product_details.default.primary.product_gallery[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  product_gallery: prismic.GroupField<
    Simplify<ProductDetailsSliceDefaultPrimaryProductGalleryItem>
  >;
}

/**
 * Default variation for ProductDetails Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductDetailsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProductDetailsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProductDetails*
 */
type ProductDetailsSliceVariation = ProductDetailsSliceDefault;

/**
 * ProductDetails Shared Slice
 *
 * - **API ID**: `product_details`
 * - **Description**: ProductDetails
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductDetailsSlice = prismic.SharedSlice<
  "product_details",
  ProductDetailsSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      CategoryDocument,
      CategoryDocumentData,
      CategoryDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ProductDocument,
      ProductDocumentData,
      ProductDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataLinksItem,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ProductDetailsSlice,
      ProductDetailsSliceDefaultPrimaryProductGalleryItem,
      ProductDetailsSliceDefaultPrimary,
      ProductDetailsSliceVariation,
      ProductDetailsSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
