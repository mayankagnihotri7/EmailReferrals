# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable

  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  MAX_EMAIL_LENGTH = 255
  MAX_NAME_LENGTH = 20
  MIN_PASSWORD_LENGTH = 6

  has_many :referrals, foreign_key: :referring_user_id, dependent: :destroy

  validates :email, presence: true,
    uniqueness: { case_sensitive: false },
    length: { maximum: MAX_EMAIL_LENGTH },
    format: { with: VALID_EMAIL_REGEX }

  validates :password, length: { minimum: MIN_PASSWORD_LENGTH }

  validates :first_name, :last_name,
    presence: true,
    format: { with: /\A[a-zA-Z\s]+\z/ },
    length: { maximum: MAX_NAME_LENGTH }

  before_create :generate_referral_code

  def full_name
    "#{first_name} #{last_name}"
  end

  private

    def generate_referral_code
      self.referral_code = SecureRandom.hex(6)
    end
end
