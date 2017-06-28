class Api::ItemsController < ApplicationController
  def create
    @item = Item.new(item_params)
    if @item.save 
      @todo = Todo.find_by(id: @item.todo_id)
      render 'api/todos/show'
    else 
      render json: @item.errors.full_messages, status: 422
    end
  end

  def update
    @item = Item.find_by(id: params[:id])
    if @item.update(item_params)
      @todo = @item.todo
      render 'api/todos/show'
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def destroy
    
  end

  private 
  def item_params
    params.require(:item).permit(:title, :todo_id, :schedule_id, :done)
  end
end
