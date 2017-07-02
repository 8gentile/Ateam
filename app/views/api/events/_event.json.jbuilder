json.set! event.id do
  json.extract! event, :id, :title, :notes, :start_time, :end_time, :team_id

  json.comments do
    json.array! event.comments
  end
end