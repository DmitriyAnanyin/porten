<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

require 'includes/connect.php';
require 'includes/functions/GET_functions.php';
require 'includes/functions/POST_functions.php';

$type = $_GET['q'];

//GET

if ($type === 'new_products')
{
  getNewProducts();
} elseif ($type === 'new_collection_products_preview')
{
  getNewCollectionProductsPreview();
};

//AUTH

if ($type === 'create_person')
{
  if ($_POST)
  {  
    createUser($_POST);
  }
  
} elseif ($type === 'sign_in')
{
  signIn($_GET);
} elseif ($type === 'reset_password') 
{
  resetPassword($_GET);
}

//

if ($type === 'create_product') 
{
  createProduct($_POST);
} 

if ($type === 'create_comment') 
{
  createComment($_POST);
}









?>
