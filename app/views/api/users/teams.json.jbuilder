@teams.each do |team|
  json.partial! 'api/users/team', team: team
end
