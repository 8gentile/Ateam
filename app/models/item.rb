class Item < ActiveRecord::Base
  validates :title, :todo_id, presence: true
  
  belongs_to :todo

  has_one :team,
    through: :todo,
    source: :team
end
