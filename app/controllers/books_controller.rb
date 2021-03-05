class BooksController < ApplicationController
  
  def new; end
  
  def create
    @book = Book.new(book_params)
    if @book.save
      redirect_to :root
    end
  end
  
  private
  
  def book_params
    params.require(:book).permit(:author, :title)
  end
end
