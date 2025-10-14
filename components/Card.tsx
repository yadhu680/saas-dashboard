interface CardProps {
  title: string;
  value: string | number;
}

export default function Card({ title, value }: CardProps) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}
