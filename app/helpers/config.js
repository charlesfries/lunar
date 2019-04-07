import { helper } from '@ember/component/helper';
import environment from './../config/environment';

export function config([path]) {
	let obj = environment;
	let parts = typeof path === 'string' ? path.split('.') : path;
	
	for (let i = 0; i < parts.length; i++) {
		if (obj === undefined || obj === null) {
			return undefined;
		}
		let name = parts[i];
		obj = obj[name];
	}
	
	return obj;
}

export default helper(config);
