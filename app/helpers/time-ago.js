import { helper } from '@ember/component/helper';
import moment from 'moment';

export function timeAgo([time]) {
	return moment.unix(time).utc().fromNow();
}

export default helper(timeAgo);
