import React from 'react';

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>

        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-2 text-sm font-medium">Username/Email</label>
            <input type="text" id="username" name="username" className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-medium">Password</label>
            <input type="password" id="password" name="password" className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>

          <button type="submit" className="inline-flex items-center px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Masuk
          </button>
        </form>

        <a href="#" className="block mt-4 text-sm text-center text-gray-500 hover:underline">
          Lupa Password?
        </a>

        <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
          <p>Atau masuk dengan menggunakan</p>
          <div className="flex space-x-2">
            <a href="#" className="inline-flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <i className="text-red-500 fab fa-google"></i> Google
            </a>
            <a href="#" className="inline-flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <i className="text-blue-700 fab fa-facebook"></i> Facebook
            </a>
          </div>
        </div>

        <p className="mt-4 text-sm text-center text-gray-500">
          Belum memiliki akun? <a href="#" className="text-blue-600 hover:underline">Daftar</a>
        </p>
      </div>
    </div>
  );
}

export default Login;