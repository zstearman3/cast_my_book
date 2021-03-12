class AddSearchValues < ActiveRecord::Migration[6.1]
  def up
    add_column :books, :search_value, :string
    add_column :actors, :search_value, :string
  end
  
  def down
    remove_column :books, :search_value
    remove_column :actors, :search_value
  end
end
