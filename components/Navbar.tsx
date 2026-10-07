import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">

        /
          AutoWorld
        </Link>

        <nav className="hidden md:flex gap-6">
          /Home</Link>
          /carsCars</Link>
          /aboutAbout</Link>
          /contactContact</Link>
        </nav>

        <div className="flex gap-2">
          /login
            Login
          </Link>

          /register
            Register
          </Link>
        </div>

      </div>
    </header>
  );
}
