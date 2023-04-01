import { AxiosResponse } from 'axios';
import { Education } from '../../modules/portfolio';
import { portfolioApi } from '../portfolioApi';

export const postEducation = async (education: Education): Promise<AxiosResponse<{ msg: string, id: string }>> => {
    import.meta.env.DEV && console.log(education);
    const postEducationEndpoint = '/Education';
    return await portfolioApi(true).post(postEducationEndpoint, education);
};

export const putEducation = async (education: Education): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(education);
    const putEducationEndpoint = 'Education';
    return await portfolioApi(true).put(putEducationEndpoint, education);
};

export const deleteEducation = async (id: string): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(id);
    const deleteEducationEndpoint = `/Education/${id}`;
    return await portfolioApi(true).delete(deleteEducationEndpoint);
};