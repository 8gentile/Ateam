class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title, null: false
      t.boolean :done, default: false 
      t.integer :list_id, null: false 
      t.integer :schedule_id

      t.timestamps
    end

    add_index :items, :list_id
    add_index :items, :schedule_id
  end
end
