import React from "react";
import { motion, Variants } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const variants: Variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "darck:text-[#3F3D56]" : "text-[#848484]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#3F3D56] ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#15326F] mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
