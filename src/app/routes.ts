export const ROUTES = {
  ROOT: '/',
  CHARACTERS: '/characters',
  CHARACTER_DETAILS: '/characters/:id',
  NOT_FOUND: '/not-found',
} as const;

export function getCharacterDetailsPath(id: number) {
  return ROUTES.CHARACTER_DETAILS.replace(':id', String(id));
}
