json.set! team.id do
  json.extract! team, :id, :name, :manager_id
end
