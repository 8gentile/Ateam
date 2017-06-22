json.array! @teams do |team|
  json.extract! team, :name, :manager_id
end
