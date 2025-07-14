export default function AISection() {
  const agents = [
    { name: "Sentry", type: "App", color: "bg-purple-500" },
    { name: "Devin", type: "App", color: "bg-blue-500" },
    { name: "ChatPRD", type: "App", color: "bg-pink-500" },
    { name: "Leela", type: "", color: "bg-green-500" },
    { name: "Charlie", type: "App", color: "bg-yellow-500" },
    { name: "Conor", type: "", color: "bg-red-500" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400">
                <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                Artificial intelligence
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
              AI that works where you work
            </h2>
            
            <p className="text-lg text-gray-400 mb-8">
              Linear for Agents. Choose from a variety of AI agents and start delegating work, 
              from code generation to other technical tasks.
            </p>

            {/* Agent Assignment Interface */}
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 mb-8">
              <div className="mb-4">
                <label className="text-sm text-gray-400 mb-2 block">Assign to...</label>
                <div className="space-y-2">
                  {agents.map((agent, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <div className={`w-8 h-8 rounded-full ${agent.color} flex items-center justify-center`}>
                        <span className="text-xs font-bold text-white">{agent.name[0]}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{agent.name}</div>
                        {agent.type && (
                          <div className="text-xs text-gray-500">{agent.type}</div>
                        )}
                      </div>
                      {index === 0 && (
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Linear MCP
                </h3>
                <p className="text-gray-400">
                  Connect Linear to your favorite tools including Cursor, Claude, ChatGPT, and more.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  AI natively built in
                </h3>
                <p className="text-gray-400">
                  Linear uses the latest language models to power workflows from semantic search 
                  to summarizing your team's project updates.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - AI Dashboard */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
                {/* Daily Pulse */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Daily pulse for April 16</h3>
                  <div className="text-sm text-gray-400 mb-4">Initiatives</div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <div className="text-sm font-medium text-white">Reliability improvements</div>
                        <div className="text-xs text-gray-400">4 dev, 1h task, 1d estimate</div>
                        <div className="text-xs text-gray-500 mt-1">
                          • SLOs have been defined for all services and products<br/>
                          • Implementation sprints are under way<br/>
                          • We're at risk of missing our internal target date
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-800 pt-4">
                      <div className="text-xs text-gray-500">Projects</div>
                      <div className="text-sm text-white mt-1">
                        ✓ Beauty Asset Display → Dev Ready
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ask anything input */}
                <div className="border-t border-gray-800 pt-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Ask anything"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600"
                    />
                    <div className="absolute right-3 top-2.5 flex gap-1">
                      <div className="w-5 h-5 bg-gray-600 rounded text-xs flex items-center justify-center text-gray-300">@</div>
                      <div className="w-5 h-5 bg-gray-600 rounded text-xs flex items-center justify-center text-gray-300">/</div>
                      <div className="w-5 h-5 bg-gray-600 rounded text-xs flex items-center justify-center text-gray-300">#</div>
                    </div>
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
