import { AxiosResponse } from 'axios';
import { UserSocialMedia } from '../../modules/portfolio';
import { SocialMedia } from '../../modules/portfolio/models/SocialMedia';
import { portfolioApi } from '../portfolioApi';

export const getSocialMedia = async (): Promise<AxiosResponse<SocialMedia[]>> => {
    const getSocialMediaEndpoint = '/SocialMedia';
    return await portfolioApi(false).get(getSocialMediaEndpoint);
};

export const postSocialMedia = async (socialMedia: UserSocialMedia): Promise<AxiosResponse<{ msg: string, id: string }>> => {
    const postSocialMediaEndpoint = '/SocialMedia';
    return await portfolioApi(true).post(postSocialMediaEndpoint, socialMedia);
};

export const putSocialMedia = async (socialMedia: UserSocialMedia, id: string): Promise<AxiosResponse<{ msg: string }>> => {
    const putSocialMediaEndpoint = `/SocialMedia/${id}`;
    return await portfolioApi(true).put(putSocialMediaEndpoint, socialMedia);
};

export const deleteSocialMedia = async (id: string): Promise<AxiosResponse<{ msg: string }>> => {
    const deleteSocialMediaEndpoint = `/SocialMedia/${id}`;
    return await portfolioApi(true).delete(deleteSocialMediaEndpoint);
};