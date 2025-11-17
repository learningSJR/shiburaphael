import React from "react";
import useFetch from "@/hooks/useFetch";

function SkillsAbilities() {
  const { data, loading, error } = useFetch(
    "./public/skillsAbilities.json" // ✅ no "@" for fetch path — it must be a valid public or relative URL
  );

  if (loading) return <p className="text-white">Loading ...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>; // ✅ lowercase <p>
  if (!data || !Array.isArray(data)) {
    return (
      <p className="text-yellow-500">Skills data is malformed or empty.</p>
    );
  }

  //const skills = data || [];

  return (
    <div>
      <ul>
        {data.map((skillGroup, idx) => (
          <li key={idx}>
            <strong className="text-lg font-semibold text-white">
              {skillGroup.category}
            </strong>
            <ul className="mt-1 ml-6 list-disc text-slate-400">
              {skillGroup.items.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsAbilities;
