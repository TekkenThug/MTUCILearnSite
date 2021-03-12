<?php
    session_start();

    require_once('db.php'); // Connect to DataBase

    $_POST = json_decode(file_get_contents("php://input"), true); // Decode JSON from Fetch JS

    $login = htmlspecialchars(trim($_POST['login'])); // Get login
    $password = md5(htmlspecialchars(trim($_POST['password']))); // Get password

    $query = mysqli_query($connect, "SELECT `id` FROM `users` WHERE `login`='$login' and `password`='$password'"); // Query to DB

    /* Validate User */
    if (mysqli_num_rows($query) == 1) {
        $_SERVER["user"] = true; 
        $response = [
            "status" => true
        ];

        echo json_encode($response);
    } else {
        $response = [
            "status" => false
        ];

        echo json_encode($response);
    }

