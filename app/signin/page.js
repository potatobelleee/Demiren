"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

export default function Login() {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [captchaCharacters, setCaptchaCharacters] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    generateCaptchaCharacters();
  }, []);

  const generateCaptchaCharacters = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
    const newCaptcha = [];
    for (let i = 0; i < 5; i++) {
      newCaptcha.push({
        char: characters[Math.floor(Math.random() * characters.length)],
        color: getRandomColor(),
      });
    }
    setCaptchaCharacters(newCaptcha);
    setUserInput(""); // Reset input field
    setIsCaptchaValid(false);
  };

  const getRandomColor = () => {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    if (e.target.value === captchaCharacters.map((c) => c.char).join("")) {
      setIsCaptchaValid(true);
    } else {
      setIsCaptchaValid(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#6482AD]">
      {/* Left side form */}
      <div className="w-1/2 flex justify-center items-center p-6">
        <div className="w-full max-w-md p-6 bg-[#E2DAD6] rounded-md shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Login your account</h1>

          {/* Login Form */}
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="mt-1 p-2 w-full border border-black rounded text-black placeholder-gray-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  required
                  className="mt-1 p-2 w-full border border-black rounded text-black placeholder-gray-500"
                />
              </div>

              {/* CAPTCHA */}
              <div className="text-center">
                <h2 className="text-lg font-semibold mb-2">Security CAPTCHA</h2>
                <div className="flex justify-center items-center gap-3">
                  {captchaCharacters.map((c, index) => (
                    <span key={index} style={{ color: c.color, fontSize: "24px", fontWeight: "bold" }}>
                      {c.char}
                    </span>
                  ))}
                </div>

                <input
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder="Enter CAPTCHA characters"
                  className="border p-2 w-full rounded text-black mt-3 text-center"
                />

                <div className="flex justify-center mt-2">
                  <button
                    type="button"
                    onClick={generateCaptchaCharacters}
                    className="text-blue-500 text-sm underline"
                  >
                    Refresh CAPTCHA
                  </button>
                </div>

                {!isCaptchaValid && userInput.length > 0 && (
                  <p className="text-red-500 text-sm mt-1">Incorrect CAPTCHA, try again.</p>
                )}
              </div>

              {/* Show login button only if CAPTCHA is solved */}
              {isCaptchaValid && (
                <Button className="w-full mt-4 bg-[#213555] text-white px-4 py-2 rounded-lg hover:bg-[#324A65]">
                  Login
                </Button>
              )}

              <div className="text-center text-sm mt-4">
                Don&apos;t have an account?{" "}
                <a href="/register" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Right side image */}
      <div className="w-1/2 relative hidden md:block">
        <img
          src="/assets/dems.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
