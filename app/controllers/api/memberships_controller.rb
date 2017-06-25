class Api::MembershipsController < ApplicationController

  def create
    
  end

  def destroy
    
  end

  private
  def member_params
    params.require(:member).permit(:user_id, :team_id)
  end

end
