import {DEFAULT_MAX_LENGTH} from '../constants/commonContsnats';

export const truncateLongString = (
  value: string,
  maxLength: number = DEFAULT_MAX_LENGTH,
): string => {
  return value.length > maxLength ? `${value.slice(0, maxLength)}...` : value;
};
