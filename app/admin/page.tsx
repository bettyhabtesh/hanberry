"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTabs } from "@/components/admin/AdminTabs";
import { AdminDashboardPanel } from "@/components/admin/AdminDashboardPanel";
import { AdminPackagesPanel } from "@/components/admin/AdminPackagesPanel";
import {
  BookingCategory,
  BookingCategoryGroup,
  BookingDataResponse,
  BookingPackage,
  DashboardMetrics,
  TabKey,
} from "@/components/admin/types";

const tabs: TabKey[] = ["Dashboard", "Packages", "Bookings", "Works", "Gallery", "Setting"];
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function AdminPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>("Dashboard");
  const [authChecking, setAuthChecking] = useState(true);
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [metrics, setMetrics] = useState<DashboardMetrics>({ bookings: 0, activePackages: 0 });
  const [categories, setCategories] = useState<BookingCategory[]>([]);
  const [packages, setPackages] = useState<BookingPackage[]>([]);
  const [groupedCategories, setGroupedCategories] = useState<BookingCategoryGroup[]>([]);
  const [loadingPackages, setLoadingPackages] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [expandedPackageId, setExpandedPackageId] = useState<number | null>(null);
  const [infoMessage, setInfoMessage] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        const sessionRes = await fetch("/api/admin/session", { cache: "no-store" });
        const session = (await sessionRes.json()) as { authenticated?: boolean };

        if (!sessionRes.ok || !session.authenticated) {
          router.replace("/admin/login");
          return;
        }

        await loadDashboard(cancelled);
      } catch {
        router.replace("/admin/login");
      } finally {
        if (!cancelled) {
          setAuthChecking(false);
          setLoadingMetrics(false);
        }
      }
    }

    init();

    return () => {
      cancelled = true;
    };
  }, [router]);

  useEffect(() => {
    if (activeTab !== "Packages") return;
    loadPackagesData();
  }, [activeTab]);

  async function loadDashboard(cancelled: boolean) {
    const dashboardRes = await fetch("/api/admin/dashboard", { cache: "no-store" });
    if (!dashboardRes.ok) return;

    const data = (await dashboardRes.json()) as DashboardMetrics;
    if (!cancelled) {
      setMetrics({
        bookings: data.bookings ?? 0,
        activePackages: data.activePackages ?? 0,
      });
    }
  }

  async function loadPackagesData() {
    setLoadingPackages(true);
    setInfoMessage("");
    try {
      const bookingRes = await fetch("/api/admin/booking", { cache: "no-store" });
      if (!bookingRes.ok) {
        setInfoMessage("Failed to load packages data.");
        return;
      }

      const bookingData = (await bookingRes.json()) as BookingDataResponse;
      const safeCategories = Array.isArray(bookingData.categories) ? bookingData.categories : [];
      const safePackages = Array.isArray(bookingData.packages) ? bookingData.packages : [];
      const safeGrouped = Array.isArray(bookingData.grouped) ? bookingData.grouped : [];
      setCategories(safeCategories);
      setPackages(safePackages);
      setGroupedCategories(safeGrouped);
      setExpandedPackageId(safePackages[0]?.id ?? null);
    } catch {
      setInfoMessage("Failed to load packages data.");
    } finally {
      setLoadingPackages(false);
    }
  }

  async function addCategory(nameOverride?: string) {
    const name = (nameOverride ?? newCategory).trim();
    if (!name) return;
    const res = await fetch("/api/admin/booking/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        sort_order: categories.length,
        active: true,
      }),
    });
    if (res.ok) {
      setNewCategory("");
      await loadPackagesData();
    }
  }

  async function editCategory(category: BookingCategory) {
    const nextName = window.prompt("Edit category name", category.name)?.trim();
    if (!nextName) return;
    await fetch(`/api/admin/booking/categories/${category.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...category,
        name: nextName,
      }),
    });
    await loadPackagesData();
  }

  async function deleteCategory(categoryId: number) {
    if (!window.confirm("Delete this category?")) return;
    await fetch(`/api/admin/booking/categories/${categoryId}`, { method: "DELETE" });
    await loadPackagesData();
  }

  async function addPackage() {
    const targetCategory = categories[0];
    if (!targetCategory) {
      setInfoMessage("Create a category first.");
      return;
    }
    const payload = {
      category_id: targetCategory.id,
      name: "New Package",
      type: "normal",
      description: "Describe your package here.",
      price: 0,
      duration: "2-3 hr",
      optional_note: null,
      includes: [],
      image_url: null,
      sort_order: packages.length,
      active: true,
    };
    const res = await fetch("/api/admin/booking/packages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      await loadPackagesData();
    }
  }

  async function editPackage(pkg: BookingPackage) {
    const nextName = window.prompt("Edit package name", pkg.name)?.trim();
    if (!nextName) return;
    await fetch(`/api/admin/booking/packages/${pkg.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...pkg,
        name: nextName,
      }),
    });
    await loadPackagesData();
  }

  async function deletePackage(packageId: number) {
    if (!window.confirm("Delete this package?")) return;
    await fetch(`/api/admin/booking/packages/${packageId}`, { method: "DELETE" });
    await loadPackagesData();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  }

  if (authChecking) {
    return <main className="min-h-screen bg-[#f4f4f4] p-8 text-black">Loading...</main>;
  }

  return (
    <main className={`${poppins.className} min-h-screen bg-[#f4f4f4] text-black`}>
      <AdminHeader onLogout={logout} />

      <section className="w-full px-8 pt-9 pb-12">
        <AdminTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        <div className="mt-3 mx-auto w-[1600px] h-px bg-black/8" />
        {activeTab === "Dashboard" ? <AdminDashboardPanel loadingMetrics={loadingMetrics} metrics={metrics} /> : null}

        {activeTab === "Packages" ? (
          <AdminPackagesPanel
            groupedCategories={groupedCategories}
            packages={packages}
            loadingPackages={loadingPackages}
            expandedPackageId={expandedPackageId}
            infoMessage={infoMessage}
            newCategory={newCategory}
            onNewCategoryChange={setNewCategory}
            onAddCategory={addCategory}
            onEditCategory={editCategory}
            onDeleteCategory={deleteCategory}
            onAddPackage={addPackage}
            onEditPackage={editPackage}
            onDeletePackage={deletePackage}
            onTogglePackage={setExpandedPackageId}
          />
        ) : null}
      </section>
    </main>
  );
}
