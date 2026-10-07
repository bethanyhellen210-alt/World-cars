export default function AccountPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-10">
        My Dashboard
      </h1>

      <div className="grid lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold">
            My Orders
          </h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold">
            Saved Cars
          </h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold">
            Delivery Addresses
          </h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold">
            Settings
          </h3>
        </div>

      </div>

    </main>
  );
}
