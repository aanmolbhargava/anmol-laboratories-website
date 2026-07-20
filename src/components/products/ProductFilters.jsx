const groups = [
  "All",
  "Pain Relief",
  "Women's Wellness",
  "Respiratory Care",
  "Kidney Care",
  "Beauty & Wellness",
];

const forms = [
  "All",
  "Tablet",
  "Capsule",
  "Syrup",
  "Oil",
];

export default function ProductFilters({
  selectedGroup,
  setSelectedGroup,
  selectedForm,
  setSelectedForm,
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <div>

        <h3 className="mb-4 text-lg font-bold">
          Health Concern
        </h3>

        <div className="flex flex-wrap gap-2">

          {groups.map((group) => (

            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                selectedGroup === group
                  ? "bg-green-700 text-white"
                  : "bg-green-50 hover:bg-green-100"
              }`}
            >
              {group}
            </button>

          ))}

        </div>

      </div>

      <div className="mt-8">

        <h3 className="mb-4 text-lg font-bold">
          Dosage Form
        </h3>

        <div className="flex flex-wrap gap-2">

          {forms.map((form) => (

            <button
              key={form}
              onClick={() => setSelectedForm(form)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                selectedForm === form
                  ? "bg-green-700 text-white"
                  : "bg-green-50 hover:bg-green-100"
              }`}
            >
              {form}
            </button>

          ))}

        </div>

      </div>

    </div>
  );
}