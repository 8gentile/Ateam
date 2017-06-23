class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      session_params[:email],
      session_params[:password]
    )

    if @user
      log_in(@user)
      render 'api/sessions/show'
    else
      render json: ["Sorry, we don’t recognize that email or password."], status: 422
    end
  end

  def destroy
    if current_user
      log_out!
      render json: {}
    else
      render json: "No current_user", status: 404
    end
  end

  private
  def session_params
    params.require(:user).permit(:email, :password)
  end
end
