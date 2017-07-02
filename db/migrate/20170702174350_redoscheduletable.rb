class Redoscheduletable < ActiveRecord::Migration
  def change
    remove_column :events, :date
    add_column :events, :start_time, :datetime
    add_column :events, :end_time, :datetime
  end
end
