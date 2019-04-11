import { helper } from '@ember/component/helper';

export function number([num]) {
  return num.toLocaleString();
}

export default helper(number);
