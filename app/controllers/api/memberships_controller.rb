class Api::MembershipsController < ApplicationController

  def create
    @user_id = User.find_user_id_by_email(params[:email][:member][:email])
    @membership = Membership.new({ user_id: @user_id, team_id: params[:email][:member][:team_id] })
    if @membership.save
      @users = current_user.teammates
      render 'api/users/show'
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

end
