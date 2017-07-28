class ChangeCommentsTable < ActiveRecord::Migration
  def change
    drop_table :comments

    create_table :comments do |t|
      t.string :body
      t.references :commentable, polymorphic: true, index: true
      t.timestamps
    end

    add_index :comments, [:body, :commentable_id, :commentable_type], unique: true
  end
end
