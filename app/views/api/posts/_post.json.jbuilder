comment_ids = []
post.comments.each do |comment|
	comment_ids << comment.id
end

json.set! post.id do
  json.extract! post, :id, :title, :body, :user_id, :team_id
  
  json.comments do 
		json.array! comment_ids
  end
end