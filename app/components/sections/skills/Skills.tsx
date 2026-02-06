import React, { useState, useTransition } from "react";
import { useTranslation } from "@/lib/i18n";
import TabButton from "../../ui/TabButton";
import SkillsTabContent from "./SkillsTabContent";
import EducationTabContent from "./EducationTabContent";

const SkillSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();
  const { t } = useTranslation();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="relative flex items-center overflow-hidden  md:pt-20 pt-36 "
      id="skills"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-center text-3xl font-bold mb-2 text-foreground">
          {t.skills.title}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            {t.skills.skillsTab}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {t.skills.educationTab}
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
