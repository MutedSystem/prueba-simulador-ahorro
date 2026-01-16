export const normalizeString = (str: string) => {
  return str
    .normalize('NFD')
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
};
