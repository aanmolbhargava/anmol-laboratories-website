import { useState } from "react";

export default function CheckoutForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form  id="checkout-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="mt-8 rounded-3xl border bg-white p-8 shadow-sm"
    >
      <h2 className="mb-6 text-2xl font-bold">
        Delivery Details
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <input
          required
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="rounded-xl border p-4"
        />
<input
  required
  name="whatsapp"
  type="tel"
  pattern="[6-9][0-9]{9}"
  maxLength={10}
  placeholder="WhatsApp Number"
  value={form.whatsapp}
  onChange={handleChange}
  className="rounded-xl border p-4"
/>

        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="rounded-xl border p-4"
        />

        <input
          name="state"
          placeholder="State"
          value={form.state}
          onChange={handleChange}
          className="rounded-xl border p-4"
        />

       <input
  required
  name="pincode"
  type="text"
  pattern="[0-9]{6}"
  maxLength={6}
  placeholder="Pincode"
  value={form.pincode}
  onChange={handleChange}
  className="rounded-xl border p-4"
/>

      </div>

      <textarea
        rows="4"
        required
        name="address"
        placeholder="Complete Address"
        value={form.address}
        onChange={handleChange}
        className="mt-5 w-full rounded-xl border p-4"
      />

      <textarea
        rows="3"
        name="notes"
        placeholder="Order Notes (Optional)"
        value={form.notes}
        onChange={handleChange}
        className="mt-5 w-full rounded-xl border p-4"
      />

      <button
        className="mt-8 w-full rounded-xl bg-green-700 py-4 font-semibold text-white hover:bg-green-800"
      >
        Confirm Order on WhatsApp
      </button>

      <div className="mt-6 rounded-2xl bg-green-50 p-5">

  <h3 className="font-bold text-green-800">

    Payment Process

  </h3>

  <p className="mt-2 text-sm leading-6 text-green-700">

    Once we receive your order, our team will contact you on WhatsApp,
    confirm product availability, share our payment QR code or bank details,
    and arrange dispatch after payment confirmation.

  </p>

</div>
    </form>
  );
}