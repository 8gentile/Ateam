Rails.application.routes.draw do
  get 'teams/memberships'

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show]
    resources :teams, only: [:create, :show, :update]
  end
end
