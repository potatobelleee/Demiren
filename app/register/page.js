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
        <div className="w-1/2 bg-gray-100">
          <img
            src="/assets/demerin.jpeg"
            alt="Register"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Right side form */}
        <div className="w-1/2 flex justify-center items-center p-6">
          <div className="w-full max-w-md p-6 bg-[#F5EFE7] rounded-md shadow-lg">
            <h2 className="text-center text-2xl font-bold mb-4">Create an Account</h2>
  
            {/* Registration Form */}
            <div className="mb-4">
              <label htmlFor="fname" className="block text-sm font-medium">First Name</label>
              <Input
                type="text"
                id="fname"
                placeholder="Enter Firstname"
                required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lname" className="block text-sm font-medium">Last Name</label>
              <Input
                type="text"
                id="lname"
                placeholder="Enter Lastname"
                required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <Input
                type="text"
                id="email"
                placeholder="m@example.com"
                required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium">Username</label>
              <Input
                type="text"
                id="username"
                placeholder="Enter Username"
                required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium ">Password</label>
              <Input
                type="password"
                id="password"
                placeholder="Enter Password"
                required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
  
            {/* <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
              <Input
                type="password"
                id="confirmPassword"
                required
                className="mt-1 p-2 w-full border rounded"
              />
            </div> */}
  
            <Button type="submit" className="w-full mt-4 bg-[#213555] text-white">Register</Button>
            <div className="text-center text-sm mt-4">
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