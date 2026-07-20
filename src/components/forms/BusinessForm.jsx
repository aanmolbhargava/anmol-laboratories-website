import { useState } from "react";

import company from "../../data/company";

import { createBusinessWhatsapp } from "../../utils/createBusinessWhatsapp";

export default function BusinessForm() {

  const [form, setForm] = useState({

    name: "",

    whatsapp: "",

    address: "",

    requirement: "",

  });

  const changeHandler = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  };

  const submitHandler = (e) => {

    e.preventDefault();

    if (!form.name || !form.whatsapp) {

      alert("Please fill required fields.");

      return;

    }

    window.open(

      createBusinessWhatsapp(company.whatsapp, form),

      "_blank"

    );

  };

  return (

    <form
      onSubmit={submitHandler}
      className="rounded-3xl bg-white p-10 shadow-xl"
    >

      <h2 className="mb-8 text-3xl font-bold">

        Request Manufacturing Quote

      </h2>

      <div className="space-y-6">

        <input
          required
          name="name"
          value={form.name}
          onChange={changeHandler}
          placeholder="Full Name *"
          className="w-full rounded-xl border p-4 outline-none focus:border-green-700"
        />

        <input
          required
          name="whatsapp"
          value={form.whatsapp}
          onChange={changeHandler}
          placeholder="WhatsApp Number *"
          className="w-full rounded-xl border p-4 outline-none focus:border-green-700"
        />

        <textarea
          rows={3}
          name="address"
          value={form.address}
          onChange={changeHandler}
          placeholder="Address"
          className="w-full rounded-xl border p-4 outline-none focus:border-green-700"
        />

        <textarea
          rows={5}
          name="requirement"
          value={form.requirement}
          onChange={changeHandler}
          placeholder="Requirement"
          className="w-full rounded-xl border p-4 outline-none focus:border-green-700"
        />

        <button
          className="w-full rounded-xl bg-green-700 py-4 font-semibold text-white transition hover:bg-green-800"
        >

          Send Enquiry

        </button>

      </div>

    </form>

  );

}