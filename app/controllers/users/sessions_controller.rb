# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token, only: :create

  respond_to :json

  def create
    user = User.find_for_database_authentication(email: user_params[:email])

    if invalid_password?(user)
      render_invalid_password_error
    else
      handle_successful_sign_in(user)
    end
  end

  def destroy
    sign_out(current_user)
    reset_session
    render json: { notice: I18n.t("devise.sessions.signed_out"), reset_session: true }, status: :ok
  end

  private

    def user_params
      params.require(:user).permit(:email, :password)
    end

    def invalid_password?(user)
      user.blank? || !user.valid_password?(user_params[:password])
    end

    def render_invalid_password_error
      render json: { error: I18n.t("sessions.failure.invalid") }, status: :unprocessable_entity
    end

    def handle_successful_sign_in(user)
      sign_in(user)

      render json: { notice: I18n.t("devise.sessions.signed_in"), user:, is_signed_in: user_signed_in? }, status: :ok
    end
end
