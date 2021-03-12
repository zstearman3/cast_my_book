class AddUniquenessToActorName < ActiveRecord::Migration[6.1]
  def up
    add_index :actors, :name, unique: true
  end
end
