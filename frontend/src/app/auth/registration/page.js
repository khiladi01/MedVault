export default function RegistartionPage(){
    return(
        <>
          <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 select-none">
  <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-3xl bg-white shadow-lg rounded-2xl p-6 sm:p-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0A3D62] mb-6">
      Create Your MedVault Account
    </h2>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Personal Information */}
      <div className="col-span-2">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">Personal Information</h3>
      </div>

      <input type="text" placeholder="Full Name *" className="border p-3 rounded-lg w-full" required />
      <input type="text" placeholder="Age *" className="border p-3 rounded-lg w-full" required />
      <input type="text" placeholder="Gender *" className="border p-3 rounded-lg w-full" required />
      <input type="text" placeholder="Phone *" className="border p-3 rounded-lg w-full" required />
      <input type="email" placeholder="Email *" className="border p-3 rounded-lg w-full" required />
      <input type="text" placeholder="Address *" className="border p-3 rounded-lg w-full" required />
      <input type="text" placeholder="City *" className="border p-3 rounded-lg w-full" required />
      <input type="text" placeholder="Postal Code *" className="border p-3 rounded-lg w-full" required />
      <input type="password" placeholder="Password *" className="border p-3 rounded-lg w-full" required />

      {/* Medical Information */}
      <div className="col-span-2">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">Medical Information</h3>
      </div>

      <input type="text" placeholder="Blood Group *" className="border p-3 rounded-lg w-full" required />
      <input type="text" placeholder="Weight *" className="border p-3 rounded-lg w-full" required />
      <input type="file" className="border p-3 rounded-lg w-full" />
      <input type="text" placeholder="Allergies" className="border p-3 rounded-lg w-full" />
      <input type="text" placeholder="Medical History" className="border p-3 rounded-lg w-full" />
      <input type="text" placeholder="Medications" className="border p-3 rounded-lg w-full" />
      <input type="text" placeholder="Surgeries" className="border p-3 rounded-lg w-full" />
      <input type="text" placeholder="Family History" className="border p-3 rounded-lg w-full" />
      <input type="text" placeholder="Lifestyle" className="border p-3 rounded-lg w-full" />
      <input type="text" placeholder="ID Proof" className="border p-3 rounded-lg w-full" />

      {/* Emergency Contact */}
      <div className="col-span-2">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">Emergency Contact</h3>
      </div>

      <input type="text" placeholder="Emergency Contact Name *" className="border p-3 rounded-lg w-full" required />
      <input type="text" placeholder="Relationship *" className="border p-3 rounded-lg w-full" required />
      <input type="text" placeholder="Emergency Contact Phone *" className="border p-3 rounded-lg w-full" required />

      {/* Footer */}
      <div className="col-span-2 flex items-center space-x-2 mt-4">
        <input type="checkbox" id="terms" required className="w-4 h-4" />
        <label htmlFor="terms" className="text-sm text-gray-600">
          I agree to the Terms and Conditions *
        </label>
      </div>
      
      {/* Action */}
      <div className="col-span-2">
        <button className="w-full bg-[#0A3D62] text-white py-3 rounded-lg font-semibold hover:bg-[#052941] transition">
          Sign Up
        </button>
      </div>
      
      {/* Login */}
      <div className="col-span-2 text-center mt-3">
        <p className="text-sm text-gray-600">
          Already a user of MedVault?{" "}
          <a href="/auth/login" className="text-blue-600 font-medium hover:underline">Login</a>
        </p>
      </div>
    </form>
  </div>
</div>

{/* styling space */}
      <div className="h-[1px] w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-red-500"></div>{/* styling space */}
      <div className="h-[1px] w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-red-500"></div>


        </>
    );
}