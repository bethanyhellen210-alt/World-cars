export default function Brands() {
  const brands = [
    "BMW",
    "Mercedes",
    "Toyota",
    "Audi",
    "Tesla",
    "Porsche",
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Popular Brands
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {brands.map((brand) => (
          <div
            key={brand}
            className="
            bg-white
            px-6
            py-4
            rounded-xl
            shadow
            "
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
