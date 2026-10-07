export default function AdminDashboard() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Total Cars</h3>
          <p className="text-4xl font-bold mt-2">
            245
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Total Orders</h3>
          <p className="text-4xl font-bold mt-2">
            83
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Total Users</h3>
          <p className="text-4xl font-bold mt-2">
            1240
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Revenue</h3>
          <p className="text-4xl font-bold mt-2">
            $1.2M
          </p>
        </div>

      </div>

    </div>
  );
}
