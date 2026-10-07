"use client";

import Link from "next/link";
import { House } from "lucide-react";
import { Car } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";

export default function MobileNav() {
  return (
    <div
      className="
      md:hidden
      fixed
      bottom-0
      left-0
      right-0
      bg-white
      border-t
      z-50
      "
    >
      <div className="grid grid-cols-4">

        /
          <House size={22} />
        </Link>

        /cars
          <Car size={22} />
        </Link>

        /orders
          <ShoppingCart size={22} />
        </Link>

        /account
          <User size={22} />
        </Link>

      </div>
    </div>
  );
}
