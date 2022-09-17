export const stringCapitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const stringAddEndingDot = (str: string) => (str.endsWith('.') ? str : `${str}.`);
