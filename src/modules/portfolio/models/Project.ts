export class Project {
    id?: string;
    name: string;
    url: string;
    nativeDesc: string;
    hasEnglishDesc: boolean;
    englishDesc?: string;

    constructor() {
        this.id = undefined;
        this.name = '';
        this.url = '';
        this.nativeDesc = '';
        this.hasEnglishDesc = false;
        this.englishDesc = undefined;
    }
}