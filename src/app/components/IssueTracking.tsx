export default function IssueTracking() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                Task tracking and sprint planning
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
              Issue tracking you'll enjoy using
            </h2>
            
            <p className="text-lg text-gray-400 mb-8">
              Optimized for speed and efficiency. Create tasks in seconds, discuss issues 
              in context, and breeze through your work in views tailored to you and your team.
            </p>

            {/* Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Build momentum with Cycles
                </h3>
                <p className="text-gray-400">
                  Create healthy routines and focus your team on what work should happen next.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Manage incoming work with Triage
                </h3>
                <p className="text-gray-400">
                  Review and assign incoming bug reports, feature requests, and other unplanned work.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Tailored workflows</div>
                    <div className="text-xs text-gray-400">Custom issue flows</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Custom views</div>
                    <div className="text-xs text-gray-400">List and board views</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Filters</div>
                    <div className="text-xs text-gray-400">Most relevant issues</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">SLAs</div>
                    <div className="text-xs text-gray-400">Time-sensitive tasks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Issue Interface */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
                {/* Issue List */}
                <div className="space-y-4">
                  {/* High Priority Issues */}
                  <div className="border border-orange-600/30 rounded-lg p-4 bg-orange-500/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm font-medium text-orange-400">High Priority</span>
                      <span className="text-xs text-gray-500">ENG-1025</span>
                    </div>
                    <div className="text-white font-medium">Improve keyboard shortcuts</div>
                    <div className="text-sm text-gray-400 mt-1">UI redesign</div>
                  </div>

                  {/* Regular Issues */}
                  <div className="border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">ENG-1026</span>
                    </div>
                    <div className="text-white font-medium">Update payment gateway integration</div>
                    <div className="text-sm text-gray-400 mt-1">P502 Required</div>
                  </div>

                  <div className="border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">ENG-1027</span>
                    </div>
                    <div className="text-white font-medium">Review API documentation and task flows</div>
                    <div className="text-sm text-gray-400 mt-1">Requires further investigation</div>
                  </div>
                </div>

                {/* Triage Actions */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="text-sm text-gray-400 mb-3">Users report unexpected rate limiting</div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-green-600 text-white text-xs rounded-md">Accept</button>
                    <button className="px-3 py-1 bg-gray-600 text-white text-xs rounded-md">Mark as duplicate</button>
                    <button className="px-3 py-1 bg-gray-600 text-white text-xs rounded-md">Decline</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
