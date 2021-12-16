<?php

function getNewProducts(){
  $products = R::getAll("SELECT * FROM `products` ORDER BY `pubdate` DESC LIMIT 8");

  echo json_encode($products);
  return json_encode($products);
}

function getNewCollectionProductsPreview(){
  $products = R::getAll("SELECT * FROM `products` LIMIT 3");
  
  echo json_encode($products);
  return json_encode($products);
  
}

function signIn($data){
  $user = R::getAll("SELECT * FROM `users` WHERE `login` = ? AND `password` = ?", array($data['login'], $data['password']));

  echo  json_encode($user);
  return json_encode($user);
}

function resetPassword($email){
  $chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  $subject = 'Новый пароль';
  $newPassword = substr( str_shuffle($chars), 0, 16 );
  $to = $email['email'];
  
  mail($to, $subject, $newPassword);

  $user = R::findOne('users', '`email` = ?', array($to));
  $user->password = $newPassword;
  R::store($user);

}
?>