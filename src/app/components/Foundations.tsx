import { Button } from "@/components/ui/button";

export default function Foundations() {
  return (
    <section className="py-16 lg:py-24 bg-gray-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400">
            <div className="h-2 w-2 rounded-full bg-gray-500"></div>
            Under the hood
          </span>
        </div>
        
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
          Built on strong foundations
        </h2>
        
        <p className="text-lg text-gray-400 mb-16 max-w-3xl">
          Linear is so simple to use, it's easy to overlook the wealth of complex technologies 
          packed under the hood that keep Linear robust, safe, and blazing fast.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Linear Sync Engine</h3>
            <p className="text-gray-400">
              Built with a high-performance architecture and an obsessive focus on speed.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Enterprise-ready security
              <span className="ml-2 text-blue-400">↗</span>
            </h3>
            <p className="text-gray-400">
              Best-in-class security practices keep your work safe and secure at every layer.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Engineered for scale</h3>
            <p className="text-gray-400">
              Built for teams of all sizes. From early-stage startups to global enterprises.
            </p>
          </div>
        </div>

        {/* Security Badges */}
        <div className="flex flex-wrap items-center gap-8 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center">
              <span className="text-xs font-bold text-white">SOC</span>
            </div>
            <span className="text-sm font-medium text-gray-400">SOC 2</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center">
              <span className="text-xs font-bold text-white">GDPR</span>
            </div>
            <span className="text-sm font-medium text-gray-400">GDPR</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
              <span className="text-xs font-bold text-white">HIPAA</span>
            </div>
            <span className="text-sm font-medium text-gray-400">HIPAA</span>
          </div>
        </div>

        {/* Architecture Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              {/* Server Architecture Mockup */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-white">Sync Engine</div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-500 rounded"></div>
                  </div>
                  <div className="h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-purple-500 rounded"></div>
                  </div>
                  <div className="h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded"></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-800">
                  <div className="text-xs text-gray-500 mb-2">Performance metrics</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Latency</span>
                    <span className="text-green-400">~5.1ms</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Uptime</span>
                    <span className="text-green-400">99.9%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Distributed realtime infrastructure
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Built for global teams with dedicated edge locations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Advanced syncing capabilities
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Optimistic updates with conflict resolution and offline support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Plan the present. Build the future.
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-700 text-white hover:bg-gray-800 font-medium"
            >
              Talk to sales
            </Button>
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-medium"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
