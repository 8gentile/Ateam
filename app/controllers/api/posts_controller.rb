class Api::PostsController < ApplicationController
	def index
		@team = Team.find(params[:team_id])
		@posts = @team.posts 
	end
end
