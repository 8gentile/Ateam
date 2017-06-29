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

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render 'api/posts/show'
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :body, :user_id, :team_id)
  end
end
