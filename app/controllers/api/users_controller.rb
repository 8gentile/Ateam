class Api::UsersController < ApplicationController

  def index
    @user = User.find(params[:id])
    @users = @user.teammates
  end

  # def index
  #   @user = User.find(params[:id])
  # end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render :show
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

  private
  def user_params
    params.require(:user).permit(:email, :fname, :lname, :password, :avatar)
  end
end
