import { AxiosResponse } from 'axios';
import { ProfileInfo } from '../../modules/portfolio';
import { portfolioApi } from '../portfolioApi';

export const putProfile = async (profileInfo: ProfileInfo): Promise<AxiosResponse<{ msg: string }>> => {
    const putProfileEndpoint = '/user';
    return await portfolioApi(true).put(putProfileEndpoint, profileInfo);
};