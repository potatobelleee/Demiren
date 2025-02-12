"use client";
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export default function Register(){

    return (
      <div className="flex min-h-screen">
      {/* Left side image */}
      <div className="w-1/2 relative hidden md:block">
        <img
          src="/assets/dems.jpg"
          alt="Register"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    
      {/* Right side form with new background */}
      <div className="w-1/2 flex justify-center items-center p-6 bg-[#6482AD]">
        <div className="w-full max-w-md p-6 bg-[#E2DAD6] rounded-md shadow-lg">
          <h2 className="text-center text-2xl font-bold mb-4 text-[#213555]">Create an Account</h2>
    
          {/* Registration Form */}
          <div className="mb-4">
  <label htmlFor="fname" className="block text-sm font-medium text-[#213555]">First Name</label>
  <Input
    type="text"
    id="fname"
    placeholder="Enter Firstname"
    required
    className="mt-1 p-2 w-full border border-black rounded text-black placeholder-gray-500"
  />
</div>
          <div className="mb-4">
            <label htmlFor="lname" className="block text-sm font-medium text-[#213555]">Last Name</label>
            <Input
              type="text"
              id="lname"
              placeholder="Enter Lastname"
              required
              className="mt-1 p-2 w-full border border-black rounded text-black placeholder-gray-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-[#213555]">Email</label>
            <Input
              type="text"
              id="email"
              placeholder="m@example.com"
              required
              className="mt-1 p-2 w-full border border-black rounded text-black placeholder-gray-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-[#213555]">Username</label>
            <Input
              type="text"
              id="username"
              placeholder="Enter Username"
              required
              className="mt-1 p-2 w-full border border-black rounded text-black placeholder-gray-500"
            />
          </div>
    
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-[#213555]">Password</label>
            <Input
              type="password"
              id="password"
              placeholder="Enter Password"
              required
              className="mt-1 p-2 w-full border border-black rounded text-black placeholder-gray-500"
            />
          </div>
    
          <Button type="submit" className="w-full mt-4 bg-[#213555] text-white">Register</Button>
          <div className="text-center text-sm mt-4 text-[#213555]">
            Already have an account?{" "}
            <a href="/signin" className="underline underline-offset-4">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
    
    )
}