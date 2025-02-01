import React from "react";
import { Youtube, FileText, Globe, Twitter } from "lucide-react";

interface MemoryCardProps {
  type: "youtube" | "article" | "webpage" | "twitter";
  title: string;
  description: string;
  thumbnail?: string;
  url: string;
}

const MemoryCard: React.FC<MemoryCardProps> = ({
  type,
  title,
  description,
  thumbnail,
  url,
}) => {
  const getIcon = () => {
    switch (type) {
      case "youtube":
        return <Youtube className="h-5 w-5 text-red-500" />;
      case "article":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "webpage":
        return <Globe className="h-5 w-5 text-green-500" />;
      case "twitter":
        return <Twitter className="h-5 w-5 text-sky-500" />;
    }
  };

  return (
    <div className="memory-card animate-fade-up">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">{getIcon()}</div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-3 mb-3">{description}</p>
          {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-32 object-cover rounded-md mb-3"
            />
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            View original
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;