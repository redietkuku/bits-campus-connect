import React, { useState } from "react";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { useNavigate } from "react-router-dom";

const validateEmail = (email: string) => /.+@.+\..+/.test(email);
const validateBitsEmail = (email: string) => /.+@bitscollege\.edu\.et$/.test(email);

const LoginRegister: React.FC = () => {
  const [view, setView] = useState<"login" | "register" | "admin">("login");
  const [studentLogin, setStudentLogin] = useState({ email: "", password: "" });
  const [studentRegister, setStudentRegister] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [adminLogin, setAdminLogin] = useState({ name: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [adminError, setAdminError] = useState("");
  const navigate = useNavigate();

  // Validation and submit handlers
  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    if (!validateEmail(studentLogin.email)) {
      setLoginError("Please enter a valid email address.");
      return;
    }
    if (!studentLogin.password || studentLogin.password.length < 8) {
      setLoginError("Password must be at least 8 characters.");
      return;
    }
    // Accept only the provided credentials
    if (
      studentLogin.email === "rediet.atsede@bitscollege.edu.et" &&
      studentLogin.password === "password123"
    ) {
      navigate("/");
      return;
    } else {
      setLoginError("Invalid email or password.");
      return;
    }

    if (
      adminLogin.name === "admin" &&
      adminLogin.password === "admin123"
    ) {
      navigate("/");
      return;
    } else {
      setAdminError("Invalid name or password.");
    }
  };

  const handleStudentRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterError("");
    if (!studentRegister.name.trim()) {
      setRegisterError("Name is required.");
      return;
    }
    if (!validateBitsEmail(studentRegister.email)) {
      setRegisterError("Please enter a valid BITS College email (e.g. abebe.kebede@bitscollege.edu.et).");
      return;
    }
    if (!studentRegister.password || studentRegister.password.length < 8) {
      setRegisterError("Password must be at least 8 characters.");
      return;
    }
    if (studentRegister.password !== studentRegister.confirmPassword) {
      setRegisterError("Passwords do not match.");
      return;
    }
    alert("Student registration submitted");
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAdminError("");
    if (!adminLogin.name.trim()) {
      setAdminError("Name is required.");
      return;
    }
    if (!adminLogin.password || adminLogin.password.length < 6) {
      setAdminError("Password must be at least 6 characters.");
      return;
    }
    alert("Admin login submitted");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-background">
      <Card className="w-full max-w-md p-6 relative">
        {view === "admin" ? (
          <div>
            <button
              className="text-xs text-brand-primary hover:underline mb-4"
              onClick={() => setView("login")}
              type="button"
            >
              ← Back
            </button>
            <form onSubmit={handleAdminLogin} className="space-y-4 mt-2">
              <div>
                <Label htmlFor="admin-login-name">Name</Label>
                <Input id="admin-login-name" type="text" required value={adminLogin.name} onChange={e => setAdminLogin({ ...adminLogin, name: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="admin-login-password">Password</Label>
                <Input id="admin-login-password" type="password" required value={adminLogin.password} onChange={e => setAdminLogin({ ...adminLogin, password: e.target.value })} />
              </div>
              {adminError && <div className="text-red-500 text-xs text-center">{adminError}</div>}
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </div>
        ) : (
          <>
            {view === "login" && (
              <>
                <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
                <form onSubmit={handleStudentLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="student-login-email">BITS Email</Label>
                    <Input id="student-login-email" type="email" required value={studentLogin.email} onChange={e => setStudentLogin({ ...studentLogin, email: e.target.value })} placeholder="e.g. f20201234@pilani.bits-pilani.ac.in" />
                  </div>
                  <div>
                    <Label htmlFor="student-login-password">Password</Label>
                    <Input id="student-login-password" type="password" required value={studentLogin.password} onChange={e => setStudentLogin({ ...studentLogin, password: e.target.value })} />
                  </div>
                  {loginError && <div className="text-red-500 text-xs text-center">{loginError}</div>}
                  <Button type="submit" className="w-full">Login</Button>
                </form>
                <div className="mt-4 text-center">
                  <button
                    className="text-xs text-brand-primary hover:underline focus:outline-none"
                    onClick={() => { setView("register"); setLoginError(""); }}
                    type="button"
                  >
                    Don't have an account?
                  </button>
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    className="text-xs text-brand-primary hover:underline focus:outline-none"
                    onClick={() => { setView("admin"); setLoginError(""); }}
                    type="button"
                  >
                    Admin Login
                  </button>
                </div>
              </>
            )}
            {view === "register" && (
              <>
                <h2 className="text-xl font-semibold mb-4 text-center">Register</h2>
                <form onSubmit={handleStudentRegister} className="space-y-4">
                  <div>
                    <Label htmlFor="student-register-name">Name</Label>
                    <Input id="student-register-name" type="text" required value={studentRegister.name} onChange={e => setStudentRegister({ ...studentRegister, name: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="student-register-email">BITS Email</Label>
                    <Input id="student-register-email" type="email" required value={studentRegister.email} onChange={e => setStudentRegister({ ...studentRegister, email: e.target.value })} placeholder="e.g. f20201234@pilani.bits-pilani.ac.in" />
                  </div>
                  <div>
                    <Label htmlFor="student-register-password">Password</Label>
                    <Input id="student-register-password" type="password" required value={studentRegister.password} onChange={e => setStudentRegister({ ...studentRegister, password: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="student-register-confirm">Confirm Password</Label>
                    <Input id="student-register-confirm" type="password" required value={studentRegister.confirmPassword} onChange={e => setStudentRegister({ ...studentRegister, confirmPassword: e.target.value })} />
                  </div>
                  {registerError && <div className="text-red-500 text-xs text-center">{registerError}</div>}
                  <Button type="submit" className="w-full">Register</Button>
                </form>
                <div className="mt-4 text-center">
                  <button
                    className="text-xs text-brand-primary hover:underline focus:outline-none"
                    onClick={() => { setView("login"); setRegisterError(""); }}
                    type="button"
                  >
                    Already have an account?
                  </button>
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    className="text-xs text-brand-primary hover:underline focus:outline-none"
                    onClick={() => { setView("admin"); setRegisterError(""); }}
                    type="button"
                  >
                    Admin Login
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </Card>
    </div>
  );
};

export default LoginRegister; 