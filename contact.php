<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
, leave some feedback, or just connect with me 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

  
    $to = "tshiamomatlhamesehoole@gmail.com"; 
    $subject = "New Contact Form Submission: " . $subject;


    $body = "Name: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\nMessage: $message";


    $headers = "From: $email";


    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message sending failed.";
    }
}
?>
