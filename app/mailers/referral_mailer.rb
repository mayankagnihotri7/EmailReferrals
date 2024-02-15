# frozen_string_literal: true

class ReferralMailer < ApplicationMailer
  def send_referral_email(email, referring_user)
    @referring_user = referring_user
    mail(to: email, subject: "Invitation to join our platform")
  end
end
