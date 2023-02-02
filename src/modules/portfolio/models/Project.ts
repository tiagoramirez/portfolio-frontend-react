export class Project {
    id: string;
    name: string;
    url: string;
    nativeDesc: string;
    hasEnglishDesc: boolean;
    englishDesc?: string;

    constructor() {
        this.id = '';
        this.name = '';
        this.url = '';
        this.nativeDesc = '';
        this.hasEnglishDesc = false;
        this.englishDesc = undefined;
    }
}