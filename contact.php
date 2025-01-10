<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Recipient email
    $to = "tshiamomatlhamesehoole@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission: " . $subject;

    // Email content
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\nMessage: $message";

    // Headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message sending failed.";
    }
}
?>
