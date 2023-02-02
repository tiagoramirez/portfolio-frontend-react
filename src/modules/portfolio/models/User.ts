import { Education } from './Education';
import { Experience } from './Experience';
import { Project } from './Project';
import { UserSkill } from './UserSkill';
import { UserSocialMedia } from './UserSocialMedia';

export class User {
    name: string;
    email: string;
    username: string;
    isEnglishModeEnabled: boolean;
    nativeDesc: string;
    hasEnglishDesc: boolean;
    englishDesc?: string;
    phone?: string;
    locationCountry?: string;
    locationState?: string;
    nativeAboutMe: string;
    hasEnglishAboutMe: boolean;
    englishAboutMe?: string;
    socialMedias: UserSocialMedia[];
    skills: UserSkill[];
    experiences: Experience[];
    educations: Education[];
    projects: Project[];

    constructor() {
        this.name = '';
        this.email = '';
        this.username = '';
        this.isEnglishModeEnabled = false;
        this.nativeDesc = '';
        this.hasEnglishDesc = false;
        this.englishDesc = undefined;
        this.phone = undefined;
        this.locationCountry = undefined;
        this.locationState = undefined;
        this.nativeAboutMe = '';
        this.hasEnglishAboutMe = false;
        this.englishAboutMe = undefined;
        this.socialMedias = [];
        this.skills = [];
        this.experiences = [];
        this.educations = [];
        this.projects = [];
    }

}