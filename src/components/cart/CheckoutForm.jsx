import { useState } from "react";
import { fetchPincode } from "../../utils/fetchPincode";

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

  const [loadingPin, setLoadingPin] = useState(false);

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "pincode") {
      if (value.length === 6) {
        setLoadingPin(true);

        const result = await fetchPincode(value);

        if (result) {
          setForm((prev) => ({
            ...prev,
            pincode: value,
            state: result.state,
            city: result.city,
          }));
        } else {
          setForm((prev) => ({
            ...prev,
            pincode: value,
            state: "",
            city: "",
          }));
        }

        setLoadingPin(false);
      } else {
        setForm((prev) => ({
          ...prev,
          pincode: value,
          state: "",
          city: "",
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      id="checkout-form"
      onSubmit={handleSubmit}
      className="mt-10 rounded-3xl border border-green-100 bg-white p-8 shadow-lg"
    >
      <h2 className="mb-8 text-3xl font-bold text-gray-900">
        Delivery Details
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name *"
          minLength={3}
          onInvalid={(e) =>
            e.target.setCustomValidity("Please enter your full name.")
          }
          onInput={(e) => e.target.setCustomValidity("")}
          className="rounded-xl border border-gray-300 p-4 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-200"
        />

        <input
          required
          type="tel"
          name="whatsapp"
          value={form.whatsapp}
          onChange={handleChange}
          placeholder="WhatsApp Number *"
          pattern="[6-9][0-9]{9}"
          maxLength={10}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              "Please enter a valid 10-digit WhatsApp number.",
            )
          }
          onInput={(e) => e.target.setCustomValidity("")}
          className="rounded-xl border border-gray-300 p-4 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-200"
        />

        <input
          required
          type="text"
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
          placeholder="Pincode *"
          pattern="[0-9]{6}"
          maxLength={6}
          onInvalid={(e) =>
            e.target.setCustomValidity("Please enter a valid 6-digit pincode.")
          }
          onInput={(e) => e.target.setCustomValidity("")}
          className="rounded-xl border border-gray-300 p-4 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-200"
        />

        <input
          readOnly
          value={loadingPin ? "Fetching..." : form.city}
          placeholder="City"
          className="rounded-xl border border-gray-300 bg-gray-100 p-4"
        />

        <input
          readOnly
          value={loadingPin ? "Fetching..." : form.state}
          placeholder="State"
          className="rounded-xl border border-gray-300 bg-gray-100 p-4"
        />
      </div>

      <textarea
        required
        rows="4"
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Complete Delivery Address *"
        onInvalid={(e) =>
          e.target.setCustomValidity(
            "Please enter your complete delivery address.",
          )
        }
        onInput={(e) => e.target.setCustomValidity("")}
        className="mt-5 w-full rounded-xl border border-gray-300 p-4 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-200"
      />

      <textarea
        rows="3"
        name="notes"
        value={form.notes}
        onChange={handleChange}
        placeholder="Order Notes (Optional)"
        className="mt-5 w-full rounded-xl border border-gray-300 p-4 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-200"
      />

      <button
        type="submit"
        className="mt-8 w-full rounded-xl bg-green-700 py-4 text-lg font-semibold text-white transition hover:bg-green-800"
      >
        Confirm Order on WhatsApp
      </button>

      <div className="mt-6 rounded-2xl bg-green-50 p-5">
        <h3 className="font-bold text-green-800">Payment Process</h3>

        <p className="mt-2 text-sm leading-7 text-green-700">
          Once we receive your order, our team will contact you on WhatsApp,
          confirm product availability, share our Payment QR / Bank Details, and
          dispatch your order after payment confirmation.
        </p>
      </div>
    </form>
  );
}
