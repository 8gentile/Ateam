class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render 'api/comment/show'
    else

    end
  end

  def destroy

  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id, :event_id, :todo_id)
  end
end
