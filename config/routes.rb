Rails.application.routes.draw do
  resources :diagrams

  root 'home#index', as: :home
end
