<?php
session_start();
if ($_SERVER['user']) {
    header('Location: /app/dashboard.php');
}
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MTUCILearn Login</title>

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="css/style.min.css">
</head>

<body>

    <header class="header">
        <div class="header__login">
            <div class="header__login-tabs">
                <a class="header__login-tab active" href="#">Модератор</a>
                <a class="header__login-tab disabled" href="#">Администратор</a>
            </div>
            <div class="header__login-forms">
                <form action="" class="header__login-form">
                    <label class="header__login-label">
                        <span class="signature">Логин</span>
                        <input name="login" type="text" required placeholder="Введите ваш логин">
                        <p class="msg-error login"></p>
                    </label>
                    <label class="header__login-label">
                        <span class="signature">Пароль</span>
                        <input name="password" type="password" required placeholder="Введите ваш пароль">
                        <p class="msg-error password"></p>
                    </label>
                    <button class="header__login-submit">Войти</button>
                    <p class="msg-error form"></p>
                </form>
            </div>
        </div>
        <div class="header__logo">
            <img src="images/content/logo.png" alt="Логотип">
        </div>
    </header>

    <script src="js/main.min.js"></script>
</body>

</html>