export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Company Image */}
        <img
          src="/images/company.jpg"
          alt="Company"
          className="
            rounded-2xl
            shadow-2xl
            hover:scale-105
            transition-all
            duration-300
          "
        />

        {/* Content */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2b4d]">
            关于 CET
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-9">
            CET 是一家专注于欧洲精品贸易与工业供应链服务的国际贸易公司。
            我们长期与捷克、德国、法国、意大利等欧洲企业合作，
            为亚洲客户提供高品质产品与稳定供应链，
            致力于成为连接欧洲与亚洲市场的重要贸易桥梁。
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-8 mt-12">

            <div>
              <h3 className="text-5xl font-bold text-yellow-500">
                15+
              </h3>
              <p className="mt-2 text-gray-600">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-yellow-500">
                120+
              </h3>
              <p className="mt-2 text-gray-600">
                Global Clients
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-yellow-500">
                30+
              </h3>
              <p className="mt-2 text-gray-600">
                European Partners
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-yellow-500">
                20+
              </h3>
              <p className="mt-2 text-gray-600">
                Countries Served
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}