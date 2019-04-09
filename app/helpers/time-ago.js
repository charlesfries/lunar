import { helper } from '@ember/component/helper';
import moment from 'moment';

export function timeAgo([time]) {
	return moment.unix(time).utc().toNow() + ' ago';
}

export default helper(timeAgo);
