import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Left Content */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Linear is a purpose-built tool for{" "}
              <span className="text-gradient">
                planning and building products
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-400 sm:text-xl lg:text-lg xl:text-xl">
              Meet the system for modern software development. 
              Streamline issues, projects, and product roadmaps.
            </p>

            <div className="mt-10 flex items-center gap-x-6">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-3 text-base"
              >
                Start building
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-white hover:bg-gray-800/50 font-medium px-6 py-3 text-base group"
              >
                Introducing Linear for Agents
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Content - Product Preview */}
          <div className="relative mx-auto mt-16 max-w-lg lg:col-span-5 lg:mx-0 lg:mt-0 lg:max-w-none xl:col-span-6">
            <div className="relative">
              {/* Background gradient effect */}
              <div className="absolute -top-4 -bottom-4 -left-4 -right-4 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-teal-500/20 blur-3xl"></div>
              
              {/* Product interface mockup */}
              <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-4 w-32 rounded bg-gray-700 mb-2"></div>
                  <div className="h-2 w-24 rounded bg-gray-800"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <div className="h-3 w-40 rounded bg-gray-700"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <div className="h-3 w-32 rounded bg-gray-700"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    <div className="h-3 w-36 rounded bg-gray-700"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <div className="h-3 w-28 rounded bg-gray-700"></div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="h-3 w-48 rounded bg-gray-700 mb-3"></div>
                  <div className="h-2 w-full rounded bg-gray-800 mb-2"></div>
                  <div className="h-2 w-3/4 rounded bg-gray-800"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
