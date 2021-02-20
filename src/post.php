<?php


  $name = $_GET["name"];
  $email = $_GET["email"];
  $message = $_GET["message"]

  if($name === '' || $email === '' || $message === ''){
    echo json_encode('Fild empty');
  }else{
    mail("angel.e.diaz.b@gmail.com","New message from website", "This is a test message")
    echo json_encode('success');
  }
?>