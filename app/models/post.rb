class Post < ActiveRecord::Base
	belongs_to :user
	belongs_to :team

	has_many :comments, as: :commentable
end
