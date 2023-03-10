export class Experience {
    id?: string;
    position: string;
    company: string;
    type: number;
    isActual: boolean;
    start: string;
    end?: string;
    nativeDesc: string;
    hasEnglishDesc: boolean;
    englishDesc?: string;

    constructor() {
        this.id = undefined;
        this.position = '';
        this.company = '';
        this.type = 0;
        this.isActual = false;
        this.start = '';
        this.end = undefined;
        this.nativeDesc = '';
        this.hasEnglishDesc = false;
        this.englishDesc = undefined;
    }
}