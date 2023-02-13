export class Education {
    id?: string;
    titleName: string;
    institute: string;
    type: number;
    isActual: boolean;
    start: string;
    end?: string;
    nativeDesc: string;
    hasEnglishDesc: boolean;
    englishDesc?: string;

    constructor() {
        this.id = undefined;
        this.titleName = '';
        this.institute = '';
        this.type = 0;
        this.isActual = false;
        this.start = '';
        this.end = undefined;
        this.nativeDesc = '';
        this.hasEnglishDesc = false;
        this.englishDesc = undefined;
    }
}