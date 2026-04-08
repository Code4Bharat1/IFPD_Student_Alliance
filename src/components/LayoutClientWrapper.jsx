"use client";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function LayoutClientWrapper({ children }) {
  return (
    <ThemeProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "var(--bg-card)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-primary)",
          },
        }}
      />
      <Navbar />
      <main className="pt-[70px]">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
