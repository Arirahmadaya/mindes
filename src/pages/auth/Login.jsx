import React from 'react';

function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm font-medium mb-2">Username/Email</label>
            <input type="text" id="username" name="username" className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium mb-2">Password</label>
            <input type="password" id="password" name="password" className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>

          <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Masuk
          </button>
        </form>

        <a href="#" className="text-center block mt-4 text-sm text-gray-500 hover:underline">
          Lupa Password?
        </a>

        <div className="flex mt-6 items-center justify-between text-sm text-gray-500">
          <p>Atau masuk dengan menggunakan</p>
          <div className="flex space-x-2">
            <a href="#" className="inline-flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <i className="fab fa-google text-red-500"></i> Google
            </a>
            <a href="#" className="inline-flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <i className="fab fa-facebook text-blue-700"></i> Facebook
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Belum memiliki akun? <a href="#" className="text-blue-600 hover:underline">Daftar</a>
        </p>
      </div>
    </div>
  );
}

export default Login;