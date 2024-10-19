import { Link } from "react-router-dom";
import feature from "../../assets/Feature.png";
import feature1 from "../../assets/Feature.png";
import feature2 from "../../assets/Feature.png";
import feature3 from "../../assets/Feature.png";

const Dashboard = () => {
  const cardData = [
    { title: "Total Loans", image: feature, value: "₦15,000,000" },
    { title: "Students", image: feature1, value: "12,500" },
    { title: "Schools", image: feature2, value: "120" },
    { title: "Projects", image: feature3, value: "78" },
  ];

  const tableData = [
    {
      date: "2024-10-16",
      school: "Greenfield Academy",
      wallet: "NGN-WL0001",
      amount: "₦500,000",
      recipient: "John Doe",
      status: "Approved",
    },
    {
      date: "2024-10-15",
      school: "Oceanic High",
      wallet: "NGN-WL0002",
      amount: "₦750,000",
      recipient: "Jane Smith",
      status: "Pending",
    },
    {
      date: "2024-10-14",
      school: "Sunrise College",
      wallet: "NGN-WL0003",
      amount: "₦1,200,000",
      recipient: "Michael Obi",
      status: "Declined",
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-left">Dashboard</h1>
        <Link to={"/profile"}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add School
          </button>
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img src={card.image} className="text-4xl" />
            <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
            <p className="mt-2 text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold">
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">School</th>
              <th className="px-4 py-2">Wallet</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Recipient</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">{row.school}</td>
                <td className="px-4 py-2">{row.wallet}</td>
                <td className="px-4 py-2">{row.amount}</td>
                <td className="px-4 py-2">{row.recipient}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-lg ${
                      row.status === "Approved"
                        ? "bg-green-200 text-green-800"
                        : row.status === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
