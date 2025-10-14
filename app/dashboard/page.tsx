import Card from '../../components/Card';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Users" value="1,200" />
        <Card title="Active Subs" value="320" />
        <Card title="Monthly Revenue" value="$12,400" />
        <Card title="New Signups" value="56" />
      </div>
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
        <p className="text-gray-500">Charts and KPIs will appear here.</p>
      </div>
    </div>
  );
}
