class Api::TodosController < ApplicationController
  def index
    @team = Team.find_by(id: params[:team_id])
    @todos = @team.todos
  end

  def create
    @list = Todo.new(todo_params)
    if @list.save
      render json: @list
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def show
    @todo = Todo.find_by(id: params[:id])
    render 'api/todos/show'
  end

  def update

  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :user_id, :team_id)
  end

end
