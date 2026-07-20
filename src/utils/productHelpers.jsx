export const groupColors = {
  "Pain Relief": "bg-orange-100 text-orange-700",
  "Women's Wellness": "bg-pink-100 text-pink-700",
  "Respiratory Care": "bg-cyan-100 text-cyan-700",
  "Kidney Care": "bg-blue-100 text-blue-700",
  "Beauty & Wellness": "bg-purple-100 text-purple-700",
};

export function getGroupColor(group) {
  return (
    groupColors[group] ||
    "bg-green-100 text-green-700"
  );
}