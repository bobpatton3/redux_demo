export const INCREMENT_SUBURBAN = 'INCREMENT_SUBURBAN';
export const DECREMENT_SUBURBAN = 'DECREMENT_SUBURBAN';
export const INCREMENT_APARTMENTS = 'INCREMENT_APARTMENTS';
export const DECREMENT_APARTMENTS = 'DECREMENT_APARTMENTS';
export const URBAN_SPRAWL = 'URBAN_SPRAWL';
export const GODZILLA_ATTACK = 'GODZILLA_ATTACK';

// Action creators
export const incrementSuburbanHomes = () => ({ type: INCREMENT_SUBURBAN });
export const decrementSuburbanHomes = () => ({ type: DECREMENT_SUBURBAN });
export const incrementHighRiseApartments = () => ({ type: INCREMENT_APARTMENTS });
export const decrementHighRiseApartments = () => ({ type: DECREMENT_APARTMENTS });
export const urbanSprawl = () => ({ type: URBAN_SPRAWL });
export const godzillaAttack = () => ({ type: GODZILLA_ATTACK });
