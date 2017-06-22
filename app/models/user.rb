class User < ActiveRecord::Base
  validates :email, uniqueness: true
  validates :email, :password_digest, :session_token, :fname, :lname, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :avatar, default_url: "defaultAvatar.svg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  has_many :memberships

  has_many :teams,
    through: :memberships,
    source: :team

  attr_reader :password

  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    token = User.generate_session_token
    self.update!(session_token: token)
    token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

end
