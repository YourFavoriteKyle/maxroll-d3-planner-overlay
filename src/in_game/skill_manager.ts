import { PlannerGeneralData } from "./planner_general_data";
import { BuildData } from "./build_data";

export class SkillManager {
  private _skillsContainer: HTMLDivElement;
  public _plannerBuildData: BuildData;
  public _plannerGeneralData: PlannerGeneralData;
  public constructor(skillsContainer: HTMLDivElement) {
    this._skillsContainer = <HTMLDivElement>skillsContainer;
  }

  public async setSkills(selectedBuild: number) {
    const className = this._plannerBuildData.class;
    const skillSlots = this.getSkillSlotNodes(this._skillsContainer);
    const buildSkills = this.getBuildSkills(selectedBuild);

    for (let i = 0; i < skillSlots.length; i++) {
      skillSlots[i].style.backgroundPosition = this.getIconPosition(
        className,
        buildSkills[i].skill
      );
      skillSlots[i].classList.add("skills-demonhunter");
      skillSlots[i].classList.remove("skill-icon-punch");
    }
  }

  private getSkillSlotNodes(skillsContainer: HTMLDivElement) {
    let skillSlots: Array<HTMLDivElement> = [];
    for (let i = 0; i < skillsContainer.childNodes.length; i++) {
      if (skillsContainer.childNodes[i].nodeType === 1) {
        skillSlots.push(<HTMLDivElement>skillsContainer.childNodes[i]);
      }
    }
    return skillSlots;
  }

  private getBuildSkills(selectedBuild: number) {
    const selectedBuildSkills =
      this._plannerBuildData.profiles[selectedBuild].skills;
    let buildSkills: Array<Record<string, string>> = [];
    for (let i = 0; i < selectedBuildSkills.length; i++) {
      const skill: Record<string, string> = {};
      skill.skill = selectedBuildSkills[i][0];
      skill.rune = selectedBuildSkills[i][1];
      buildSkills.push(skill);
    }
    return buildSkills;
  }

  private getIconPosition(className: string, skillName: string) {
    const skillData = this._plannerGeneralData.skills[className][skillName];

    return `-${skillData.col * 42}px -${skillData.row * 84}px`;
  }
}
