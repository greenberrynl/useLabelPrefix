import { useMemo, useState } from 'react';
import {
  curry,
  join,
  pipe,
  split,
  take
} from 'ramda';

const allChars = split('', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789');
const serializeLabel = str => str.replace(/\s/gi, '__');
const shuffler = curry((random, list) => {
  let idx = -1;
  let position;

  const len = list.length;
  const result = [];

  while (++idx < len) {
    position = Math.floor((idx + 1) * random());
    result[idx] = result[position];
    result[position] = list[idx];
  }

  return result;
});

const shuffle = shuffler(Math.random);

/**
 * useLabelPrefix
 * @param {string} label input to be prefixed
 * @param {number} length the length of the prefix
 */
const useLabelPrefix = (
  label,
  length = 8,
) => {
  const takeLength = useMemo(() => take(length), [length]);
  const prefix = pipe(
    shuffle,
    takeLength,
    join(""),
  )(allChars);

  const [prefixed] = useState(`p_${prefix}_${serializeLabel(label)}`);

  return prefixed;
}

export default useLabelPrefix;
