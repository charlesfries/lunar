import { helper } from '@ember/component/helper';

export function number([num]) {
	num = parseInt(num);
  return num.toLocaleString();
}

export default helper(number);
