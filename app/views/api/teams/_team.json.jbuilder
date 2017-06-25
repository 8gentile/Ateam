avatars = []
ids = []
team.members.each do |member|
  avatars << asset_path(member.avatar.url)
  ids << member.id
end
json.set! team.id do
  json.extract! team, :id, :name, :manager_id
  json.member_avatars do
    json.array! avatars
  end
  json.member_ids do
    json.array! ids
  end
end
