<?php


function createUser($data){
  $user = R::dispense('users');
  $user->name = $data['name'];
  $user->surname = $data['surname'];
  $user->login = $data['login'];
  $user->email = $data['email'];
  $user->password = $data['password'];
  $user->is_admin = $data['is_admin'];
  R::store($user);
}

function createProduct($data){
  $fp = fopen('test.txt', 'a+');
  fwrite($fp, json_encode( $data ));

  $product = R::dispense('fdghjk');
  $product->name = $data['product_name'];
  $product->cost = $data['cost'];
  $product->collection = $data['collection'];
  $product->watch_mechanism = $data['watch_mechanism'];
  $product->body_material = $data['body_material'];
  $product->main_insert = $data['main_insert'];
  $product->bracelet_material = $data['bracelet_material'];
  $product->waterproof = $data['waterproof'];
  $product->shockproof_body = $data['shockproof_body'];
  $product->sample = $data['sample'];
  $product->gender = $data['gender'];
  $product->dial_color = $data['dial_color'];
  $product->bracelet_color = $data['bracelet_color'];
  $product->style = $data['style'];
  $product->country_of_mechanism = $data['country_of_mechanism'];
  $product->availability = $data['availability'];
  $product->description = $data['description'];
  $product->product_image = $data['product_image'];
  $product->pubdate = $data['pubdate'];
  R::store($product);
}

function createComment($data){
  $fp = fopen('test.txt', 'a+');
  fwrite($fp, json_encode( $data ));
}


?>