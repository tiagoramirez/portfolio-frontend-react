import { Skill } from './Skill';

export class UserSkill {
    id?: string;
    percentage: number;
    skillInfo: Skill;

    constructor() {
        this.id = undefined;
        this.percentage = 0;
        this.skillInfo = new Skill();
    }
}