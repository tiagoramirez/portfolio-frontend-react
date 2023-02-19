import { AxiosResponse } from 'axios';
import { Education } from '../../modules/portfolio';
import { portfolioApi } from '../portfolioApi';

export const postEducation = async (education: Education): Promise<AxiosResponse<{ msg: string, id: string }>> => {
    const postEducationEndpoint = '/education';
    return await portfolioApi.post(postEducationEndpoint, education);
};

export const putEducation = async (education: Education, id: string): Promise<AxiosResponse<{ msg: string }>> => {
    const putEducationEndpoint = `/education/${id}`;
    return await portfolioApi.put(putEducationEndpoint, education);
};

export const deleteEducation = async (id: string): Promise<AxiosResponse<{ msg: string }>> => {
    const deleteEducationEndpoint = `/education/${id}`;
    return await portfolioApi.delete(deleteEducationEndpoint);
};