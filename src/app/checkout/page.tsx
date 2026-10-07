"use client";

export default function CheckoutPage() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">
        Delivery Information
      </h1>

      <form className="bg-white rounded-2xl shadow p-6 space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-xl p-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-xl p-4"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="Street Address"
          className="w-full border rounded-xl p-4"
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="City"
            className="border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="State / Region"
            className="border rounded-xl p-4"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="ZIP / Postal Code"
            className="border rounded-xl p-4"
          />

          <select className="border rounded-xl p-4">
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Kenya</option>
            <option>Japan</option>
            <option>Germany</option>
          </select>
        </div>

        <button
          className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-4
          px-8
          rounded-xl
          "
        >
          Continue To Payment
        </button>

      </form>
    </main>
  );
}
