class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|  
      t.string :title, null: false
      t.text :body
      t.integer :team_id
      t.integer :user_id
      t.timestamps null: false
    end

    add_index :posts, :team_id
    add_index :posts, :user_id
  end
end
