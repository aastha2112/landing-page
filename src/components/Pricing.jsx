const Pricing = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#0E0E37] text-white px-8 py-16">
    <div className="w-full max-w-5xl">
      <h2 className="text-center text-4xl font-bold mb-10">Pricing Plans</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse w-full text-left shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#1A1A50] text-white text-lg">
              <th className="p-6 w-1/2">Plan</th>
              <th className="p-6 w-1/2">Price</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Basic", price: "$9.99" },
              { name: "Premium", price: "$19.99" },
              { name: "Enterprise", price: "$49.99" },
            ].map((plan, index) => (
              <tr
                key={index}
                className="border-b border-gray-600 hover:bg-[#1E1E5A] transition"
              >
                <td className="p-6 text-lg">{plan.name}</td>
                <td className="p-6 text-lg">{plan.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
        {["Basic", "Premium", "Enterprise"].map((plan, index) => (
          <button
            key={index}
            className="bg-blue-600 hover:bg-blue-500 transition text-white px-6 py-3 rounded-lg text-lg font-semibold w-full md:w-1/4"
          >
            Subscribe to {plan}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Pricing;
