import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      <aside className="w-72 bg-slate-900 text-white p-6">

        <h1 className="text-3xl font-bold mb-10">
          AutoWorld
        </h1>

        <nav className="space-y-4">

          /admin
            Dashboard
          </Link>

          <br />

          /admin/cars
            Vehicles
          </Link>

          <br />

          /admin/orders
            Orders
          </Link>

          <br />

          /admin/users
            Users
          </Link>

          <br />

          /admin/settings
            Settings
          </Link>

        </nav>

      </aside>

      <main className="flex-1 bg-slate-100">
        {children}
      </main>

    </div>
  );
}
