class Team < ActiveRecord::Base
  belongs_to :manager,
    primary_key: :id,
    class_name: 'User',
    foreign_key: :manager_id

  has_many :memberships

  has_many :users,
    through: :memberships,
    source: :user


end
