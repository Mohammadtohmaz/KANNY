import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 bg-[#0d1421]">
      <div className="max-w-md w-full mx-4">
        <div className="gradient-border overflow-hidden">
          <div className="p-8 bg-[#141f3c]">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2 text-white">Welcome Back</h1>
              <p className="text-gray-400">Sign in to your ArrowBets account</p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-[#0d1421] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#00d48a]/50 focus:border-[#00d48a] outline-none transition-all text-white placeholder-gray-500"
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
                  className="w-full px-4 py-3 bg-[#0d1421] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#00d48a]/50 focus:border-[#00d48a] outline-none transition-all text-white placeholder-gray-500"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 rounded bg-[#0d1421] border-white/10 text-[#00d48a] focus:ring-[#00d48a]" />
                  <span className="ml-2 text-sm text-gray-400">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#00d48a] hover:text-[#00ff9d] transition-colors">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00d48a] hover:bg-[#00ff9d] text-black py-3 rounded-lg font-semibold transition-all duration-300 btn-glow"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="text-[#00d48a] hover:text-[#00ff9d] font-medium transition-colors">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
