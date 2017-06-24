ids = []
@team.members.each do |member|
  ids << member.id
end
json.extract! @team, :id, :name, :manager_id
json.member_ids do
    json.array! ids
end
json.members do
  @team.members.each do |user|
    json.set! user.id do
      json.extract! user, :id, :email, :fname, :lname
      json.avatar_url asset_path(user.avatar.url)
    end
  end
end
