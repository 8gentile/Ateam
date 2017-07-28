class Event < ActiveRecord::Base

  belongs_to :team

  has_many :comments, as: :commentable
end
