'use client';

import React, { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const LandingPage = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark opacity-[0.3] dark:opacity-[0.2] pointer-events-none" />
      
      {/* Content with relative positioning to appear above grid */}
      <div className="relative">
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        <div className="container px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 animate-fade-down font-inter">
              Uploaded Intelligence
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up mb-12">
              Your personal knowledge base powered by AI
            </p>
            <div className="relative flex gap-3">
              <SignedIn>
                <Link
                  href="/dashboard"
                  className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
                >
                  Dashboard
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton>
                    <Link href="/sign-in">
                        <button className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold">
                        Sign in
                    </button>
                    </Link>
                </SignInButton>
              </SignedOut>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm animate-fade-up">
              <h3 className="text-xl font-semibold mb-2">Save Anything</h3>
              <p className="text-muted-foreground">Save articles, videos, and web pages with a single click</p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm animate-fade-up delay-100">
              <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
              <p className="text-muted-foreground">Find exactly what you need with AI-powered search</p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm animate-fade-up delay-200">
              <h3 className="text-xl font-semibold mb-2">Always Available</h3>
              <p className="text-muted-foreground">Access your knowledge base from anywhere, anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 