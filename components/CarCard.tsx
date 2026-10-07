import { Car } from "@/types/car";
import Link from "next/link";

interface Props {
  car: Car;
}

export default function CarCard({
  car,
}: Props) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-md
      hover:shadow-xl
      transition
      "
    >
      {car.image}

      <div className="p-5">

        <h3 className="font-bold text-xl">
          {car.title}
        </h3>

        <p className="text-blue-600 font-bold text-2xl mt-2">
          ${car.price.toLocaleString()}
        </p>

        <div className="mt-3 text-gray-500">
          <p>{car.country}</p>
          <p>{car.year}</p>
          <p>{car.mileage.toLocaleString()} km</p>
        </div>

        {`/cars/${car.id}`}
          Buy Now
        </Link>

      </div>
    </div>
  );
}
