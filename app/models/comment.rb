class Comment < ActiveRecord::Base
	belongs_to :user

	belongs_to :post
  belongs_to :event
  belongs_to :todo
end
