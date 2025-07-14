import { ArrowRight } from "lucide-react";

export default function Collaboration() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            Workflows and integrations
          </span>
        </div>
        
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
          Collaborate across tools and teams
        </h2>
        
        <p className="text-lg text-gray-400 mb-16 max-w-3xl">
          Expand the capabilities of the Linear system with a wide variety of integrations 
          that keep everyone in your organization aligned and focused.
        </p>

        {/* Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:border-gray-700 transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Customer Requests</h3>
            <p className="text-gray-400 mb-4">Build what customers actually want</p>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:border-gray-700 transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-lg bg-green-600 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Linear Mobile</h3>
            <p className="text-gray-400 mb-4">Move product work forward from anywhere</p>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:border-gray-700 transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-lg bg-purple-600 flex items-center justify-center">
                <span className="text-2xl">❓</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Linear Asks</h3>
            <p className="text-gray-400 mb-4">Turn workplace requests into actionable issues</p>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:border-gray-700 transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-lg bg-gray-700 flex items-center justify-center">
                <span className="text-2xl">🔗</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Linear integrations</h3>
            <p className="text-gray-400 mb-4">100+ ways to enhance your Linear experience</p>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:border-gray-700 transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                F
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Figma integration</h3>
            <p className="text-gray-400 mb-4">Bridge the gap between engineering and design</p>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:border-gray-700 transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center text-white">
                <span className="text-2xl">🛠️</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Built for developers</h3>
            <p className="text-gray-400 mb-4">Build your own add-ons with the Linear API</p>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
          </div>
        </div>

        {/* Integration Showcase */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
                  <span className="text-white font-bold">I</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Intercom</div>
                  <div className="text-xs text-gray-500">Connected via Zapier</div>
                </div>
              </div>
              
              <div className="text-sm text-gray-400 mb-4">We need a cost breakdown across...</div>
              
              <div className="flex items-center gap-2 text-xs">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">A</div>
                <span className="text-gray-400">ACME</span>
                <span className="text-gray-500">New request</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="mt-8 lg:mt-0">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Multi-cloud cost dashboard
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                  <span className="text-gray-400">Planning</span>
                  <span className="text-white">Q4 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
