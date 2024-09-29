import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "../lib/utils";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  imageSrc: string; // Tambahkan imageSrc sebagai sumber gambar lokal
};

export const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  imageSrc,
}: LinkPreviewProps) => {
  const [, setOpen] = React.useState(false); // Hilangkan 'open' karena tidak dipakai
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: React.MouseEvent) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <>
      {isMounted ? (
        <div className="hidden">
          <img
            src={imageSrc}
            width={width}
            height={height}
            alt="hidden image"
            loading="lazy"
          />
        </div>
      ) : null}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={setOpen} // Hanya gunakan setOpen
      >
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          className={cn("text-black dark:text-white", className)}
        >
          {children}
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
          side="top"
          align="center"
          sideOffset={10}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            className="shadow-xl rounded-xl"
            style={{
              x: translateX,
            }}
          >
            <a
              href={url}
              className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
              style={{ fontSize: 0 }}
            >
              <img
                src={imageSrc} // Gunakan imageSrc untuk gambar lokal
                width={width}
                height={height}
                alt="preview image"
                loading="lazy"
                className="rounded-lg"
              />
            </a>
          </motion.div>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};
