Rails.application.routes.draw do
  devise_for :users
  
  root to: "static_pages#home"
  
  resources :books, only: [:new, :create]
  resources :actors, only: [:new, :create, :edit, :update]
  resources :casts, only: [:new, :create]
end
