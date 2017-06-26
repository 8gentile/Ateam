class Api::UsersController < ApplicationController


  def show
    @user = User.find(params[:id])
    @users = @user.teammates
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render 'api/sessions/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      @users = @user.teammates
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user_id = params[:id]
    @team_id = params[:team_id]
    @membership = Membership.all.select{|m| m[:team_id] == @team_id.to_i && m[:user_id] == @user_id.to_i}.first
    @membership.destroy!
    @users = current_user.teammates
    @team = Team.find_by(id: @team_id)
    render 'api/teams/show'
  end

  private
  def user_params
    params.require(:user).permit(:email, :fname, :lname, :password, :avatar)
  end
end
