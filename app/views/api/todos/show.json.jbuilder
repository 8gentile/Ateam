json.extract! @todo, :id, :title, :body, :done, :user_id, :team_id

json.items do 
  json.array! @todo.items do | item |
    json.partial! 'api/todos/item', item: item
  end
end



# if @todo.items.empty?
#   json.items []
# else
#   json.items do
#     @todo.items.map do |item|
#       json.partial! 'api/todos/item', item: item
#     end
#   end
# end
