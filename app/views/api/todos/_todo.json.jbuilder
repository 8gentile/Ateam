json.set! todo.id do
  json.extract! todo, :id, :title, :body, :done, :user_id, :team_id
end
