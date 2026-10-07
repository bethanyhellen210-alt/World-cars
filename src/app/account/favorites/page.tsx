export default function FavoritesPage() {
  return (
    <main className="max-w-7xl mx-auto py-10 px-4">

      <h1 className="text-4xl font-bold mb-8">
        Favorite Vehicles
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          BMW X5
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          Toyota Prado
        </div>

      </div>

    </main>
  );
}
