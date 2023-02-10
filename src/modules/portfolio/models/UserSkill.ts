import { Skill } from './Skill';

export class UserSkill {
    id?: string;
    skillId: string;
    percentage: number;
    skillInfo: Skill;

    constructor() {
        this.id = undefined;
        this.skillId = '';
        this.percentage = 0;
        this.skillInfo = new Skill();
    }
}