const GhostContentAPI = require('@tryghost/content-api');
const { api_url, api_key, api_version, api_posts } = require('../config.json');

module.exports = {
	name: 'rootflag',
	description: 'Command series for the blog.',
	args: true,
	usage: 'posts <number of posts to show>',
	second_usage: 'tags all',
	third_usage: 'tags <tag you want to search for>',
	execute(message, args) {
		const api = new GhostContentAPI({
			url: api_url,
			key: api_key,
			version: api_version
		  });

		if(args[0] === 'posts'){
			api.posts
				.browse({limit: args[1], include: 'tags,authors'})
    			.then((posts) => {
					message.channel.send(`Here are the last ${args[1]} posts.`)
					console.log(`${message.author.tag} sent the Rootflag Posts (${args[1]}) command at ${Date(Date.now()).toString()}`);
					posts.forEach((post) => {
					message.channel.send(`${post.title} - ${post.url}`);
	        		});
				})
				.catch((err) => {
					console.error(err);
				});
			} else if(args[0] === 'tags' && args[1] === 'all'){
				api.tags
					.browse({limit: 999999, order: 'slug ASC'}, {include: 'count.posts'})
					.then((tags) => {
						console.log(`${message.author.tag} sent the Rootflag tags all command at ${Date(Date.now()).toString()}`);
						message.channel.send(`${message.author.tag}, you have been sent a DM with all the tags`)
						tags.forEach((tags) => {
							message.author.send(`${tags.name} - You can access this tag at rootflag.io/tag/${tags.name}.`);
						})
					})
			} else if(args[0] === 'tags' && args[1]){
				api.tags.read({slug: args[1]}, {include: 'count.posts'}).then((tags) => {
					console.log(tags);
					console.log(`logging tag names: ${tags.name}`);
					message.channel.send(`There are ${tags.count.posts} posts with this tag. View them here: ${tags.url}`)
					})
					.catch((err) => {
						console.error(err);
					});
			}

		}
		
	};