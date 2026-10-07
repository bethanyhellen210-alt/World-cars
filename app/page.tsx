import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CarCard from "@/components/CarCard";
import Footer from "@/components/Footer";
import { cars } from "@/data/cars";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      <SearchBar />

      <section className="max-w-7xl mx-auto px-4 py-16">

        <h2 className="text-4xl font-bold mb-8">
          Featured Vehicles
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}
