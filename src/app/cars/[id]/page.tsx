import Link from "next/link";
import { cars } from "@/data/cars";

interface Props {
  params: {
    id: string;
  };
}

export default function CarDetails({
  params,
}: Props) {
  const car = cars.find(
    (item) => item.id === params.id
  );

  if (!car) {
    return (
      <div className="p-10">
        Vehicle not found
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">

      <div className="grid lg:grid-cols-2 gap-10">

        <div>
          {car.image}
        </div>

        <div>

          <h1 className="text-5xl font-bold">
            {car.title}
          </h1>

          <p className="text-blue-600 text-4xl font-bold mt-4">
            $
            {car.price.toLocaleString()}
          </p>

          <div className="mt-6 space-y-2">

            <p>
              Country: {car.country}
            </p>

            <p>
              Year: {car.year}
            </p>

            <p>
              Mileage:
              {" "}
              {car.mileage.toLocaleString()}
              km
            </p>

          </div>

          <div className="mt-10 flex gap-4">

            /checkout
              Buy Now
            </Link>

            <button
              className="
              border
              px-8
              py-4
              rounded-xl
              "
            >
              Save Vehicle
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}
