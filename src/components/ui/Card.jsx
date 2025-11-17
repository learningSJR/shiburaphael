export default function Card({ title, children }) {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
      {title && (
        <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
      )}
      {children}
    </div>
  );
}
