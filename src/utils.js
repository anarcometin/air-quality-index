import { isNil, complement } from 'ramda';

export const isAvailable = complement(isNil);

