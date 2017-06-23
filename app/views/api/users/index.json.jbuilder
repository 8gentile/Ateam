@users.each do |user|
  json.partial! 'api/users/user', user: user
end
