export default function CurrencySelector() {
  return (
    <select
      className="
      border
      rounded-xl
      px-3
      py-2
      "
    >
      <option>USD ($)</option>
      <option>EUR (€)</option>
      <option>GBP (£)</option>
      <option>KES (KSh)</option>
      <option>AED (د.إ)</option>
    </select>
  );
}
