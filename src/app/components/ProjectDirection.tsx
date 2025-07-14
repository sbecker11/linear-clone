export default function ProjectDirection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                Project and long-term planning
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
              Set the product direction
            </h2>
            
            <p className="text-lg text-gray-400 mb-8">
              Align your team around a unified product timeline. Plan, manage, and track all 
              product initiatives with Linear's visual planning tools.
            </p>

            {/* Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Manage projects end-to-end
                </h3>
                <p className="text-gray-400">
                  Consolidate specs, milestones, tasks, and other documentation in one centralized location.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Project updates
                </h3>
                <p className="text-gray-400">
                  Communicate progress and project health with built-in project updates.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Ideate and specify what to build next
                </h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Initiatives</div>
                      <div className="text-xs text-gray-400">Coordinate strategic product efforts</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                      <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Cross-team projects</div>
                      <div className="text-xs text-gray-400">Collaborate across teams</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Milestones</div>
                      <div className="text-xs text-gray-400">Break projects down into phases</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Progress insights</div>
                      <div className="text-xs text-gray-400">Track scope and velocity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Timeline Visualization */}
          <div className="order-1 mb-12 lg:order-2 lg:mb-0">
            <div className="relative">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
                {/* Project Overview */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Project Overview</h3>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Exploration</span>
                      <span className="text-sm text-white">User interviews</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Design Review</span>
                      <span className="text-sm text-white">100% done</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-4 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Internal Alpha</span>
                      <span className="text-sm text-white">100% done</span>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>30</span>
                    <span>AUG 3</span>
                    <span>10</span>
                    <span>17</span>
                    <span>24</span>
                    <span>AUG 22</span>
                    <span>SEP</span>
                  </div>
                  
                  <div className="relative h-12 bg-gray-800 rounded-lg">
                    <div className="absolute left-4 top-2 h-8 bg-green-500 rounded w-20"></div>
                    <div className="absolute left-28 top-2 h-8 bg-blue-500 rounded w-16"></div>
                    <div className="absolute right-4 top-2 h-8 bg-orange-500 rounded w-12"></div>
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
