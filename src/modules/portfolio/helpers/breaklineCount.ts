export const breaklineCount = (str: string | null | undefined) =>
    str ? str.split('\n').length - 1 : 0;