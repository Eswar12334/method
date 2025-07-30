import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded shadow p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input id="email" type="email" className="w-full rounded border-gray-300" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
            <input id="password" type="password" className="w-full rounded border-gray-300" required />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-primary-dark transition">Login</button>
        </form>
        <p className="text-sm text-center mt-4">Don't have an account? <Link to="/signup" className="text-primary font-medium">Sign up</Link></p>
      </div>
    </div>
  );
}