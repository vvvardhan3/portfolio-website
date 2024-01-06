function foo(name, email, message) {
    mail_text = "You have a mail from " + name + " their email address is: " + email.value + " Here's what they wrote" + message.value;
    subject = "Inquiry";
    window.open('mailto:vankayalapativ4@gmail.com?subject=subject&body=mail_text');
    return true;
 }