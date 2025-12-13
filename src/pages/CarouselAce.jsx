import React from "react";
import Carousel from "@/components/ui/carousel";
const slideData = [
  {
    title: "Retail Intelligence 360",
    description:
      "Our Retail Intelligence 360 aids firms in effectively targeting sales and marketing for maximum growth and market placement.",
    button: "Explore Component",
    src: "Dashboard.png",
  },
  {
    title: "Hy Cite",
    description:
      "Define new business objective by selecting KPIs, set thresholds, success criteria etc. Set up alerts to stay on top of critical updates.",
    button: "Explore Component",
    src: "DashboardSummary.png",
  },
  {
    title: "The Principle 6",
    description: "Leveraging the power of cooperative cooperation",
    button: "Explore Component",
    src: "Landing.png",
  },
  {
    title: "Sump Cleaner",
    description: "Clean sumps faster, smarter and safer",
    button: "Explore Component",
    src: "ProductDetail.png",
  },
];
function CarouselAce() {
  return (
    <div className="relative w-full h-full py-20 overflow-hidden">
      <Carousel slides={slideData} />
    </div>
  );
}

export default CarouselAce;
