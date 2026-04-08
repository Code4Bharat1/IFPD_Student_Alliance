"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ShoppingCart } from "lucide-react";

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function ProductCard({ product }) {
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="card-glow flex flex-col overflow-hidden rounded-2xl border border-border-primary bg-bg-card"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-bg-section overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-500 hover:scale-105"
        />
        {product.badge && (
          <span
            className="absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded-full"
            style={{ backgroundColor: "var(--brand-accent)" }}
          >
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-3 right-3 text-white text-xs font-bold px-2 py-1 rounded-full bg-brand-secondary">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold text-text-heading mb-1">{product.name}</h3>
        <p className="text-sm text-text-secondary mb-4 leading-relaxed">{product.description}</p>

        {/* Features */}
        <ul className="space-y-1.5 mb-5">
          {product.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
              <CheckCircle className="w-3.5 h-3.5 shrink-0 text-brand-secondary" />
              {f}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-brand-primary">
              {formatCurrency(product.price)}
            </span>
            <span className="text-sm text-text-tertiary line-through">
              {formatCurrency(product.originalPrice)}
            </span>
          </div>

          <Link
            href="/contact"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: "var(--brand-gradient)" }}
          >
            <ShoppingCart className="w-4 h-4" />
            Get a Quote
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
