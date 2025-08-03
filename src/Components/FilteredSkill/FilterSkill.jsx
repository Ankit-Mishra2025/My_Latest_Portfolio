import React, { useState } from "react";
import "./FilterSkill.css";
import HTML from "../../assets/html.png";
// import CSS from "../../assets/css.png";
// import JS from "../../assets/js.png";
// import REACT from "../../assets/react.png";
// import NODE from "../../assets/node.png";
// import EXPRESS from "../../assets/express.png";
// import VSCODE from "../../assets/vscode.png";
// import GITHUB from "../../assets/github.png";

const FilterSkill = () => {
  const Skills = {
    FrontendSkills: [
      { name: "HTML", image: HTML },
        { name: "CSS" },
      //   { name: "JavaScript", image: JS },
      //   { name: "React", image: REACT },
      // ],
      // BackendSkills: [
      //   { name: "Node.js", image: NODE },
      //   { name: "Express.js", image: EXPRESS },
      // ],
      // Tools: [
      //   { name: "VS Code", image: VSCODE },
      //   { name: "GitHub", image: GITHUB },
    ],
  };

  const [currentSkills, setCurrentSkills] = useState([]);

  const handleSkillFilter = (type) => {
    if (type === "frontend") {
      setCurrentSkills(Skills.FrontendSkills);
    } else if (type === "backend") {
      setCurrentSkills(Skills.BackendSkills);
    } else if (type === "tools") {
      setCurrentSkills(Skills.Tools);
    }
  };

  return (
    <div className="SkillsContainer">
      <h1>My Skills</h1>

      <div className="AllBtns">
        <button onClick={() => handleSkillFilter("frontend")}>Frontend</button>
        <button onClick={() => handleSkillFilter("backend")}>Backend</button>
        <button onClick={() => handleSkillFilter("tools")}>Tools</button>
      </div>

      <div className="SkillsBoxes">
        {currentSkills.map((skill, index) => (
          <div className="SkillBox" key={index}>
            <img src={skill.image} alt={skill.name} className="SkillImage" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSkill;
