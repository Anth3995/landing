<?php

$to = "mr.wert2002@gmail.com";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["number"]);

$message = "Имя: $name \nТелефон: $phone \nПочта: $email";
$pagetitle = "Новая заявка с сайта";

$status = mail($to, $pagetitle, $message, "Content-type:text/plain; charset=\"utf-8\"\n From: $to");

if ($status) {
    echo "200";
} else {
    echo "error";
}

?>