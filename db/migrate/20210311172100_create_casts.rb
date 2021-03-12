class CreateCasts < ActiveRecord::Migration[6.1]
  def change
    create_table :casts do |t|
      t.belongs_to :user
      t.belongs_to :book
      t.timestamps null: true
    end
  end
end
