# frozen_string_literal: true

class ReferralsController < ApplicationController
  before_action :authenticate_user!

  def send_referral_email
    email = params[:email]
    referral = current_user.referrals.new(email:)

    if referral.save
      ReferralMailer.send_referral_email(email, current_user).deliver_now
      render status: :ok, json: { notice: "Referral code sent successfully!" }
    else
      render status: :unprocessable_entity,
        json: { error: "Failed to send referral email", errors: referral.errors.full_messages }
    end
  end

  def index
    @referrals = current_user.referrals
    render json: { referrals: @referrals }
  end
end
