import React, { useState, useTransition } from "react";
import TabButton from "../../ui/TabButton";
import SkillsTabContent from "./SkillsTabContent";
import EducationTabContent from "./EducationTabContent";

const SkillSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="relative flex items-center overflow-hidden bg-gradient-to-r light:bg-[#EAB308] min-h-screen pt-20"
      id="skills"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Skills
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Technical Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            Education & Certifications
          </TabButton>
        </div>
        <div className="w-full">
          {tab === "skills" && <SkillsTabContent />}
          {tab === "education" && <EducationTabContent />}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
