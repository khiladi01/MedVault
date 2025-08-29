import Link from "next/link";

export default function LoginPage(){
    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-[#0A3D62] to-black select-none">
  <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-8 text-white">
    
    {/* Header */}
    <h2 className="text-3xl font-bold text-center mb-6">
      Sign In to <span className="text-cyan-400">MedVault</span>
    </h2>

    {/* Form */}
    <form className="space-y-5">

      {/* Email */}
      <div>
        <label className="text-sm font-medium">Email</label>
        <div className="flex items-center bg-white/10 rounded-lg mt-2 px-4 py-2">
          <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0H6m2 0h8m0 0h2M4 6h16M4 18h16" />
          </svg>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full bg-transparent outline-none text-white placeholder-gray-300"
          />
        </div>
      </div>

     {/* Password */}
      <div>
        <label className="text-sm font-medium">Password</label>
        <div className="flex items-center bg-white/10 rounded-lg mt-2 px-4 py-2">
          <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15l-3.5-3.5M12 15l3.5-3.5M12 15V9m0 0V9m0 0h-2m2 0h2" />
          </svg>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-transparent outline-none text-white placeholder-gray-300"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="col-span-2">
        <button className="w-full bg-[#0A3D62] text-white py-3 rounded-lg font-semibold hover:bg-[#052941] transition-all ease-in-out duration-200">
          Sign In
        </button>
      </div>

      <p className="text-center text-sm text-gray-300 mt-4">
        Don’t have an account? <a href="/auth/registration" className="text-cyan-400 hover:underline">Sign Up</a>
      </p>
    </form>
  </div>
</div>

{/* styling space */}
      <div className="h-[1px] w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-red-500"></div>

        </>
    );
}