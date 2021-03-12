class StaticPagesController < ApplicationController
  def home
    @books = Book.order(:title).select(:id, :title, :author, :search_value)  
  end
end
