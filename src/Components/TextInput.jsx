export const TextInput = ({ value, setter, placeholder }) => {
  return (
    <input
      value={value}
      onChange={(e) => setter(e.target.value)}
      placeholder={placeholder}
      className="bg-white border border-gray-500 rounded p-2 focus:outline-none px-2"
      required
    />
  );
};
