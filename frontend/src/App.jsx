import { useState } from "react";
import axios from "axios";

function App() {

  const [isLogin, setIsLogin] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const url = isLogin
        ? "http://localhost:5000/login"
        : "http://localhost:5000/register";

      const response = await axios.post(url, formData);

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        password: ""
      });

    } catch (error) {

      alert(error.response.data.message);

    }

  };

  return (

    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">

          {isLogin ? "Login" : "Register"}

        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col">

          {!isLogin && (

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 mb-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

          )}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 mb-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-3 mb-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition duration-300"
          >
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-center text-blue-600 mt-5 cursor-pointer hover:underline"
        >

          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}

        </p>

      </div>

    </div>

  );

}

export default App;