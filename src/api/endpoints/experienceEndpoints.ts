import { AxiosResponse } from 'axios';
import { Experience } from '../../modules/portfolio';
import { portfolioApi } from '../portfolioApi';

export const postExperience = async (experience: Experience): Promise<AxiosResponse<{ msg: string, id: string }>> => {
    const postExperienceEndpoint = '/experience';
    return await portfolioApi(true).post(postExperienceEndpoint, experience);
};

export const putExperience = async (experience: Experience, id: string): Promise<AxiosResponse<{ msg: string }>> => {
    const putExperienceEndpoint = `/experience/${id}`;
    return await portfolioApi(true).put(putExperienceEndpoint, experience);
};

export const deleteExperience = async (id: string): Promise<AxiosResponse<{ msg: string }>> => {
    const deleteExperienceEndpoint = `/experience/${id}`;
    return await portfolioApi(true).delete(deleteExperienceEndpoint);
};