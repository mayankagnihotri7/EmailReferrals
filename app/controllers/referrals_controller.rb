# frozen_string_literal: true

class ReferralsController < ApplicationController
  before_action :authenticate_user!

  def send_email
    email = referral_params[:email]
    referral = current_user.referrals.new(email:)

    if referral.save
      ReferralMailer.send_referral_email(email, current_user).deliver_now
      render status: :ok, json: { notice: "Referral code sent to #{email}!" }
    else
      render status: :unprocessable_entity,
        json: { error: "Failed to send referral email", errors: referral.errors.full_messages.to_sentence }
    end
  end

  def index
    @referrals = current_user.referrals
    render status: :ok, json: { referrals: @referrals.pluck(:email) }
  end

  private

    def referral_params
      params.require(:referral).permit(:email)
    end
end
