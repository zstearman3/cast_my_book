class CastsController < ApplicationController
  def new
    @book = Book.select(:id, :title, :author)
                .find(params[:book_id]) if params[:book_id]
    unless @book.present?
      redirect_to :root, alert: "Please Select Book"
      return
    end
    @characters = Character.priority_order.where(book_id: @book.id).select(:id, :name)
    @actors = Actor.order(:name).select(:id, :name, :picture_url, :search_value)
  end
    
  def create; end
end
