import { AxiosResponse } from 'axios';
import { Experience } from '../../modules/portfolio';
import { portfolioApi } from '../portfolioApi';

export const postExperience = async (experience: Experience): Promise<AxiosResponse<{ msg: string, id: string }>> => {
    import.meta.env.DEV && console.log(experience);
    const postExperienceEndpoint = '/Experience';
    return await portfolioApi(true).post(postExperienceEndpoint, experience);
};

export const putExperience = async (experience: Experience): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(experience);
    const putExperienceEndpoint = '/Experience';
    return await portfolioApi(true).put(putExperienceEndpoint, experience);
};

export const deleteExperience = async (id: string): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(id);
    const deleteExperienceEndpoint = `/Experience/${id}`;
    return await portfolioApi(true).delete(deleteExperienceEndpoint);
};