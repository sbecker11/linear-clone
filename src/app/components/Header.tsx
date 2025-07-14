import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-black">
                  <path d="M8 0L16 8L8 16L0 8L8 0Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-xl font-semibold text-white">Linear</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Product
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Resources
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Customers
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800/50">
              Log in
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100 font-medium">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
