import Link from 'next/link';

export default function Register() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 bg-[#0F142D]">
      <div className="max-w-md w-full mx-4">
        <div className="gradient-border overflow-hidden">
          <div className="p-8 bg-[#141f3c]">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2 text-white">Create Account</h1>
              <p className="text-gray-400">Start betting in minutes</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-[#0F142D] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#70FFEB]/50 focus:border-[#70FFEB] outline-none transition-all text-white placeholder-gray-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-[#0F142D] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#70FFEB]/50 focus:border-[#70FFEB] outline-none transition-all text-white placeholder-gray-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-[#0F142D] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#70FFEB]/50 focus:border-[#70FFEB] outline-none transition-all text-white placeholder-gray-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-3 bg-[#0F142D] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#70FFEB]/50 focus:border-[#70FFEB] outline-none transition-all text-white placeholder-gray-500"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-4 py-3 bg-[#0F142D] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#70FFEB]/50 focus:border-[#70FFEB] outline-none transition-all text-white placeholder-gray-500"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="flex items-start">
                  <input type="checkbox" className="w-4 h-4 rounded bg-[#0F142D] border-white/10 text-[#70FFEB] focus:ring-[#70FFEB] mt-1" />
                  <span className="ml-2 text-sm text-gray-400">
                    I agree to the{' '}
                    <Link href="/terms-conditions" className="text-[#70FFEB] hover:text-[#9FFFF4] transition-colors">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy-policy" className="text-[#70FFEB] hover:text-[#9FFFF4] transition-colors">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#70FFEB] hover:bg-[#9FFFF4] text-black py-3 rounded-lg font-semibold transition-all duration-300 btn-glow"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link href="/login" className="text-[#70FFEB] hover:text-[#9FFFF4] font-medium transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
