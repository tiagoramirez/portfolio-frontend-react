export class Education {
    id: string;
    titleName: string;
    institute: string;
    type: number;
    isActual: boolean;
    start: Date;
    end?: Date;
    nativeDesc: string;
    hasEnglishDesc: boolean;
    englishDesc?: string;

    constructor() {
        this.id = '';
        this.titleName = '';
        this.institute = '';
        this.type = 0;
        this.isActual = false;
        this.start = new Date();
        this.end = undefined;
        this.nativeDesc = '';
        this.hasEnglishDesc = false;
        this.englishDesc = undefined;
    }
}