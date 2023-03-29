import { Education } from './Education';
import { Experience } from './Experience';
import { Project } from './Project';
import { SocialMedia } from './SocialMedia';
import { UserSkill } from './UserSkill';

export class ProfileInfo {
    name: string;
    email: string;
    username: string;
    isEnglishModeEnabled: boolean;
    nativeDesc?: string;
    hasEnglishDesc: boolean;
    englishDesc?: string;
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
        this.locationCountry = user ? user.locationCountry : undefined;
        this.locationState = user ? user.locationState : undefined;
        this.nativeAboutMe = user ? user.nativeAboutMe : '';
        this.hasEnglishAboutMe = user ? user.hasEnglishAboutMe : false;
        this.englishAboutMe = user ? user.englishAboutMe : undefined;
    }
}

export class User extends ProfileInfo {
    educations: Education[];
    experiences: Experience[];
    projects: Project[];
    skills: UserSkill[];
    socialMedias: SocialMedia[];

    constructor() {
        super();
        this.educations = [];
        this.experiences = [];
        this.projects = [];
        this.skills = [];
        this.socialMedias = [];
    }
}