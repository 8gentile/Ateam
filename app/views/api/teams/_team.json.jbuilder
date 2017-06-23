ids = []
team.members.each do |member|
  ids << member.id
end
json.set! team.id do
  json.extract! team, :id, :name, :manager_id
  json.member_ids do
    json.array! ids
    # json.array! team.members do |member|
    #   debugger
    #   member.id
    # end
  end
end
