"use client";
import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal, Search } from "lucide-react";

const SIZE_FILTERS = ["All", '65"', '75"', '86"', '98"',"110"];
const CATEGORY_FILTERS = [
  { value: "all", label: "All" },
  { value: "Normal", label: "Normal" },
  { value: "Google EDLA without Camera", label: "EDLA Without Camera" },
  { value: "Google EDLA with Camera", label: "EDLA With Camera" },
];

export default function ProductsPage() {
  const [sizeFilter, setSizeFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

const filtered = useMemo(() => {
  let list = Array.isArray(products) ? [...products] : [];

  if (search.trim()) {
    const q = search.toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  if (sizeFilter !== "All") {
    const size = parseInt(sizeFilter);
    list = list.filter((p) => p.size === size);
  }

  if (categoryFilter !== "all") {
    list = list.filter((p) => p.subCategory === categoryFilter);
  }

  if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);

  return list;
}, [sizeFilter, categoryFilter, search, sort]);
const groupedProducts = useMemo(() => {
  return {
    Normal: filtered.filter(p => p.subCategory === "Normal"),
    "Google EDLA without Camera": filtered.filter(p => p.subCategory === "Google EDLA without Camera"),
    "Google EDLA with Camera": filtered.filter(p => p.subCategory === "Google EDLA with Camera"),
  };
}, [filtered]);
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Page header */}
      <div className="bg-bg-section border-b border-border-primary py-10 px-4 text-center mb-10">
        <h1 className="text-4xl font-extrabold text-text-heading mb-3">Our IFPD Products</h1>
        <p className="text-text-secondary max-w-xl mx-auto mb-6">
  Explore our full range of Interactive Flat Panel Displays designed for classrooms, offices, and enterprise environments — delivering powerful performance and seamless collaboration.
</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Filters bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-stretch md:items-center">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
            <input
              type="text"
              placeholder="Search products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-border-primary rounded-xl text-sm bg-bg-input text-text-primary focus:outline-none focus:ring-2 focus:ring-border-focus transition"
            />
          </div>

          {/* Size filter */}
          <div className="flex gap-2 flex-wrap">
            {SIZE_FILTERS.map((s) => (
              <button
                key={s}
                onClick={() => setSizeFilter(s)}
                className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all ${
                  sizeFilter === s
                    ? "text-white border-transparent"
                    : "text-text-secondary border-border-primary hover:border-border-secondary bg-bg-card"
                }`}
                style={sizeFilter === s ? { backgroundColor: "var(--brand-primary)" } : {}}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex gap-2 flex-wrap">
            {CATEGORY_FILTERS.map((c) => (
              <button
                key={c.value}
                onClick={() => setCategoryFilter(c.value)}
                className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all ${
                  categoryFilter === c.value
                    ? "text-white border-transparent"
                    : "text-text-secondary border-border-primary hover:border-border-secondary bg-bg-card"
                }`}
                style={
                  categoryFilter === c.value ? { backgroundColor: "var(--brand-secondary)" } : {}
                }
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-text-tertiary" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-border-primary rounded-xl py-2.5 px-3 text-sm bg-bg-card text-text-primary focus:outline-none"
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-text-secondary mb-6">
          Showing{" "}
          <span className="font-semibold text-text-primary">{filtered.length}</span>{" "}
          product{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
       {filtered.length > 0 ? (
  <>
    {Object.entries(groupedProducts).map(([section, items]) =>
      items.length > 0 && (
        <div key={section} className="mb-12">
          
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            {section}
            <span className="text-sm bg-gray-200 px-2 py-1 rounded">
              {items.length}
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      )
    )}
  </>
) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-text-heading mb-2">No products found</h3>
            <p className="text-text-muted text-sm">Try adjusting your filters or search query.</p>
            <button
              onClick={() => {
                setSizeFilter("All");
                setCategoryFilter("all");
                setSearch("");
              }}
              className="mt-6 px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--brand-primary)" }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


