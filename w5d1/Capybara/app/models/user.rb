class User < ApplicationRecord
  validates :username, :password_digest, presence:true
  validates :password, length: {maximum:6, allow_nil:true}

  def reset_session_token
  end

  def password=(password)
  end

  def is_password?(password)
  end

  def find_by_params(username, password)
  end
  
  private
  def ensure_session_token
  end
end
