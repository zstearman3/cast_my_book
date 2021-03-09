class Book < ApplicationRecord
  validates_uniqueness_of :title, case_sensitive: false
  
  def create_characters characters
    errors = []
    records = []
    characters.each do |character|
      unless character && character.class == Hash
        errors.push "Invalid attributes for character."
      end
      record = { book_id: id } 
      record.merge!(character)
      record[:created_at] = Time.now
      record[:updated_at] = Time.now
      records << record
    end
    if errors.length < 0
      return [false, errors]
    end
    Character.insert_all(records)
    [true, errors]
  end
  
end
