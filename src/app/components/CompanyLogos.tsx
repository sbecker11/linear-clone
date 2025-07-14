export default function CompanyLogos() {
  const companies = [
    "Cursor", "Brex", "Remote", "ARC", "Runway", "Descript"
  ];

  const additionalCompanies = [
    "Linear", "Vercel", "Stripe", "GitHub", "Discord", "Notion"
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-400 mb-8">
            Powering the world's best product teams.
          </p>
          <p className="text-sm text-gray-500 mb-12">
            From next-gen startups to established enterprises.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              <div className="h-8 w-20 bg-gray-700/50 rounded flex items-center justify-center border border-gray-600">
                <span className="text-xs text-gray-300 font-medium">{company}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional company logos row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {additionalCompanies.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              <div className="h-8 w-20 bg-gray-700/50 rounded flex items-center justify-center border border-gray-600">
                <span className="text-xs text-gray-300 font-medium">{company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
