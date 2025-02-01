import React from "react";
import MemoryCard from "./MemoryCard";

interface Memory {
  id: string;
  type: "youtube" | "article" | "webpage" | "twitter";
  title: string;
  description: string;
  thumbnail?: string;
  url: string;
}

interface MemoryGridProps {
  memories: Memory[];
}

const MemoryGrid: React.FC<MemoryGridProps> = ({ memories }) => {
  return (
    <div className="memory-grid">
      {memories.map((memory) => (
        <MemoryCard key={memory.id} {...memory} />
      ))}
    </div>
  );
};

export default MemoryGrid;