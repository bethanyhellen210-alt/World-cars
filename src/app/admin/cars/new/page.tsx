export default function AddVehiclePage() {
  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Add Vehicle
      </h1>

      <form className="space-y-4">

        <input
          placeholder="Vehicle Title"
          className="w-full border p-4 rounded-xl"
        />

        <input
          placeholder="Price"
          className="w-full border p-4 rounded-xl"
        />

        <input
          placeholder="Make"
          className="w-full border p-4 rounded-xl"
        />

        <input
          placeholder="Model"
          className="w-full border p-4 rounded-xl"
        />

        <input
          placeholder="Year"
          className="w-full border p-4 rounded-xl"
        />

        <input
          placeholder="Mileage"
          className="w-full border p-4 rounded-xl"
        />

        <input
          placeholder="Country"
          className="w-full border p-4 rounded-xl"
        />

        <textarea
          rows={6}
          placeholder="Description"
          className="w-full border p-4 rounded-xl"
        />

        <div>
          <label>
            Vehicle Photos
          </label>

          <input
            type="file"
            multiple
            accept="image/*"
          />
        </div>

        <div>
          <label>
            Vehicle Videos
          </label>

          <input
            type="file"
            multiple
            accept="video/*"
          />
        </div>

        <button
          className="
          bg-green-600
          text-white
          px-8
          py-3
          rounded-xl
          "
        >
          Publish Vehicle
        </button>

      </form>

    </div>
  );
}
