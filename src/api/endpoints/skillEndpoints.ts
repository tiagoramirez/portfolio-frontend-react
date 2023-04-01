import { AxiosResponse } from 'axios';
import { UserSkill } from '../../modules/portfolio';
import { Skill } from '../../modules/portfolio/models/Skill';
import { portfolioApi } from '../portfolioApi';

export const getSkill = async (): Promise<AxiosResponse<Skill[]>> => {
    const getSkillEndpoint = '/Skill';
    return await portfolioApi(false).get(getSkillEndpoint);
};

export const postSkill = async (skill: UserSkill): Promise<AxiosResponse<{ msg: string, id: string }>> => {
    import.meta.env.DEV && console.log(skill);
    const postSkillEndpoint = '/Skill';
    return await portfolioApi(true).post(postSkillEndpoint, skill);
};

export const putSkill = async (skill: UserSkill): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(skill);
    const putSkillEndpoint = '/Skill';
    return await portfolioApi(true).put(putSkillEndpoint, skill);
};

export const deleteSkill = async (id: string): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(id);
    const deleteSkillEndpoint = `/Skill/${id}`;
    return await portfolioApi(true).delete(deleteSkillEndpoint);
};