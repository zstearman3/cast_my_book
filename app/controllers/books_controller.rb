class BooksController < ApplicationController
  
  def new; end
  
  def create
    @book = Book.new(book_params)
    if @book.save
      characters = JSON.parse(params[:characters])
      characters_insertted = @book.create_characters(characters)
      if characters_insertted[0]
       redirect_to :root, notice: "Book added!"
      else
       errors = characters_insertted[1]
       flash.now[:alert] = errors
      end
    end
  end
  
  private
  
  def book_params
    params.require(:book).permit(:author, :title, :characters)
  end
end
