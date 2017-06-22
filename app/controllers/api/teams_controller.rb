class Api::TeamsController < ApplicationController

  def show
    @team = Team.find(params[:id])
  end

  def create
    @team = Team.new(team_params)
    if @team.save
      @membership = Membership.new({ user_id: @team.manager_id, team_id: @team.id })
      debugger
      @membership.save
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def update

  end

  private
  def team_params
    params.require(:team).permit(:name, :manager_id)
  end
end
