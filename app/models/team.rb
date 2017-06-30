class Team < ActiveRecord::Base
  belongs_to :manager,
    primary_key: :id,
    class_name: 'User',
    foreign_key: :manager_id

  has_many :memberships

  has_many :members,
    through: :memberships,
    source: :user

  has_many :todos

  has_many :posts

  has_many :events

end
