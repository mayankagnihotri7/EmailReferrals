# frozen_string_literal: true

class CreateReferrals < ActiveRecord::Migration[7.0]
  def change
    create_table :referrals do |t|
      t.string :email
      t.references :referring_user, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
