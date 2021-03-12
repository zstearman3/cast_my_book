class CreateActors < ActiveRecord::Migration[6.1]
  def up
    create_table :actors do |t|
      t.string :name
      t.string :imdb_id
      t.string :picture_url
      t.string :fame
      t.string :gender
      t.string :age_range
      t.string :skin_color
      t.string :hair_color
      t.string :body_type
      t.text :personality_types, array: true
      t.timestamps null: true
    end
  end
  
  def down
    drop_table :actors
  end
end
