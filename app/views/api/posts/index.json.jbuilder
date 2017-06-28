@posts.each do |post|
	json.partial! 'api/posts/post', post: post
end