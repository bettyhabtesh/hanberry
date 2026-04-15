"use client";

import { useMemo, useState } from "react";
import { BookingCategory, BookingCategoryGroup, BookingPackage, NewPackageInput } from "./types";

interface AdminPackagesPanelProps {
  groupedCategories: BookingCategoryGroup[];
  packages: BookingPackage[];
  loadingPackages: boolean;
  expandedPackageId: number | null;
  infoMessage: string;
  newCategory: string;
  onNewCategoryChange: (value: string) => void;
  onAddCategory: (nameOverride?: string) => Promise<void> | void;
  onEditCategory: (category: BookingCategory, nextName: string) => Promise<void> | void;
  onDeleteCategory: (id: number) => Promise<void> | void;
  onAddPackage: (input?: NewPackageInput) => Promise<void> | void;
  onEditPackage: (pkg: BookingPackage, nextName: string) => Promise<void> | void;
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
  const [showAddPackageModal, setShowAddPackageModal] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | "">(
    groupedCategories[0]?.id ?? "",
  );
  const [packageName, setPackageName] = useState("");
  const [packageDescription, setPackageDescription] = useState("");
  const [packageDuration, setPackageDuration] = useState("");
  const [packagePrice, setPackagePrice] = useState("");
  const [includeDraft, setIncludeDraft] = useState("");
  const [includes, setIncludes] = useState<string[]>([]);
  const [modalType, setModalType] = useState<
    null | "edit-category" | "delete-category" | "edit-package" | "delete-package"
  >(null);
  const [activeCategory, setActiveCategory] = useState<BookingCategory | null>(null);
  const [activePackage, setActivePackage] = useState<BookingPackage | null>(null);
  const [editNameDraft, setEditNameDraft] = useState("");

  const categories = useMemo(
    () =>
      groupedCategories.map(({ id, name, sort_order, active }) => ({
        id,
        name,
        sort_order,
        active,
      })),
    [groupedCategories],
  );

  function openAddPackageModal() {
    setSelectedCategoryId(categories[0]?.id ?? "");
    setPackageName("");
    setPackageDescription("");
    setPackageDuration("");
    setPackagePrice("");
    setIncludeDraft("");
    setIncludes([]);
    setShowAddPackageModal(true);
  }

  function addInclude() {
    const value = includeDraft.trim();
    if (!value) return;
    setIncludes((prev) => [...prev, value]);
    setIncludeDraft("");
  }

  function removeInclude(index: number) {
    setIncludes((prev) => prev.filter((_, i) => i !== index));
  }

  function openEditCategoryModal(category: BookingCategory) {
    setActiveCategory(category);
    setEditNameDraft(category.name);
    setModalType("edit-category");
  }

  function openDeleteCategoryModal(category: BookingCategory) {
    setActiveCategory(category);
    setModalType("delete-category");
  }

  function openEditPackageModal(pkg: BookingPackage) {
    setActivePackage(pkg);
    setEditNameDraft(pkg.name);
    setModalType("edit-package");
  }

  function openDeletePackageModal(pkg: BookingPackage) {
    setActivePackage(pkg);
    setModalType("delete-package");
  }

  function closeActionModal() {
    setModalType(null);
    setActiveCategory(null);
    setActivePackage(null);
    setEditNameDraft("");
  }

  async function submitNewPackage() {
    if (!selectedCategoryId) return;

    await onAddPackage({
      category_id: Number(selectedCategoryId),
      name: packageName,
      type: "normal",
      description: packageDescription,
      duration: packageDuration,
      price: Number(packagePrice || 0),
      includes,
    });
    setShowAddPackageModal(false);
  }

  async function submitActionModal() {
    if (modalType === "edit-category" && activeCategory) {
      await onEditCategory(activeCategory, editNameDraft);
      closeActionModal();
      return;
    }
    if (modalType === "delete-category" && activeCategory) {
      await onDeleteCategory(activeCategory.id);
      closeActionModal();
      return;
    }
    if (modalType === "edit-package" && activePackage) {
      await onEditPackage(activePackage, editNameDraft);
      closeActionModal();
      return;
    }
    if (modalType === "delete-package" && activePackage) {
      await onDeletePackage(activePackage.id);
      closeActionModal();
      return;
    }
  }

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
                  <button type="button" onClick={() => openEditCategoryModal(category)} className="hover:text-black/70">
                    Edit
                  </button>
                  <button type="button" onClick={() => openDeleteCategoryModal(category)} className="hover:text-black/70">
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
            <button type="button" className="text-[26px] leading-none font-semibold" onClick={openAddPackageModal}>
              +
            </button>
          </div>
          <button
            type="button"
            onClick={openAddPackageModal}
            className="mt-4 h-[42px] px-6 bg-black text-white text-[16px] font-medium"
          >
            Add package
          </button>

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
                            onClick={() => openEditPackageModal(pkg)}
                            className="h-[42px] bg-black text-white text-[18px] font-medium"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => openDeletePackageModal(pkg)}
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

      {showAddPackageModal ? (
        <div className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center px-6">
          <div className="w-full max-w-[880px] rounded-2xl bg-white p-8 shadow-xl">
            <h3 className="text-[36px] font-medium">Add new package</h3>

            <select
              className="mt-6 w-[360px] h-[50px] border border-black/40 px-3 text-sm"
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
            >
              <option value="" disabled>
                Select category
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <input
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
              placeholder="Enter package name here"
              className="mt-6 w-full h-[50px] border border-black/40 px-3 text-sm"
            />
            <input
              value={packageDescription}
              onChange={(e) => setPackageDescription(e.target.value)}
              placeholder="Enter package description here"
              className="mt-5 w-full h-[50px] border border-black/40 px-3 text-sm"
            />

            <div className="mt-5 grid grid-cols-2 gap-5">
              <input
                value={packageDuration}
                onChange={(e) => setPackageDuration(e.target.value)}
                placeholder="Enter package duration here"
                className="h-[50px] border border-black/40 px-3 text-sm"
              />
              <input
                value={packagePrice}
                onChange={(e) => setPackagePrice(e.target.value)}
                placeholder="Enter package price here"
                className="h-[50px] border border-black/40 px-3 text-sm"
              />
            </div>

            <p className="mt-5 text-sm text-black/80">Package includes</p>
            <div className="mt-2 flex items-center gap-4">
              <input
                value={includeDraft}
                onChange={(e) => setIncludeDraft(e.target.value)}
                className="w-[320px] h-[46px] border border-black/40 px-3 text-sm"
              />
              <button type="button" onClick={addInclude} className="h-[46px] px-8 bg-black text-white text-[18px]">
                Add
              </button>
            </div>
            <ul className="mt-4 space-y-1 text-sm text-[#bba4a4]">
              {includes.map((include, index) => (
                <li key={`${include}-${index}`} className="flex items-center gap-2">
                  <span>• {include}</span>
                  <button
                    type="button"
                    className="text-black/60 hover:text-black"
                    onClick={() => removeInclude(index)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setShowAddPackageModal(false)}
                className="h-[50px] px-8 border border-black/30 text-[20px]"
              >
                Cancel
              </button>
              <button type="button" onClick={submitNewPackage} className="h-[50px] px-8 bg-black text-white text-[20px]">
                Add Package
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {modalType ? (
        <div className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center px-6">
          <div className="w-full max-w-[560px] rounded-2xl bg-white p-8 shadow-xl">
            <h3 className="text-[30px] font-medium">
              {modalType === "edit-category" && "Edit category"}
              {modalType === "delete-category" && "Delete category"}
              {modalType === "edit-package" && "Edit package"}
              {modalType === "delete-package" && "Delete package"}
            </h3>

            {modalType === "edit-category" || modalType === "edit-package" ? (
              <input
                value={editNameDraft}
                onChange={(e) => setEditNameDraft(e.target.value)}
                className="mt-5 w-full h-[50px] border border-black/40 px-3 text-sm"
              />
            ) : (
              <p className="mt-5 text-sm text-black/70">
                Are you sure you want to delete{" "}
                {modalType === "delete-category" ? activeCategory?.name : activePackage?.name}?
              </p>
            )}

            <div className="mt-6 flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={closeActionModal}
                className="h-[46px] px-6 border border-black/30 text-[16px]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={submitActionModal}
                className={`h-[46px] px-6 text-[16px] text-white ${
                  modalType?.includes("delete") ? "bg-[#ea3a3a]" : "bg-black"
                }`}
              >
                {modalType?.includes("delete") ? "Delete" : "Save"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
