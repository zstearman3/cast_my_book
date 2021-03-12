class CreateRoles < ActiveRecord::Migration[6.1]
  def change
    create_table :roles do |t|
      t.belongs_to :cast
      t.belongs_to :actor
      t.belongs_to :character
      t.timestamps
    end
  end
end
