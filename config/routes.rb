# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: "users/registrations"
  }

  resources :referrals, only: [:index] do
    post "send_email", on: :collection
  end

  get "/signup/:referral_code", to: "registrations#new", as: "new_user_registration_with_referral"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
  get "*path", to: "home#index", via: :all
end
