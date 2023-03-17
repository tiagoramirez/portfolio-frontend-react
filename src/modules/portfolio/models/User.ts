import { Education } from './Education';
import { Experience } from './Experience';
import { Project } from './Project';
import { UserSkill } from './UserSkill';
import { UserSocialMedia } from './UserSocialMedia';

export class ProfileInfo {
    name: string;
    email: string;
    username: string;
    isEnglishModeEnabled: boolean;
    nativeDesc?: string;
    hasEnglishDesc: boolean;
    englishDesc?: string;
    phone?: string;
    locationCountry?: string;
    locationState?: string;
    nativeAboutMe?: string;
    hasEnglishAboutMe: boolean;
    englishAboutMe?: string;

    constructor();
    constructor(user: User);
    constructor(user?: User) {
        this.name = user ? user.name : '';
        this.email = user ? user.email : '';
        this.username = user ? user.username : '';
        this.isEnglishModeEnabled = user ? user.isEnglishModeEnabled : false;
        this.nativeDesc = user ? user.nativeDesc : '';
        this.hasEnglishDesc = user ? user.hasEnglishDesc : false;
        this.englishDesc = user ? user.englishDesc : undefined;
        this.phone = user ? user.phone : undefined;
        this.locationCountry = user ? user.locationCountry : undefined;
        this.locationState = user ? user.locationState : undefined;
        this.nativeAboutMe = user ? user.nativeAboutMe : '';
        this.hasEnglishAboutMe = user ? user.hasEnglishAboutMe : false;
        this.englishAboutMe = user ? user.englishAboutMe : undefined;
    }
}

export class User extends ProfileInfo {
    socialMedias: UserSocialMedia[];
    skills: UserSkill[];
    experiences: Experience[];
    educations: Education[];
    projects: Project[];

    constructor() {
        super();
        this.socialMedias = [];
        this.skills = [];
        this.experiences = [];
        this.educations = [];
        this.projects = [];
    }
}