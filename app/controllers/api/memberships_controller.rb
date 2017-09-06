class Api::MembershipsController < ApplicationController

  def create
    debugger
    # @user_id = User.find_user_id_by_email(params[:email][:member][:email])
    @user = User.find_by_email(params[:email][:member][:email])
    debugger
    if @user
      @membership = Membership.new({ user_id: @user.id, team_id: params[:email][:member][:team_id] })
      if @membership.save
        @users = current_user.teammates
        render 'api/users/show'
      else
        render json: @membership.errors.full_messages, status: 422
      end
    else
      # mailgun logic
      # create new invite
      Invite.create({email: params[:email][:member][:email], team_id: params[:email][:member][:team_id], pending: true})
    end
  end

end
