class Api::TeamsController < ApplicationController

  def index
    @teams = current_user.teams
  end

  def show
    @team = Team.find(params[:id])
    # render "api/teams/#{@team.id}"
  end

  def create
    @team = Team.new(team_params)
    if @team.save
      @membership = Membership.new({ user_id: @team.manager_id, team_id: @team.id })
      @membership.save
      @teams = @membership.user.teams
      render 'api/users/teams'
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def update
    # implement Friday
  end

  private
  def team_params
    params.require(:team).permit(:name, :manager_id)
  end
end
