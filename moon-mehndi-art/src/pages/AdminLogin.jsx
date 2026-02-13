import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      localStorage.setItem("adminToken", data.token);
      navigate("/admin");

    } catch (err) {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-[#1a1a25] p-10 rounded-xl w-full max-w-md"
      >
        <h2 className="text-3xl text-[#d4af37] mb-6 text-center">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-black border border-gray-700 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-black border border-gray-700 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-3 bg-[#d4af37] text-black font-semibold rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
