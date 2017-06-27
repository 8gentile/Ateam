class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title, null: false
      t.boolean :done, default: false 
      t.integer :todo_id, null: false 
      t.integer :schedule_id

      t.timestamps null: false
    end

    add_index :items, :todo_id
    add_index :items, :schedule_id
  end
end
