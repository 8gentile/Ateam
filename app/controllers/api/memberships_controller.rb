class Api::MembershipsController < ApplicationController

  def create
    @email = params[:email][:member][:email]
    @user = User.find_by_email(@email)
    if @user
      @membership = Membership.new({ user_id: @user.id, team_id: params[:email][:member][:team_id] })
      if @membership.save
        @users = current_user.teammates
        render 'api/users/show'
      else
        render json: @membership.errors.full_messages, status: 422
      end
    else
      InviteMailer.invitation_email(@email).deliver_now
      Invite.create({email: @email, team_id: params[:email][:member][:team_id], pending: true})
      @users = current_user.teammates
      render 'api/users/show'
    end
  end

end
