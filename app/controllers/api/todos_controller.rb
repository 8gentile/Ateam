class Api::TodosController < ApplicationController
  def index
    @team = Team.find_by(id: params[:team_id])
    @todos = @team.todos
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render 'api/todos/show'
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def show
    @todo = Todo.find_by(id: params[:id])
    render 'api/todos/show'
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy!
    render 'api/todos/show'
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :user_id, :team_id)
  end

end
