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
      className=" bg-gradient-to-r from-[#e5dec7] to-[#decfba] dark:from-[#121212] dark:to-[#1f2937] light:bg-[#F5F5F5] min-h-screen "
      id="skills"
    >
      <div className="`max-w-6xl mx-auto  items-center grid grid-cols-1 pt-8 ">
        <div className="col-span-1">
          <h2 className="text-3xl font-bold text-center pt-10 ">Skills</h2>
        </div>

        <div className="">
          <div className="flex justify-center items-start text-xl mx-auto space-x-4 pt-4">
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

          <div className="">
            {tab === "skills" && <SkillsTabContent />}
            {tab === "education" && <EducationTabContent />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
