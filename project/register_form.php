<?php

@include 'config.php';

if(isset($_POST['submit'])){

   $name = mysqli_real_escape_string($conn, $_POST['name']);
   $email = mysqli_real_escape_string($conn, $_POST['email']);
   $pass = md5($_POST['password']);
   $cpass = md5($_POST['cpassword']);
   $user_type = $_POST['user_type'];

   $select = " SELECT * FROM user_form WHERE email = '$email' && password = '$pass' ";

   $result = mysqli_query($conn, $select);

   if(mysqli_num_rows($result) > 0){

      $error[] = 'user already exist!'; 

   }else{

      if($pass != $cpass){
         $error[] = 'password not matched!';
      }else{
         $insert = "INSERT INTO user_form(name, email, password, user_type) VALUES('$name','$email','$pass','$user_type')";
         mysqli_query($conn, $insert);
         header('location:login_form.php');
      }
   }

};


?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>register form</title>

   <!-- custom css file link  -->
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
      <h3>Register</h3>
      <h6>Hi,Welcome👋</h6>
      <?php
      if(isset($error)){
         foreach($error as $error){
            echo '<span class="error-msg">'.$error.'</span>';
         };
      };
      ?>
      <h4>Usename</h4>
      <input type="text" name="name" required placeholder="Enter Username">
      <h4>Email</h4>
      <input type="email" name="email" required placeholder="E.g. Kalana@gmail.com">
      <h4>Password</h4>
      <div class="password-container">
   
    <input type="password" class="password-input" id="landlordPasswordInput" name="password" placeholder="Enter  password">
     
    <button class="password-toggle" onmousedown="togglePassword('landlordPasswordInput', event)">
        <ion-icon name="eye-off-outline"></ion-icon>
    </button>
</div>
       

      <h4>Re-Password</h4>
      <div class="password-container">
    <!-- Renter password input field -->
    <input type="password" class="password-input" id="renterPasswordInput"  name="cpassword" placeholder="Renter password">
    <!-- Renter toggle button -->
    <button class="password-toggle" onmousedown="togglePassword('renterPasswordInput', event)">
        <ion-icon name="eye-off-outline"></ion-icon>
    </button>
</div>
      <h4>Privilege</h4>
      <select name="user_type">
         <option value="admin">Admin</option>
         <option value="user">User</option>
         
      </select>
      <input type="submit" name="submit" value="register now" class="form-btn">
      <p>already have an account? <a href="login_form.php">login now</a></p>
   </form>

</div>
<script>
    function togglePassword(inputId, event) {
        event.preventDefault(); // Prevent default behavior of button click
        var passwordInput = document.getElementById(inputId);
        var passwordToggle = document.querySelector('#' + inputId + ' ~ .password-toggle ion-icon');
        
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