import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import HeroImage from "@/components/HeroImage";
import { ArrowRight, PlayCircle, Star } from "lucide-react";
import {
  FiMonitor,
  FiEdit3,
  FiUsers,
  FiWifi,
  FiSettings,
  FiLayers,
} from "react-icons/fi";

export const metadata = {
  title: "Home | IFPD Student Alliance",
  description:
    "Interactive Flat Panel Displays for modern classrooms — explore our range of 65\" to 98\" IFPD panels.",
};
const features = [
  {
    icon: <FiMonitor />,
    title: "4K Ultra HD Display",
    description: "Crystal clear visuals for better classroom engagement.",
  },
  {
    icon: <FiEdit3 />,
    title: "Multi-Touch Writing",
    description: "Smooth writing experience with multiple touch points.",
  },
  {
    icon: <FiUsers />,
    title: "Collaborative Learning",
    description: "Multiple students can interact simultaneously.",
  },
  {
    icon: <FiWifi />,
    title: "Wireless Connectivity",
    description: "Connect devices easily without cables.",
  },
  {
    icon: <FiSettings />,
    title: "Easy Integration",
    description: "Works with all major teaching tools & software.",
  },
  {
    icon: <FiLayers />,
    title: "All-in-One Solution",
    description: "Built-in Android system for seamless teaching.",
  },
];
export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* ─── Hero ─── */}
      <section
        className="relative overflow-hidden py-20 sm:py-28"
        style={{ background: "linear-gradient(135deg, #1e1b6e 0%, var(--brand-primary) 50%, #1e3a5f 100%)" }}
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10 bg-purple-400 blur-3xl" />
          <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full opacity-10 bg-blue-400 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                Trusted by 500+ Schools Across India
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Transform Every
                <span
                  className="block"
                  style={{
                    WebkitTextStroke: "2px rgba(255,255,255,0.3)",
                    color: "transparent",
                  }}
                >
                  Classroom
                </span>
                with IFPD
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-lg">
                Interactive Flat Panel Displays built for modern education — 4K visuals, 20-point touch, Android 13, and seamless collaboration. Choose the size that fits your space.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: "var(--brand-accent)" }}
                >
                  Explore Products <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
                >
                  <PlayCircle className="w-4 h-4" /> Get a Quote
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mt-12">
                {[
                  { value: "500+", label: "Schools" },
                  { value: "10K+", label: "Units Sold" },
                  { value: "4.9★", label: "Rating" },
                  { value: "24×7", label: "Support" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-extrabold text-white">{value}</div>
                    <div className="text-blue-200 text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="relative flex justify-center">
              <div
                className="absolute inset-0 rounded-3xl opacity-20 blur-2xl"
                style={{ backgroundColor: "var(--brand-accent)" }}
              />
              <div className="relative w-full max-w-md">
                <HeroImage src="/6.jpg" alt="IFPD 65-inch display" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Choose IFPD ─── */}
      <section className="py-20 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 section-divider pb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-heading mb-3">
              Why Choose Our IFPDs?
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Every panel is engineered to make teaching powerful and learning immersive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-glow flex items-start gap-4 p-6 rounded-2xl border border-border-primary bg-bg-card"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl text-white text-xl shrink-0"
                  style={{ background: "var(--brand-gradient)" }}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-text-heading mb-1">{f.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Products ─── */}
      <section className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-heading mb-2">
                Featured Products
              </h2>
              <p className="text-text-secondary">
                Our most popular IFPD sizes for classrooms and boardrooms.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 font-semibold text-sm text-brand-primary hover:underline shrink-0"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section
        className="py-16 mx-4 sm:mx-6 lg:mx-8 mb-16 rounded-3xl overflow-hidden relative"
        style={{ background: "var(--brand-gradient)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
          <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to upgrade your classroom?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Our team will help you choose the right IFPD for your space and budget. Get a free demo today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 text-brand-primary"
          >
            Contact Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

