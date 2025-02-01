'use client';

import React, { useState, useEffect } from "react";
import SearchInput from "@/components/SearchInput";
import MemoryGrid from "@/components/MemoryGrid";
import ThemeToggle from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";

// Mock data - replace with real data from your backend
const mockMemories = [
  {
    id: "1",
    type: "youtube" as const,
    title: "Understanding Neural Networks",
    description:
      "A comprehensive guide to neural networks and their applications in modern AI systems.",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    url: "#",
  },
  {
    id: "2",
    type: "article" as const,
    title: "The Future of Web Development",
    description:
      "Exploring upcoming trends and technologies that will shape the future of web development.",
    url: "#",
  },
  {
    id: "3",
    type: "webpage" as const,
    title: "Machine Learning Best Practices",
    description:
      "Essential guidelines and best practices for implementing machine learning solutions.",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    url: "#",
  },
  {
    id: "4",
    type: "twitter" as const,
    title: "AI Breakthrough Announcement",
    description: "Major advancement in artificial intelligence research announced today.",
    url: "#",
  },
];

const HomePage = () => {
  const [memories, setMemories] = useState(mockMemories);
  const [isSearching, setIsSearching] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      toast({
        title: "Please enter a search query",
        description: "Your query cannot be empty",
      });
      return;
    }

    setIsSearching(true);
    // Here you would typically make an API call to your backend
    // For now, we'll just simulate a delay
    setTimeout(() => {
      setIsSearching(false);
      toast({
        title: "Search completed",
        description: "Found relevant memories based on your query",
      });
    }, 1500);
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
            <h1 className="text-4xl font-bold mb-4 animate-fade-down font-inter">
              Uploaded Intelligence
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up">
              Search through your personal knowledge base
            </p>
          </div>

          <SearchInput onSearch={handleSearch} />

          <div className={`transition-opacity duration-500 ${isSearching ? "opacity-50" : ""}`}>
            <MemoryGrid memories={memories} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 