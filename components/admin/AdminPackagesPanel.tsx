"use client";

import { BookingCategory, BookingCategoryGroup, BookingPackage } from "./types";

interface AdminPackagesPanelProps {
  groupedCategories: BookingCategoryGroup[];
  packages: BookingPackage[];
  loadingPackages: boolean;
  expandedPackageId: number | null;
  infoMessage: string;
  newCategory: string;
  onNewCategoryChange: (value: string) => void;
  onAddCategory: (nameOverride?: string) => Promise<void> | void;
  onEditCategory: (category: BookingCategory) => Promise<void> | void;
  onDeleteCategory: (id: number) => Promise<void> | void;
  onAddPackage: () => Promise<void> | void;
  onEditPackage: (pkg: BookingPackage) => Promise<void> | void;
  onDeletePackage: (id: number) => Promise<void> | void;
  onTogglePackage: (id: number | null) => void;
}

export function AdminPackagesPanel({
  groupedCategories,
  packages,
  loadingPackages,
  expandedPackageId,
  infoMessage,
  newCategory,
  onNewCategoryChange,
  onAddCategory,
  onEditCategory,
  onDeleteCategory,
  onAddPackage,
  onEditPackage,
  onDeletePackage,
  onTogglePackage,
}: AdminPackagesPanelProps) {
  return (
    <section className="mt-12 max-w-[1400px] ml-28">
      <h1 className="text-[30px] font-medium">Package Management</h1>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-96">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-[26px] font-bold">Categories</h2>
            <button
              type="button"
              className="text-[26px] leading-none font-semibold"
              onClick={() => onAddCategory("New Category")}
              aria-label="Add category"
            >
              +
            </button>
          </div>

          <ul className="mt-6 space-y-6">
            {groupedCategories.map((category) => (
              <li key={category.id} className="flex items-center justify-between text-[20px] leading-none">
                <span className="flex items-center gap-4">
                  <span className="text-xs">•</span>
                  <span>{category.name}</span>
                </span>
                <span className="flex items-center gap-6 text-[14px] text-black/45">
                  <button type="button" onClick={() => onEditCategory(category)} className="hover:text-black/70">
                    Edit
                  </button>
                  <button type="button" onClick={() => onDeleteCategory(category.id)} className="hover:text-black/70">
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 border border-black/40 rounded-xl p-4">
            <h3 className="text-[28px] font-medium">Add new category</h3>
            <input
              value={newCategory}
              onChange={(e) => onNewCategoryChange(e.target.value)}
              placeholder="Enter category name here"
              className="mt-4 w-full border border-black/50 h-[40px] px-3 text-xs"
            />
            <button
              type="button"
              onClick={() => onAddCategory()}
              className="mt-4 w-full h-[42px] bg-black text-white text-[18px] font-medium"
            >
              Add category
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-[26px] font-semibold">Packages</h2>
            <button type="button" className="text-[26px] leading-none font-semibold" onClick={onAddPackage}>
              +
            </button>
          </div>

          <div className="mt-3 rounded-xl bg-[#efefef] p-4 min-h-[240px]">
            {loadingPackages ? <p className="text-base">Loading...</p> : null}
            {!loadingPackages && packages.length === 0 ? (
              <p className="text-base text-black/60">No packages yet.</p>
            ) : null}
            {!loadingPackages &&
              packages.map((pkg, index) => {
                const expanded = expandedPackageId === pkg.id || (expandedPackageId == null && index === 0);
                return (
                  <div key={pkg.id} className={index > 0 ? "mt-4" : ""}>
                    <button
                      type="button"
                      onClick={() => onTogglePackage(expanded ? null : pkg.id)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <span className="text-[24px] font-medium">{pkg.name}</span>
                      <span className="text-[26px] leading-none">{expanded ? "⌃" : "⌄"}</span>
                    </button>
                    {expanded ? (
                      <div className="mt-2 text-[12px] text-black/80 leading-[1.4]">
                        <p>{pkg.description}</p>
                        {pkg.includes.length ? (
                          <ul className="mt-1 list-disc ml-6">
                            {pkg.includes.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : null}
                        <p className="mt-1">Duration: {pkg.duration}</p>
                        <p>Price: {pkg.price.toLocaleString()} ETB</p>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => onEditPackage(pkg)}
                            className="h-[42px] bg-black text-white text-[18px] font-medium"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => onDeletePackage(pkg.id)}
                            className="h-[42px] bg-[#ea3a3a] text-white text-[18px] font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {infoMessage ? <p className="mt-6 text-base text-black/60">{infoMessage}</p> : null}
    </section>
  );
}
