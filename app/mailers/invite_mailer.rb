class InviteMailer < ApplicationMailer

  def invitation_email email
    mail(to: email, subject: "Your Ateam Invitation")
  end
end
