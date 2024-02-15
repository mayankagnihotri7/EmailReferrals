# frozen_string_literal: true

class Referral < ApplicationRecord
  belongs_to :referring_user, class_name: "User"

  validates :email, presence: true, format: { with: User::VALID_EMAIL_REGEX }
end
