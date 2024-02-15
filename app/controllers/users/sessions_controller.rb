# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  respond_to :json

  def respond_with(user, _opts = {})
    if user.errors.present?
      render json: { error: user.errors }, status: :unprocessable_entity
    else
      render json: { notice: "Logged in successfully!", is_signed_in: user_signed_in? }, status: :ok
    end
  end
end
