Rails.application.routes.draw do
  get 'teams/memberships'

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create, :update, :show, :destroy] do
      resources :teams, only: [:index]
    end
    resources :teams, only: [:create, :show, :update, :edit] do
      resources :todos, except: [:destroy, :create] do 
        resources :items, only: [:update]
      end
      resources :posts, only: [:index]
      #schedule
      #docs
      #campfire
    end
    resources :memberships, only: [:create]
    resources :todos, only: [:destroy, :create]
    resources :items, only: [:destroy, :create]
    resources :posts, only: [:destroy, :create, :update, :show]
  end
end
