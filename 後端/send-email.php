<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to_email = "baredragon0@gmail.com"; // 更改為您的電子郵件地址
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  $subject = "New message from your website";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";
  
  if (mail($to_email, $subject, $body, $headers)) {
    echo "訊息已成功發送！";
  } else {
    echo "發送訊息時出錯。請稍後再試。";
  }
} else {
  echo "無效的請求。";
}
?>