import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

export default function CarsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          All Vehicles
        </h1>

        <p className="text-gray-500 mt-2">
          Browse available vehicles worldwide
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
          />
        ))}
      </div>

    </main>
  );
}
