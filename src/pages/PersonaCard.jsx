import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

function PersonaCard({ icon: Icon, name, role, goals, painPoints }) {
  return (
    <CardSpotlight className="w-full rounded-2xl">
      <div className="transition duration-300 border shadow-xl card bg-base-100 border-base-300 hover:shadow-2xl rounded-2xl">
        <div className="card-body">
          <div className="flex items-center gap-3">
            {Icon && <Icon className="text-3xl text-emerald-500" />}
            <div>
              <h3 className="font-extrabold card-title text-emerald-600">
                {name}
              </h3>
              <p className="text-sm font-medium text-secondary">{role}</p>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">Goals</h4>
            <ul className="pl-5 mt-2 space-y-1 text-sm list-disc">
              {goals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-error">Pain Points</h4>
            <ul className="pl-5 mt-2 space-y-1 text-sm list-disc">
              {painPoints.map((pain, i) => (
                <li key={i}>{pain}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
}

export default PersonaCard;
