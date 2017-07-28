class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      case @comment.commentable_type
      when "Post"
        @post = @comment.post
        render 'api/posts/show'
      when "Todo"
        @todo = @comment.todo
        render 'api/todos/show'
      else
        render @comment.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    debugger
    if @comment.post
      @post = @comment.post
      @comment.destroy
      render 'api/posts/show'
    elsif @comment.todo
      @todo = @comment.todo
      @comment.destroy
      render 'api/todos/show'
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :commentable_type, :commentable_id)
  end
end
