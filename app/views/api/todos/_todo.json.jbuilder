json.set! todo.id do
  json.extract! todo, :id, :title, :body, :done, :user_id, :team_id
  json.items do 
    json.array! todo.items do | item |
      json.partial! 'api/todos/item', item: item
    end
  end
end
