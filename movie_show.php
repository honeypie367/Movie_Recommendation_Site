
<?php
include 'dbcon.php';

if (isset($_POST['genre'])) {
    $genre = $_POST['genre'];

    $query = "SELECT * FROM movies WHERE genre = '$genre' ORDER BY imdb_rating DESC";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        echo "<table border='1'>
                <tr>
                    <th>Movie Name</th>
                    <th>Director</th>
                    <th>Release Year</th>
                    <th>IMDB Rating</th>
                </tr>";

        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>{$row['name']}</td>
                    <td>{$row['director']}</td>
                    <td>{$row['release year']}</td>
                    <td>{$row['imdb_rating']}</td>
                </tr>";
        }

        echo "</table>";
    } else {
        echo "No movies found in this genre.";
    }
}

$conn->close();
?>
