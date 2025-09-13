"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

/* -------------------------------------------------------------------------- */
/*                               Utility Hooks                                */
/* -------------------------------------------------------------------------- */

const useMotionSupport = (): boolean => {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported(
      typeof window !== "undefined" && "requestAnimationFrame" in window
    );
  }, []);

  return isSupported;
};

/* -------------------------------------------------------------------------- */
/*                                Type Decls                                  */
/* -------------------------------------------------------------------------- */

type DockItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

interface DockProps {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}

/* -------------------------------------------------------------------------- */
/*                              Main Container                                */
/* -------------------------------------------------------------------------- */

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: DockProps) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                            FloatingDockMobile                              */
/* -------------------------------------------------------------------------- */

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const isMotionSupported = useMotionSupport();

  const baseClass = cn("relative block md:hidden", className);

  if (!isMotionSupported) {
    return (
      <div className={baseClass}>
        {open && (
          <div className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2">
            {items.map((item) => (
              <div key={item.title} className="opacity-100">
                <a
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </div>
            ))}
          </div>
        )}
        <ToggleButton open={open} setOpen={setOpen} />
      </div>
    );
  }

  return (
    <div className={baseClass}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <ToggleButton open={open} setOpen={setOpen} />
    </div>
  );
};

const ToggleButton = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (o: boolean) => void;
}) => (
  <button
    onClick={() => setOpen(!open)}
    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200"
  >
    <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
  </button>
);

/* -------------------------------------------------------------------------- */
/*                            FloatingDockDesktop                             */
/* -------------------------------------------------------------------------- */

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const isMotionSupported = useMotionSupport();
  const mouseX = useMotionValue(Infinity); // Always called

  const containerClass = cn(
    "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 px-4 pb-3 md:flex shadow-lg",
    className
  );

  if (!isMotionSupported) {
    return (
      <div className={containerClass}>
        {items.map((item) => (
          <div
            key={item.title}
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 transition-all duration-200"
          >
            <a href={item.href} className="flex h-8 w-8 items-center justify-center">
              {item.icon}
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={containerClass}
    >
      {items.map((item) => (
        <IconContainer key={item.title} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               IconContainer                                */
/* -------------------------------------------------------------------------- */

const IconContainer = ({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  const widthIcon = useSpring(widthIconTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const heightIcon = useSpring(heightIconTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
};
