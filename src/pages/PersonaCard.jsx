import React from "react";
// import { CardSpotlight } from "@/components/ui/card-spotlight";

function PersonaCard({ icon: Icon, name, role, goals, painPoints }) {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-full transition duration-300 border shadow-xl border-base-300 hover:shadow-2xl rounded-2xl">
        <div className="flex flex-col flex-grow p-6">
          {/* Header */}
          <div className="flex items-center gap-3">
            {Icon && <Icon className="text-3xl text-emerald-500" />}
            <div>
              <h3 className="font-extrabold text-emerald-600">{name}</h3>
              <p className="text-sm font-medium text-primary">{role}</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow mt-4">
            <h4 className="font-semibold">Goals</h4>
            <ul className="pl-5 mt-2 space-y-1 text-sm list-disc">
              {goals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>

            <h4 className="mt-4 font-semibold text-red-500">Pain Points</h4>
            <ul className="pl-5 mt-2 space-y-1 text-sm list-disc">
              {painPoints.map((pain, i) => (
                <li key={i}>{pain}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonaCard;
