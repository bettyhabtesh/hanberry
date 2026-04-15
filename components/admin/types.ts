export type DashboardMetrics = {
  bookings: number;
  activePackages: number;
};

export type TabKey = "Dashboard" | "Packages" | "Bookings" | "Works" | "Gallery" | "Setting";

export type BookingCategory = {
  id: number;
  name: string;
  sort_order: number;
  active: boolean;
};

export type BookingPackage = {
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
};

export type BookingCategoryGroup = BookingCategory & { packages: BookingPackage[] };

export type BookingDataResponse = {
  categories: BookingCategory[];
  packages: BookingPackage[];
  grouped: BookingCategoryGroup[];
};
