class Todo < ActiveRecord::Base
  validates :title, presence: true

  belongs_to :team
  belongs_to :user

  has_many :items

end
