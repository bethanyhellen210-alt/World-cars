export default function SearchBar() {
  return (
    <div
      className="
      bg-white
      shadow-xl
      rounded-2xl
      p-6
      -mt-10
      max-w-6xl
      mx-auto
      "
    >
      <div className="grid md:grid-cols-5 gap-4">

        <input
          placeholder="Make"
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Model"
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Country"
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Price"
          className="border p-3 rounded-xl"
        />

        <button
          className="
          bg-blue-600
          text-white
          rounded-xl
          "
        >
          Search
        </button>

      </div>
    </div>
  );
}
