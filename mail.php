<?php

//This File Sends the Contact form through email to you, then redirects the user to another page

/* Which address do you want the message to go to? */
$reciever_email = 'your-email@your-domain.com';

$redirection = 'index.html'; /* This is the default setting, (your home page). It is recommended you create a special page informing the user that the message was sent successfully */

//Information from the Form

$name = $_REQUEST['name'] ;
$email = $_REQUEST['email'] ;
$website = $_REQUEST['website'] ;
$contact_message = $_REQUEST['message'] ;


$email_message = "This is a message from: " . $name . ", their website is: " . $website . ", and here's what they have to say: " . $contact_message;
$subject = 'Message From: ' . $name;
$headers = "From: $email";

//If message is not blank

if($contact_message != ""){
	
//Send the Mail

mail($reciever_email, $subject, $email_message, $headers);

//Redirect The User

header("Location: $redirection");
}

//If the message is blank

else { ?>

<html>
<head>
<title>Sorry, There's been an error.</title>
</head>
<body>
<h1>Sorry</h1>
<p>Sorry, but you must type a message.</p>
</body>
</html>

<?php } ?>