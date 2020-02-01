<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../class/PHPMailer-master/src/PHPMailer.php';
require '../class/PHPMailer-master/src/Exception.php';
require '../class/PHPMailer-master/src/SMTP.php';

$_POST = json_decode(file_get_contents('php://input'), true);

$nomeUser = filter_var($_POST['nome'], FILTER_SANITIZE_SPECIAL_CHARS);
$emailUser = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$mensagemUser = filter_var($_POST['mensagem'], FILTER_SANITIZE_SPECIAL_CHARS);

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';                       // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'qualquer gmail';                     // SMTP username
    $mail->Password   = 'sua senha';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('qualquer gmail');
    $mail->addAddress('qualquer gmail');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contato do site';
    $mail->Body    = "Nome: {$nomeUser} <br> E-mail: {$emailUser} <br> Mensagem: {$mensagemUser}";
    
    if($mail->send()){
        echo json_encode(array(
            'status' => 'Enviado com sucesso!'
        ));
    }else{
        echo json_encode(array(
            'status' => 'Não foi possível enviar a mensagem!'
        ));
    }

} catch (Exception $e) {
    echo json_encode(array(
        'status' => "Ocorreu um erro inesperado. Mailer Error: {$mail->ErrorInfo}"
    ));
}