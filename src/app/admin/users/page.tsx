export default function UsersPage() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Users
      </h1>

      <div className="bg-white rounded-2xl shadow p-6">

        <table className="w-full">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>USER</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
