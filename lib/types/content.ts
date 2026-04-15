export interface BookingCategory {
  id: number;
  name: string;
  sort_order: number;
  active: boolean;
}

export interface BookingPackage {
  id: number;
  category_id: number;
  name: string;
  type: string;
  description: string;
  price: number;
  duration: string;
  optional_note: string | null;
  includes: string[];
  image_url: string | null;
  sort_order: number;
  active: boolean;
}

export interface BookingContent {
  id: number;
  heading: string;
  subheading: string;
  active: boolean;
}

export interface HomeWorksContent {
  id: number;
  title: string;
  subtitle: string;
  active: boolean;
}

export interface HomeWorksImage {
  id: number;
  image_url: string;
  height: number;
  type: string;
  sort_order: number;
  active: boolean;
}

export interface GalleryContent {
  id: number;
  title: string;
  active: boolean;
}

export interface GalleryImage {
  id: number;
  image_url: string;
  height: number;
  type: string;
  sort_order: number;
  active: boolean;
}
