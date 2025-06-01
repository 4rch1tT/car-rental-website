import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Sign up successful!");
      console.log("User Data:", formData);
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-100 mx-auto p-6 bg-white shadow-xl rounded-xl">
        <h2 className="text-2xl text-gray font-semibold mb-4">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              className="w-full border text-midnight rounded-3xl px-3 py-2"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="text-red text-sm">{errors.fullName}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border text-midnight rounded-3xl px-3 py-2"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border text-midnight rounded-3xl px-3 py-2"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red text-sm">{errors.password}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full border text-midnight rounded-3xl px-3 py-2"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full rounded-3xl mt-2"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
