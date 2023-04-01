import { AxiosResponse } from 'axios';
import { SocialMedia } from '../../modules/portfolio';
import { portfolioApi } from '../portfolioApi';

export const postSocialMedia = async (socialMedia: SocialMedia): Promise<AxiosResponse<{ msg: string, id: string }>> => {
    import.meta.env.DEV && console.log(socialMedia);
    const postSocialMediaEndpoint = '/SocialMedia';
    return await portfolioApi(true).post(postSocialMediaEndpoint, socialMedia);
};

export const putSocialMedia = async (socialMedia: SocialMedia): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(socialMedia);
    const putSocialMediaEndpoint = '/SocialMedia';
    return await portfolioApi(true).put(putSocialMediaEndpoint, socialMedia);
};

export const deleteSocialMedia = async (id: string): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(id);
    const deleteSocialMediaEndpoint = `/SocialMedia/${id}`;
    return await portfolioApi(true).delete(deleteSocialMediaEndpoint);
};