export const TextArea = ({ value, setter, placeholder }) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      rows={6}
      className="bg-white border border-gray-500 rounded p-2 focus:outline-none px-2"
      onChange={(e) => setter(e.target.value)}
      required
    />
  );
};
