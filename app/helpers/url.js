import { helper } from '@ember/component/helper';

export function url([str]) {
	str = str.replace('https://www.', '');
	str = str.replace('http://www.', '');
	str = str.replace('https://', '');
	str = str.replace('http://', '');

	if (str.length > 20) {
		return str.substring(0, 20) + '...';
	} else {
		return str;
	}
}

export default helper(url);
