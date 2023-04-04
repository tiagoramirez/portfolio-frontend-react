export const dateComparer = (date1: Date, date2: Date): number => {
    if (date1 > date2) return -1;
    if (date2 > date1) return 1;
    return 0;
};