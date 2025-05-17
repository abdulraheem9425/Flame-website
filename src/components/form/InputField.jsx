// components/InputField.jsx
export default function InputField({ label, type = "text", name, placeholder }) {
  return (
    <div className="mb-5">
      <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        required
      />
    </div>
  );
}
