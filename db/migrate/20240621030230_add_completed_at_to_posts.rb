class AddCompletedAtToPosts < ActiveRecord::Migration[7.1]
  def change
    add_column :posts, :completed_at, :datetime
  end
end
