<?php 
 $connect = mysqli_connect('localhost', 'root', 'root', 'mtucilearn');
 
 if (!$connect) {
   die("Connect to DB failed");
 }
?>