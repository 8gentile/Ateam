class Api::PostsController < ApplicationController
	def index
		@team = Team.find(params[:team_id])
		@posts = @team.posts
	end

  def create
    @post = Post.new(post_params)
    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
  end


  private
  def post_params
    params.require(:post).require(:title, :body, :user_id, :team_id)
  end
end
