import React from "react";

function CVtitle({ children }) {
  return (
    <>
      <h2 className="mb-2 font-semibold uppercase text-slate-800">
        {children}
      </h2>
      <div className="relative my-2">
        <hr className="border-t border-slate-400" />
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[40px] h-[4px] bg-slate-900" />
      </div>
    </>
  );
}

export default CVtitle;
