<?php
include 'config.php';
include 'libs/rb-mysql.php';


$connect = R::setup( 
   'mysql:host='.$config['db']['server'].';
    dbname='.$config['db']['name'].'',
    $config['db']['username'],
    $config['db']['password']
);

if ( !R::testConnection() )
{
   exit('Нет подключения к базе данных!');
}


?>