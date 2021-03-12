require 'pry'
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
    
  def create
    @cast = Cast.new(cast_params)
    roles = JSON.parse(params[:roles])
    binding.pry
  end
  
  private 
  
  def cast_params
    params.require(:cast).permit(:book_id, :user_id, :roles)
  end
end
