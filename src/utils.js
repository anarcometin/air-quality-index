import { addIndex, complement, isNil, map } from 'ramda';

export const isAvailable = complement(isNil);

export const mapIndexed = addIndex(map);
