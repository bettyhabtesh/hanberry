"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { BookingRequest } from "./types";

interface AdminBookingsPanelProps {
  requests: BookingRequest[];
  loading: boolean;
  onUpdateStatus: (id: number, status: "pending" | "confirmed" | "rejected" | "done") => Promise<void>;
}

export function AdminBookingsPanel({ requests, loading, onUpdateStatus }: AdminBookingsPanelProps) {
  const [pendingSearch, setPendingSearch] = useState("");
  const [confirmedSearch, setConfirmedSearch] = useState("");
  const [showCompletedModal, setShowCompletedModal] = useState(false);

  const pendingRequests = useMemo(() => {
    const q = pendingSearch.toLowerCase().trim();
    return requests.filter((r) => {
      if (r.status !== "pending") return false;
      if (!q) return true;
      return r.full_name.toLowerCase().includes(q) || r.phone.includes(q);
    });
  }, [requests, pendingSearch]);

  const confirmedRequests = useMemo(() => {
    const q = confirmedSearch.toLowerCase().trim();
    return requests.filter((r) => {
      if (r.status !== "confirmed" && r.status !== "done") return false;
      if (!q) return true;
      return r.full_name.toLowerCase().includes(q) || r.phone.includes(q);
    });
  }, [requests, confirmedSearch]);

  const pendingCount = requests.filter((r) => r.status === "pending").length;
  const confirmedCount = requests.filter((r) => r.status === "confirmed" || r.status === "done").length;

  async function handleDone(id: number) {
    await onUpdateStatus(id, "done");
    setShowCompletedModal(true);
  }

  return (
    <section className="mt-10 max-w-[1600px] mx-auto">
      <h1 className="text-[32px] font-semibold">Booking Management</h1>
      <p className="text-black/65 mt-2 text-[16px]">
        Manage client requests and keep track of all your appointments.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        <SummaryCard
          title="Pending"
          description="New and unconfirmed requests awaiting your review and response."
          value={pendingCount}
        />
        <SummaryCard
          title="Confirmed Bookings"
          description="New and unconfirmed requests awaiting your review and response."
          value={confirmedCount}
        />
      </div>

      <h2 className="text-[20px] font-semibold mt-8">Pending Bookings</h2>
      <SearchBar value={pendingSearch} onChange={setPendingSearch} />
      <BookingsTable
        rows={pendingRequests}
        loading={loading}
        pending
        onAccept={(id) => onUpdateStatus(id, "confirmed")}
        onReject={(id) => onUpdateStatus(id, "rejected")}
        onDone={(id) => onUpdateStatus(id, "done")}
      />

      <h2 className="text-[20px] font-semibold mt-10">Confirmed Bookings</h2>
      <SearchBar value={confirmedSearch} onChange={setConfirmedSearch} />
      <BookingsTable
        rows={confirmedRequests}
        loading={loading}
        onAccept={(id) => onUpdateStatus(id, "confirmed")}
        onReject={(id) => onUpdateStatus(id, "rejected")}
        onDone={handleDone}
      />

      {showCompletedModal ? (
        <div className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center px-6">
          <div className="w-full max-w-[760px] rounded-2xl bg-white p-8 shadow-xl relative text-center">
            <button
              type="button"
              onClick={() => setShowCompletedModal(false)}
              className="absolute right-5 top-5 h-9 w-9 rounded-full bg-black text-white text-xl leading-none flex items-center justify-center"
              aria-label="Close completed modal"
            >
              ×
            </button>

            <div className="pt-8">
              <div className="mx-auto w-fit">
                <Image
                  src="/images/Completed.png"
                  alt="Completed"
                  width={340}
                  height={110}
                  className="h-auto w-auto"
                  priority
                />
              </div>
              <div className="mx-auto mt-5 h-36 w-36 rounded-full bg-[#E6EFE4] flex items-center justify-center">
                <span className="text-[88px] leading-none text-[#60D468]">✓</span>
              </div>
              <p className="mt-8 text-[18px] text-black/60">
                You can view completed works in history section
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function SummaryCard({ title, description, value }: { title: string; description: string; value: number }) {
  return (
    <article className="rounded-[34px] border border-black/35 bg-[#f4f4f4] px-10 py-7 flex items-center justify-between">
      <div>
        <h3 className="text-[32px] font-semibold leading-none">{title}</h3>
        <p className="mt-3 text-[16px] text-black/60">{description}</p>
      </div>
      <span className="text-[96px] font-bold leading-none">{value}</span>
    </article>
  );
}

function SearchBar({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="mt-4 flex items-center gap-3">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="search for customer using name or phone number"
        className="h-[58px] w-full rounded-full border border-black/30 px-6 text-[18px]"
      />
      <button className="h-[58px] rounded-full bg-black text-white px-8 text-[18px]">Search</button>
    </div>
  );
}

function BookingsTable({
  rows,
  loading,
  pending = false,
  onAccept,
  onReject,
  onDone,
}: {
  rows: BookingRequest[];
  loading: boolean;
  pending?: boolean;
  onAccept: (id: number) => void;
  onReject: (id: number) => void;
  onDone: (id: number) => void;
}) {
  return (
    <div className="mt-4 rounded-2xl overflow-hidden border border-black/10">
      <table className="w-full text-left">
        <thead className="bg-black/5 text-[16px]">
          <tr>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Customer Name</th>
            <th className="px-4 py-3">Phone Number</th>
            <th className="px-4 py-3">Person Quantity</th>
            <th className="px-4 py-3">Package</th>
            <th className="px-4 py-3">Duration</th>
            {pending ? <th className="px-4 py-3">Status</th> : null}
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="text-[15px]">
          {loading ? (
            <tr>
              <td className="px-4 py-4" colSpan={pending ? 8 : 7}>
                Loading...
              </td>
            </tr>
          ) : rows.length === 0 ? (
            <tr>
              <td className="px-4 py-4" colSpan={pending ? 8 : 7}>
                No bookings found.
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={row.id} className="border-t border-black/10">
                <td className="px-4 py-3">{row.id}</td>
                <td className="px-4 py-3">{row.full_name}</td>
                <td className="px-4 py-3">{row.phone}</td>
                <td className="px-4 py-3">{row.person_quantity}</td>
                <td className="px-4 py-3">{row.package_name}</td>
                <td className="px-4 py-3">{row.duration || "-"}</td>
                {pending ? (
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#D7AE39]" />
                      Pending
                    </span>
                  </td>
                ) : null}
                <td className="px-4 py-3">
                  {pending ? (
                    <div className="flex gap-2">
                      <button onClick={() => onAccept(row.id)} className="px-3 py-1 bg-[#39CD4A] text-white rounded">
                        Accept
                      </button>
                      <button onClick={() => onReject(row.id)} className="px-3 py-1 bg-[#EA3A3A] text-white rounded">
                        Reject
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => onDone(row.id)} className="px-4 py-1 bg-[#39CD4A] text-white rounded">
                      Done
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
