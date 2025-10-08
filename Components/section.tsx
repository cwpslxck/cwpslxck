"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

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
    <motion.section
      className={cn(className)}
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {title && (
        <motion.p
          className="font-black text-2xl pb-1.5"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.p>
      )}
      <motion.div
        className={cn(classNameWrapper)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

export default Section;
