class CreateCharacters < ActiveRecord::Migration[6.1]
  def up
    create_table :characters do |t|
      t.string :name
      t.string :role
      t.string :gender
      t.string :age_range
      t.string :skin_color
      t.string :hair_color
      t.string :body_type
      t.string :personality_type
      t.belongs_to :book
      t.timestamps
    end
  end
  
  def down
    drop_table :characters
  end
end
