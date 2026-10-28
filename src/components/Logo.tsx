"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  isDark?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", isDark = false, size = "md" }: LogoProps) {
  const heightClass = size === "sm" ? "h-7" : size === "lg" ? "h-11" : "h-9";

  return (
    <Link href="/" className={`inline-flex items-center group select-none ${className}`}>
      {/* Official DeployMedia Logo (Exact brand image, no dot, seamless transparent blend) */}
      <img
        src="/images/deploymedia-logo.jpg"
        alt="DeployMedia"
        className={`${heightClass} w-auto object-contain transition-transform duration-200 group-hover:scale-102 ${
          isDark 
            ? "brightness-0 invert contrast-200" 
            : "mix-blend-multiply"
        }`}
      />
    </Link>
  );
}
