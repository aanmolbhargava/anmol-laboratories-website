import { useState } from "react";
import company from "../../data/company";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Anmol Laboratories,

Name: ${form.name}

Phone: ${form.phone}

Email: ${form.email}

Requirement:

${form.message}`;

    window.open(
      `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        required
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full rounded-2xl border p-4 outline-none focus:border-green-700"
      />

      <input
        required
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full rounded-2xl border p-4 outline-none focus:border-green-700"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-2xl border p-4 outline-none focus:border-green-700"
      />

      <textarea
        required
        rows="6"
        name="message"
        placeholder="Tell us about your requirement..."
        value={form.message}
        onChange={handleChange}
        className="w-full rounded-2xl border p-4 outline-none focus:border-green-700"
      />

      <button className="w-full rounded-2xl bg-green-700 py-4 text-lg font-bold text-white transition hover:bg-green-800">
        Send via WhatsApp
      </button>
    </form>
  );
}
