
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "movies_list";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

// Store the connection in a variable
$connection = $conn;
?>
