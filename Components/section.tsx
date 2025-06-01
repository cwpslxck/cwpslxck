import { cn } from "@/lib/utils";
import React from "react";

function Section({
  children,
  title,
  className,
  classNameWrapper,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
  classNameWrapper?: string;
}) {
  return (
    <section className={cn(className)}>
      <p className="font-black text-2xl pb-1.5">{title}</p>
      <div className={cn(classNameWrapper)}>{children}</div>
    </section>
  );
}

export default Section;
