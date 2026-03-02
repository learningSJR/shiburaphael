"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
  openPreview: (slide: SlideData) => void;
}

const Slide = ({
  slide,
  index,
  current,
  handleSlideClick,
  openPreview,
}: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + r.width / 2);
    yRef.current = event.clientY - (r.top + r.height / 2);
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src, button, title } = slide;

  return (
    <div className="[perspective:1200px]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] cursor-pointer"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        {/* Image Container */}
        <div
          className="absolute inset-0 overflow-hidden rounded-xl bg-neutral-900"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            src={src}
            alt={title}
            className="absolute inset-0 object-cover w-full h-full brightness-110 contrast-110"
            loading="eager"
          />
        </div>

        {/* Content */}
        <article
          className={`relative p-8 transition-opacity duration-500 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="p-2 text-lg font-semibold bg-black md:text-2xl lg:text-3xl">
            {title}
          </h2>

          <button
            onClick={(e) => {
              e.stopPropagation();
              openPreview(slide);
            }}
            className="px-5 py-2 mt-6 text-sm text-black transition duration-200 bg-emerald-400 rounded-xl hover:shadow-lg"
          >
            {button}
          </button>
        </article>
      </li>
    </div>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [preview, setPreview] = useState<SlideData | null>(null);
  const id = useId();

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  return (
    <>
      <div
        className="relative w-[70vmin] h-[70vmin] mx-auto"
        aria-labelledby={`carousel-heading-${id}`}
      >
        <ul
          className="absolute flex mx-[-4vmin] transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
              openPreview={setPreview}
            />
          ))}
        </ul>

        {/* Controls */}
        <div className="absolute flex justify-center w-full top-[calc(100%+1.5rem)]">
          <button
            onClick={handlePreviousClick}
            className="w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-950 rounded-full hover:-translate-y-0.5 transition"
          >
            <IconArrowNarrowRight className="rotate-180 text-neutral-200 dark:text-neutral-400" />
          </button>

          <button
            onClick={handleNextClick}
            className="w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 rounded-full hover:-translate-y-0.5 transition"
          >
            <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
          </button>
        </div>
      </div>

      {/* FULL SCREEN PREVIEW MODAL */}
      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="relative w-[95vw] h-[95vh] flex items-center justify-center">
            <button
              onClick={() => setPreview(null)}
              className="absolute text-3xl text-white transition top-6 right-6 hover:scale-110"
            >
              ✕
            </button>

            <img
              src={preview.src}
              alt={preview.title}
              className="object-contain max-w-full max-h-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
