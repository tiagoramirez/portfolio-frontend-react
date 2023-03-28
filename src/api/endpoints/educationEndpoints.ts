import { AxiosResponse } from 'axios';
import { Education } from '../../modules/portfolio';
import { portfolioApi } from '../portfolioApi';

export const postEducation = async (education: Education): Promise<AxiosResponse<{ msg: string, id: string }>> => {
    const postEducationEndpoint = '/Education';
    return await portfolioApi(true).post(postEducationEndpoint, education);
};

export const putEducation = async (education: Education, id: string): Promise<AxiosResponse<{ msg: string }>> => {
    const putEducationEndpoint = `/Education/${id}`;
    return await portfolioApi(true).put(putEducationEndpoint, education);
};

export const deleteEducation = async (id: string): Promise<AxiosResponse<{ msg: string }>> => {
    const deleteEducationEndpoint = `/Education/${id}`;
    return await portfolioApi(true).delete(deleteEducationEndpoint);
};