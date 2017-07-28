# comment_ids = []
# @post.comments.each do |comment|
#   comment_ids << comment.id
# end

json.extract! @post, :id, :title, :body, :user_id, :team_id
json.comments do
  json.array! @post.comments
end

json.author do
  json.extract! @post.user, :id, :fname, :lname
  json.avatar_url asset_path(@post.user.avatar.url)
end
