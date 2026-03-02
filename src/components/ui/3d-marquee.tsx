import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const chunkSize = Math.ceil(images.length / 4);

  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "relative mx-auto h-[600px] overflow-hidden rounded-2xl",
        className,
      )}
    >
      {/* CENTER WRAPPER */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* OVERSIZED GRID FOR 3D COVERAGE */}
        <div className="w-[160%] h-[160%] flex items-center justify-center">
          <div
            style={{
              transform: "perspective(1200px) rotateX(55deg) rotateZ(-45deg)",
            }}
            className="grid grid-cols-4 gap-8"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                key={colIndex}
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="flex flex-col gap-8"
              >
                {subarray.map((image, imageIndex) => (
                  <motion.img
                    key={imageIndex}
                    src={image}
                    alt={`Skill ${imageIndex + 1}`}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-[970/700] rounded-lg object-cover shadow-xl"
                    width={970}
                    height={700}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
