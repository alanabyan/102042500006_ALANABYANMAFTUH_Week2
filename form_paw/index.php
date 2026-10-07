<?php
// Mengecek apakah form sudah dikirim
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mengambil data dari form
    $nama = $_POST["nama"];
    $email = $_POST["email"];
    $jenis_kelamin = $_POST["jenis_kelamin"];
    $alamat = $_POST["alamat"];
    $telepon = $_POST["telepon"];
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Data Pengguna</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 40px;
        }

        .container {
            max-width: 500px;
            margin: auto;
            background-color: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
            text-align: center;
            margin-bottom: 25px;
        }

        label {
            display: block;
            margin-top: 15px;
            margin-bottom: 5px;
            font-weight: bold;
        }

        input,
        textarea,
        select {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        textarea {
            resize: vertical;
            height: 80px;
        }

        button {
            width: 100%;
            padding: 12px;
            margin-top: 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        .hasil {
            margin-top: 30px;
            padding: 20px;
            background-color: #e9f7ef;
            border-radius: 8px;
        }

        .hasil h3 {
            margin-top: 0;
        }
    </style>
</head>

<body>

<div class="container">

    <h2>Form Data Pengguna</h2>

    <!-- Form Input -->
    <form method="POST" action="">

        <label for="nama">Nama</label>
        <input
            type="text"
            id="nama"
            name="nama"
            required
        >

        <label for="email">Email</label>
        <input
            type="email"
            id="email"
            name="email"
            required
        >

        <label for="jenis_kelamin">Jenis Kelamin</label>
        <select id="jenis_kelamin" name="jenis_kelamin" required>
            <option value="">-- Pilih Jenis Kelamin --</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
        </select>

        <label for="alamat">Alamat</label>
        <textarea
            id="alamat"
            name="alamat"
            required
        ></textarea>

        <label for="telepon">Nomor Telepon</label>
        <input
            type="tel"
            id="telepon"
            name="telepon"
            required
        >

        <button type="submit">Submit</button>

    </form>

    <?php if ($_SERVER["REQUEST_METHOD"] == "POST"): ?>

        <div class="hasil">
            <h3>Data Pengguna</h3>

            <p>
                <strong>Nama:</strong>
                <?= htmlspecialchars($nama) ?>
            </p>

            <p>
                <strong>Email:</strong>
                <?= htmlspecialchars($email) ?>
            </p>

            <p>
                <strong>Jenis Kelamin:</strong>
                <?= htmlspecialchars($jenis_kelamin) ?>
            </p>

            <p>
                <strong>Alamat:</strong>
                <?= htmlspecialchars($alamat) ?>
            </p>

            <p>
                <strong>Nomor Telepon:</strong>
                <?= htmlspecialchars($telepon) ?>
            </p>
        </div>

    <?php endif; ?>

</div>

</body>
</html>