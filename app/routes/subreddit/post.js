import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	reddit: service(),
	
	
	model({ id }) {
		return this.reddit.api.getSubmission(id).fetch()
			.then(data => {
				
				
				data.author = Object.assign({}, data.author)
				console.log('Post', data);
				
				// // console.log(data.comments[0])
				// 
				// data.comments = data.comments
				// 	.map(comment => {
				// 		comment.author = Object.assign({}, comment.author);
				// 		return comment
				// 	});
				// 
				// console.log(data.comments[0].author.name)
				
				return data;
			});
	}
});
