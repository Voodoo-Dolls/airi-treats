// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type CategoryDocumentDataSlicesSlice = CategoryBannerSlice;

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

type PageDocumentDataSlicesSlice =
  | SectionTitleSlice
  | ImageBannerSlice
  | FeaturedProductsSlice
  | ImageGridSlice
  | HeroSlice
  | RichTextSlice;

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

type ProductDocumentDataSlicesSlice = never;

/**
 * Content for Product documents
 */
interface ProductDocumentData {
  /**
   * Product Name field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.product_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  product_name: prismic.KeyTextField;

  /**
   * Price field in *Product*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: product.price
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

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
   * description field in *Product*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Main Image field in *Product*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product.main_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  main_image: prismic.ImageField<never>;

  /**
   * Flag Text field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Ex. Top Seller
   * - **API ID Path**: product.flag_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  flag_text: prismic.KeyTextField;

  /**
   * Product Flag field in *Product*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: product.product_flag
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  product_flag: prismic.BooleanField;

  /**
   * Product Available field in *Product*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: product.product_available
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  product_available: prismic.BooleanField;

  /**
   * Slice Zone field in *Product*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: product.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProductDocumentDataSlicesSlice> /**
   * Meta Title field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Product*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
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
  position: prismic.SelectField<"Front" | "Category" | "More">;
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
 * Primary content in *CategoryBanner → Default → Primary*
 */
export interface CategoryBannerSliceDefaultPrimary {
  /**
   * Heading field in *CategoryBanner → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category_banner.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *CategoryBanner → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category_banner.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Banner Image field in *CategoryBanner → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: category_banner.default.primary.banner_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner_image: prismic.ImageField<never>;
}

/**
 * Default variation for CategoryBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CategoryBannerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CategoryBannerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CategoryBanner*
 */
type CategoryBannerSliceVariation = CategoryBannerSliceDefault;

/**
 * CategoryBanner Shared Slice
 *
 * - **API ID**: `category_banner`
 * - **Description**: CategoryBanner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CategoryBannerSlice = prismic.SharedSlice<
  "category_banner",
  CategoryBannerSliceVariation
>;

/**
 * Item in *FeaturedProducts → Default → Primary → Product List*
 */
export interface FeaturedProductsSliceDefaultPrimaryProductListItem {
  /**
   * Product field in *FeaturedProducts → Default → Primary → Product List*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.product_list[].product
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  product: prismic.ContentRelationshipField<"product">;
}

/**
 * Primary content in *FeaturedProducts → Default → Primary*
 */
export interface FeaturedProductsSliceDefaultPrimary {
  /**
   * Heading field in *FeaturedProducts → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Ex. Featured Products
   * - **API ID Path**: featured_products.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Product List field in *FeaturedProducts → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.product_list[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  product_list: prismic.GroupField<
    Simplify<FeaturedProductsSliceDefaultPrimaryProductListItem>
  >;
}

/**
 * Default variation for FeaturedProducts Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProductsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedProductsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FeaturedProducts*
 */
type FeaturedProductsSliceVariation = FeaturedProductsSliceDefault;

/**
 * FeaturedProducts Shared Slice
 *
 * - **API ID**: `featured_products`
 * - **Description**: FeaturedProducts
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProductsSlice = prismic.SharedSlice<
  "featured_products",
  FeaturedProductsSliceVariation
>;

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
 * Primary content in *ImageBanner → Default → Primary*
 */
export interface ImageBannerSliceDefaultPrimary {
  /**
   * Banner Image field in *ImageBanner → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_banner.default.primary.banner_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner_image: prismic.ImageField<never>;

  /**
   * Heading field in *ImageBanner → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_banner.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Body field in *ImageBanner → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_banner.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body: prismic.KeyTextField;
}

/**
 * Default variation for ImageBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBannerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageBannerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageBanner*
 */
type ImageBannerSliceVariation = ImageBannerSliceDefault;

/**
 * ImageBanner Shared Slice
 *
 * - **API ID**: `image_banner`
 * - **Description**: ImageBanner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBannerSlice = prismic.SharedSlice<
  "image_banner",
  ImageBannerSliceVariation
>;

/**
 * Item in *ImageGrid → Default → Primary → Repeatable Card*
 */
export interface ImageGridSliceDefaultPrimaryRepeatableCardItem {
  /**
   * Image Card field in *ImageGrid → Default → Primary → Repeatable Card*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_grid.default.primary.repeatable_card[].image_card
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_card: prismic.ImageField<never>;

  /**
   * Heading field in *ImageGrid → Default → Primary → Repeatable Card*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_grid.default.primary.repeatable_card[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Body Text field in *ImageGrid → Default → Primary → Repeatable Card*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Lorem Ipsum
   * - **API ID Path**: image_grid.default.primary.repeatable_card[].body_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body_text: prismic.KeyTextField;

  /**
   * Category Link field in *ImageGrid → Default → Primary → Repeatable Card*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: image_grid.default.primary.repeatable_card[].category_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  category_link: prismic.LinkField;

  /**
   * Category Link Label field in *ImageGrid → Default → Primary → Repeatable Card*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_grid.default.primary.repeatable_card[].category_link_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  category_link_label: prismic.KeyTextField;
}

/**
 * Primary content in *ImageGrid → Default → Primary*
 */
export interface ImageGridSliceDefaultPrimary {
  /**
   * Section Title field in *ImageGrid → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Select From Categories
   * - **API ID Path**: image_grid.default.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Repeatable Card field in *ImageGrid → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: image_grid.default.primary.repeatable_card[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  repeatable_card: prismic.GroupField<
    Simplify<ImageGridSliceDefaultPrimaryRepeatableCardItem>
  >;
}

/**
 * Default variation for ImageGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGridSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageGridSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageGrid*
 */
type ImageGridSliceVariation = ImageGridSliceDefault;

/**
 * ImageGrid Shared Slice
 *
 * - **API ID**: `image_grid`
 * - **Description**: ImageGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGridSlice = prismic.SharedSlice<
  "image_grid",
  ImageGridSliceVariation
>;

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

/**
 * Item in *SectionTitle → Default → Primary → List*
 */
export interface SectionTitleSliceDefaultPrimaryListItem {
  /**
   * BulletList field in *SectionTitle → Default → Primary → List*
   *
   * - **Field Type**: Text
   * - **Placeholder**: List items
   * - **API ID Path**: section_title.default.primary.list[].bulletlist
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bulletlist: prismic.KeyTextField;
}

/**
 * Primary content in *SectionTitle → Default → Primary*
 */
export interface SectionTitleSliceDefaultPrimary {
  /**
   * Title field in *SectionTitle → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Section title
   * - **API ID Path**: section_title.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *SectionTitle → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: description
   * - **API ID Path**: section_title.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Description Two field in *SectionTitle → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Description
   * - **API ID Path**: section_title.default.primary.description_two
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_two: prismic.RichTextField;

  /**
   * List Intro field in *SectionTitle → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: List introduction
   * - **API ID Path**: section_title.default.primary.list_intro
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  list_intro: prismic.KeyTextField;

  /**
   * List field in *SectionTitle → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: section_title.default.primary.list[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  list: prismic.GroupField<Simplify<SectionTitleSliceDefaultPrimaryListItem>>;

  /**
   * Paragraph Title field in *SectionTitle → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Paragraph title
   * - **API ID Path**: section_title.default.primary.paragraph_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph_title: prismic.RichTextField;

  /**
   * Paragraph field in *SectionTitle → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Paragraph content
   * - **API ID Path**: section_title.default.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  paragraph: prismic.KeyTextField;

  /**
   * Image field in *SectionTitle → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_title.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Paragraph2 field in *SectionTitle → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Paragraph2 content
   * - **API ID Path**: section_title.default.primary.paragraph2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  paragraph2: prismic.KeyTextField;

  /**
   * Paragraph3 field in *SectionTitle → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Paragraph 3
   * - **API ID Path**: section_title.default.primary.paragraph3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph3: prismic.RichTextField;

  /**
   * Closing Paragraph field in *SectionTitle → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Closing paragraph
   * - **API ID Path**: section_title.default.primary.closing_paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  closing_paragraph: prismic.RichTextField;
}

/**
 * Default variation for SectionTitle Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionTitleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SectionTitleSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SectionTitle*
 */
type SectionTitleSliceVariation = SectionTitleSliceDefault;

/**
 * SectionTitle Shared Slice
 *
 * - **API ID**: `section_title`
 * - **Description**: SectionTitle
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionTitleSlice = prismic.SharedSlice<
  "section_title",
  SectionTitleSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
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
      CategoryBannerSlice,
      CategoryBannerSliceDefaultPrimary,
      CategoryBannerSliceVariation,
      CategoryBannerSliceDefault,
      FeaturedProductsSlice,
      FeaturedProductsSliceDefaultPrimaryProductListItem,
      FeaturedProductsSliceDefaultPrimary,
      FeaturedProductsSliceVariation,
      FeaturedProductsSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ImageBannerSlice,
      ImageBannerSliceDefaultPrimary,
      ImageBannerSliceVariation,
      ImageBannerSliceDefault,
      ImageGridSlice,
      ImageGridSliceDefaultPrimaryRepeatableCardItem,
      ImageGridSliceDefaultPrimary,
      ImageGridSliceVariation,
      ImageGridSliceDefault,
      ProductDetailsSlice,
      ProductDetailsSliceDefaultPrimaryProductGalleryItem,
      ProductDetailsSliceDefaultPrimary,
      ProductDetailsSliceVariation,
      ProductDetailsSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      SectionTitleSlice,
      SectionTitleSliceDefaultPrimaryListItem,
      SectionTitleSliceDefaultPrimary,
      SectionTitleSliceVariation,
      SectionTitleSliceDefault,
    };
  }
}
