class UserMailer < ApplicationMailer
  default from: 'cats@cats.com'
  def welcome_email(user)
    @user = user
    url = 'localhost3000/session/new'
    mail(to: user.email, subject: 'Welcome')
  end

  
end
