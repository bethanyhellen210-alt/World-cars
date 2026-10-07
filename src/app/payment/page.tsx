export default function PaymentPage() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">

      <h1 className="text-4xl font-bold mb-8">
        Payment Method
      </h1>

      <div className="bg-white shadow rounded-2xl p-6">

        <div className="space-y-4">

          <label className="flex items-center gap-3">
            <input type="radio" name="payment" />
            Credit Card
          </label>

          <label className="flex items-center gap-3">
            <input type="radio" name="payment" />
            PayPal
          </label>

          <label className="flex items-center gap-3">
            <input type="radio" name="payment" />
            Bank Transfer
          </label>

        </div>

        <button
          className="
          mt-8
          bg-green-600
          text-white
          px-8
          py-4
          rounded-xl
          "
        >
          Complete Purchase
        </button>

      </div>

    </main>
  );
}
