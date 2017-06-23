json.set! user.id do
  json.extract! user, :id, :email, :fname, :lname
  json.avatar_url asset_path(user.avatar.url)
end
