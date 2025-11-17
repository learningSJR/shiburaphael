export default function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded-lg font-medium transition";
  const variants = {
    primary: "bg-primary text-white hover:bg-sky-700",
    outline: "border border-primary text-primary hover:bg-sky-50",
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
