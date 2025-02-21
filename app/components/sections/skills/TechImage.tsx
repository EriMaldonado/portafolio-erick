import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

interface TechImageProps {
  src: string;
  alt: string;
  label: string;
}

const TechImage: React.FC<TechImageProps> = ({ src, alt, label }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Image src={src} alt={alt} className="p-3" width={70} height={70} />
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TechImage;
