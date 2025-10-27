"use client";

import type { ReactNode } from "react";

interface LayoutContainerProps {
  children: ReactNode;
}

export default function LayoutContainer({ children }: LayoutContainerProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-2xl">{children}</div>
    </div>
  );
}
