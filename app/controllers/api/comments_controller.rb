class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      if @comment.post
        @post = @comment.post
        render 'api/posts/show'
      end
    else
      render @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.post
      @post = @comment.post
      @comment.destroy
      render 'api/posts/show'
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id, :event_id, :todo_id)
  end
end
