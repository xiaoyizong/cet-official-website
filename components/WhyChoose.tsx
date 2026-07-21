export default function WhyChoose() {
  const items = [
    {
      title: "欧洲原产地",
      text: "长期合作欧洲优质供应商，确保产品来源可靠。"
    },
    {
      title: "品质保证",
      text: "严格的质量控制流程，提供稳定可靠的产品。"
    },
    {
      title: "全球贸易",
      text: "服务亚洲、欧洲及全球客户，拥有丰富出口经验。"
    },
    {
      title: "长期合作",
      text: "坚持诚信经营，与客户建立长期稳定合作关系。"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0f2b4d]">
          为什么选择 CET
        </h2>

        <p className="text-center mt-4 text-gray-500">
          Why Choose CET
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {items.map((item, index) => (

            <div
              key={index}
              className="p-8 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="text-5xl mb-5">
                ⭐
              </div>

              <h3 className="text-xl font-bold text-[#0f2b4d]">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}