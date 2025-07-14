import { ArrowRight } from "lucide-react";

export default function ModernTeams() {
  const features = [
    {
      title: "Purpose-built for product development",
      description: "Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.",
      icon: "📋"
    },
    {
      title: "Designed to move fast", 
      description: "Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team.",
      icon: "⚡"
    },
    {
      title: "Crafted to perfection",
      description: "Every pixel, interaction, and feature has been carefully considered to create the best possible experience for product teams.",
      icon: "✨"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Made for modern product teams
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Linear is shaped by the practices and principles that distinguish world-class 
            product teams from the rest: relentless focus, fast execution, 
            and a commitment to the quality of craft.{" "}
            <a href="#" className="text-white hover:text-gray-300 inline-flex items-center font-medium">
              Make the switch
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-8 transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/70">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-teal-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
