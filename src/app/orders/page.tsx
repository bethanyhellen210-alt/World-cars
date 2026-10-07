export default function OrdersPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        My Orders
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow">

        <h2 className="font-bold">
          BMW X5
        </h2>

        <p>
          Status:
          <span className="text-green-600 ml-2">
            Processing
          </span>
        </p>

      </div>

    </main>
  );
}
