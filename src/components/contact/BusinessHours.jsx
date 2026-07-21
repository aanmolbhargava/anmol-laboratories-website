import { HiOutlineClock } from "react-icons/hi";

export default function BusinessHours() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl rounded-[32px] bg-green-700 px-10 py-14 text-center text-white shadow-2xl">
        <HiOutlineClock size={56} className="mx-auto" />

        <h2 className="mt-8 text-4xl font-black">Business Hours</h2>

        <div className="mt-10 space-y-4 text-xl">
          <p>Monday – Saturday</p>

          <p className="font-bold">9:00 AM – 5:30 PM</p>

          <p>Sunday — Closed</p>
        </div>
      </div>
    </section>
  );
}
