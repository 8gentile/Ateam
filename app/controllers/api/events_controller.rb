class Api::EventsController < ApplicationController

  def index
    @events = Team.find(params[:team_id]).events
  end

  private
  def event_params
    params.require(:date).permit(:title, :notes, :team_id, :date)
  end
end
