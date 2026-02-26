import { FaUserTie, FaBullhorn, FaStore } from "react-icons/fa";

export const personas = [
  {
    icon: FaUserTie,
    name: "Anita Rao",
    role: "Operations Director",
    goals: [
      "Monitor multi-store performance",
      "Identify risk areas quickly",
      "Make data-driven decisions",
    ],
    painPoints: [
      "Overloaded dashboards",
      "Too many filters",
      "Hard to prioritize insights",
    ],
  },
  {
    icon: FaBullhorn,
    name: "Rahul Mehta",
    role: "Marketing Manager",
    goals: [
      "Segment customers effectively",
      "Predict churn",
      "Track campaign ROI",
    ],
    painPoints: [
      "Unclear AI predictions",
      "Confusing visualizations",
      "Time-consuming analysis",
    ],
  },
  {
    icon: FaStore,
    name: "Priya Sharma",
    role: "Store Manager",
    goals: [
      "Track daily KPIs",
      "Improve store performance",
      "Understand sales trends",
    ],
    painPoints: ["Complex tables", "Excel dependency", "No actionable alerts"],
  },
];
