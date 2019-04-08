import { helper } from '@ember/component/helper';

export function subcleaner([str]) {
  return str.replace('r/', '');
}

export default helper(subcleaner);
