const steps = ["Pending", "Confirmed", "Packed", "Shipped", "Delivered"];

export default function OrderTimeline({ status }) {
  const currentIndex = steps.indexOf(status);

  return (
    <div className="mt-8">
      <h3 className="font-bold mb-5">Order Progress</h3>

      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center flex-1">
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center font-bold
              ${
                index <= currentIndex
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {index <= currentIndex ? "✓" : index + 1}
            </div>

            <p
              className={`mt-3 text-sm font-semibold ${
                index <= currentIndex ? "text-green-700" : "text-gray-500"
              }`}
            >
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
