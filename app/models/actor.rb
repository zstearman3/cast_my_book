class Actor < ApplicationRecord
  before_save :set_search_value
  
  validates :name, uniqueness: true
  
  private
  
  def set_search_value
    self.search_value = self.name.downcase if self.name.present?
  end
  
end
