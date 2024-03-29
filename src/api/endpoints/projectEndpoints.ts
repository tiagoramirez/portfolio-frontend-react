import { AxiosResponse } from 'axios';
import { Project } from '../../modules/portfolio';
import { portfolioApi } from '../portfolioApi';

export const postProject = async (project: Project): Promise<AxiosResponse<{ msg: string, id: string }>> => {
    import.meta.env.DEV && console.log(project);
    const postProjectEndpoint = '/Project';
    return await portfolioApi(true).post(postProjectEndpoint, project);
};

export const putProject = async (project: Project): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(project);
    const putProjectEndpoint = '/Project';
    return await portfolioApi(true).put(putProjectEndpoint, project);
};

export const deleteProject = async (id: string): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(id);
    const deleteProjectEndpoint = `/Project/${id}`;
    return await portfolioApi(true).delete(deleteProjectEndpoint);
};