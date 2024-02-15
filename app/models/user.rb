# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable

  has_many :referrals, foreign_key: :referring_user_id, dependent: :destroy
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 10 }
  validates :first_name, :last_name,
    presence: true,
    format: { with: /\A[a-zA-Z\s]+\z/ },
    length: { maximum: 20 }

  before_create :generate_referral_code

  def full_name
    "#{first_name} #{last_name}"
  end

  private

    def generate_referral_code
      self.referral_code = SecureRandom.hex(6)
    end
end
