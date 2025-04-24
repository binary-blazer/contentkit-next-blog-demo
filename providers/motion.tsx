"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function MotionProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
