<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Include PHPMailer autoloader

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $subject = $_POST["Subject"];
    $email = $_POST["_replyto"];
    $message = $_POST["message"];
    $recipientEmail = $_POST["recipientEmail"];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    //REMOVING SMTP DETAILS FOR SECURITY REASONS
    try {
        // Server settings
        $mail->isSMTP(); // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail/outlook/etc.com'; // Specify your SMTP server
        $mail->SMTPAuth = true; // Enable SMTP authentication
        $mail->Username = 'example@example.com'; // SMTP username
        $mail->Password = 'example_password'; // SMTP password
        $mail->SMTPSecure = 'tls'; // Enable TLS encryption, 'ssl' also accepted
        $mail->Port = 587; // TCP port to connect to

        // Sender info
        $mail->setFrom($email, $name);
        $mail->addReplyTo($email, $name);

        // Recipient
        $mail->addAddress($recipientEmail);

        // Content
        $mail->isHTML(false); // Set email format to plain text
        $mail->Subject = $subject;
        $mail->Body = $message;

        // Send email
        $mail->send();
        echo "Email sent successfully!";
    } catch (Exception $e) {
        echo "Error sending email: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}


?>
