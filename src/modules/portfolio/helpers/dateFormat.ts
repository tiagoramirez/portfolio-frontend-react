export const formatedStartDate = (start: string): string => {
    const startDate = new Date(start);
    return `${startDate.getUTCMonth() + 1}/${startDate.getUTCFullYear()}`;
};

export const formatedEndDate = (end: string | undefined, isActual: boolean): string => {
    if (!isActual && end) {
        const endDate = new Date(end);
        return `${endDate.getUTCMonth() + 1}/${endDate.getUTCFullYear()}`;
    }
    return 'Actualidad';
};