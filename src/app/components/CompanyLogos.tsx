'use client';

import Image from 'next/image';

export default function CompanyLogos() {
  const companies = [
    { 
      name: "Cursor", 
      logo: "https://ext.same-assets.com/2961363719/831278686.svg",
      fallback: "Cursor"
    },
    { 
      name: "Brex", 
      logo: "https://ext.same-assets.com/2961363719/2422319831.svg",
      fallback: "Brex"
    },
    { 
      name: "Remote", 
      logo: "https://ext.same-assets.com/2961363719/3591619035.svg",
      fallback: "Remote"
    },
    { 
      name: "ARC", 
      logo: "https://ext.same-assets.com/2961363719/3622852690.svg",
      fallback: "ARC"
    },
    { 
      name: "Runway", 
      logo: "https://ext.same-assets.com/2961363719/3603321410.svg",
      fallback: "Runway"
    },
    { 
      name: "Descript", 
      logo: "https://ext.same-assets.com/2961363719/2579258245.svg",
      fallback: "Descript"
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-400 mb-8">
            Powering the world&apos;s best product teams.
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
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={80}
                height={32}
                className="h-8 w-auto filter brightness-0 invert"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.currentTarget.style.display = 'none';
                  const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div 
                className="h-8 w-20 bg-gray-700/50 rounded hidden items-center justify-center border border-gray-600"
                style={{ display: 'none' }}
              >
                <span className="text-xs text-gray-300 font-medium">{company.fallback}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

