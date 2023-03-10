import { SocialMedia } from './SocialMedia';

export class UserSocialMedia {
    id?: string;
    socialMediaId: string;
    url: string;
    socialMediaInfo: SocialMedia;

    constructor() {
        this.id = undefined;
        this.socialMediaId = '';
        this.url = '';
        this.socialMediaInfo = new SocialMedia();
    }
}