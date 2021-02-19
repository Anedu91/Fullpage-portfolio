<?php


  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"]

  if($name === '' || $email === '' || $message === ''){
    echo json_encode('Fild empty');
  }else{
    mail("angel.e.diaz.b@gmail.com","New message from website", "This is a test message")
    echo json_encode('success');
  }
?>