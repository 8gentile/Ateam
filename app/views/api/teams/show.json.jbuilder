avatars = []
@team.members.each do |member|
  avatars << asset_path(member.avatar.url)
end
json.extract! @team, :id, :name, :manager_id
json.member_avatars do
    json.array! avatars
end
json.members do
  @team.members.each do |user|
    json.set! user.id do
      json.extract! user, :id, :email, :fname, :lname
      json.avatar_url asset_path(user.avatar.url)
    end
  end
end
