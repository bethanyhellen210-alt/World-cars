import { PrismaClient }
from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.car.create({
    data: {
      title: "BMW X5",
      make: "BMW",
      model: "X5",
      year: 2022,
      mileage: 30000,
      country: "Germany",
      price: 65000,
      fuelType: "Diesel",
      transmission: "Automatic",
      description:
        "Excellent condition",
    },
  });

}

main();
