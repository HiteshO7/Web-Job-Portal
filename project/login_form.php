<?php

@include 'config.php';

session_start();

$error = []; // Initialize an empty array for errors

if(isset($_POST['submit'])){

   // Check if the keys exist in $_POST before accessing them
   $name = isset($_POST['name']) ? mysqli_real_escape_string($conn, $_POST['name']) : '';
   $email = isset($_POST['email']) ? mysqli_real_escape_string($conn, $_POST['email']) : '';
   $pass = isset($_POST['password']) ? md5($_POST['password']) : '';
   $cpass = isset($_POST['cpassword']) ? md5($_POST['cpassword']) : '';
   $user_type = isset($_POST['user_type']) ? $_POST['user_type'] : '';

   $select = " SELECT * FROM user_form WHERE email = '$email' && password = '$pass' ";

   $result = mysqli_query($conn, $select);

   if(mysqli_num_rows($result) > 0){

      $row = mysqli_fetch_array($result);

      if($row['user_type'] == 'admin'){

         $_SESSION['admin_name'] = $row['name'];
         header('location:JobSeek_Admin.html');

      }elseif($row['user_type'] == 'user'){

         $_SESSION['user_name'] = $row['name'];
         header('location:JobSeek_User.html');

      }
     
   }else{
      $error[] = 'incorrect email or password!';
   }

}

?>


<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>login form</title>
   <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
     
   <link rel="stylesheet" href="css/style.css">

</head>
<body>
<header>
        <div class="navbar">
            <div class="logo"><ion-icon name="prism" class="lo"></ion-icon> <a href="" class="loo">JobSeek</a> </div>
        </div>
    </header>
   
<div class="form-container">

   <form action="" method="post">
      <h3>Login</h3>
      <h6>Hi,Welcome back 👋</h6>
      <?php
      if(isset($error)){
         foreach($error as $error){
            echo '<span class="error-msg">'.$error.'</span>';
         };
      };
      ?>
      <div class="google"><img src="pic/g.png" alt=""><p class="loginp">Login with Google</p></div>
      <div class="line"><div class="straight-line"></div><p> or login with Email </p><div class="straight-line"></div></div>
      <h4>Email</h4>
      <input type="email" name="email" required placeholder="E.g. Kalana@gmail.com">
      <h4>Password</h4>
      <div class="password-container"> 
         <input type="password" class="password-input" id="passwordInput" name="password" placeholder="Enter your password"> 
         <button class="password-toggle" onmousedown="togglePassword(event)">
            <ion-icon name="eye-off-outline"></ion-icon>
         </button>
      </div>
      <input type="submit" name="submit" value="login now" class="form-btn">
      <p>don't have an account? <a href="register_form.php">register now</a></p>
   </form>

</div>
<script>
    function togglePassword(event) {
        event.preventDefault(); 
        var passwordInput = document.getElementById("passwordInput");
        var passwordToggle = document.querySelector('.password-toggle ion-icon');
        
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordToggle.setAttribute('name', 'eye-outline');
        } else {
            passwordInput.type = "password";
            passwordToggle.setAttribute('name', 'eye-off-outline');
        }
    }
</script>
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>