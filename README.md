# uas-galileo
Disini saya membuat aplikasi CRUD sederhana menggunakan react-native dan database firebase.

![home](https://github.com/galileogarin/uas-galileo/assets/138579426/93beb1f8-50a4-42e8-9d6c-961e14e40e5e)


Konfigurasi
1. Saya menggunakan VsCode dalam penulisan dan melakukan uji coba react-app.
   
   pastikan firebase telah ditambahkan pada react app dengan perintah npm intsall firebase
   koneksikan juga database firebase ke dalam react-app.
   
   setelah konfigurasi beres, jalankan aplikasi dengan perintah npm start, dan apabila menu expo muncul pilih w untuk menampilkan preview aplikasi pada web browser  
![how to run](https://github.com/galileogarin/uas-galileo/assets/138579426/4d920583-e658-446c-95fc-917f77b0b6fd)

3. Konfigurasikan database (firebase)
   
   Disini saya membuat database bernama leo-uas dengan collections users untuk menampung data user/kontak pada aplikasi
   ![firebase](https://github.com/galileogarin/uas-galileo/assets/138579426/e5a81f4f-0d8d-4baf-b842-a295deb175de)

Panduan untuk menjalankan
Pada halaman utama akan tampil list dari user

![kontak hapus berhasil](https://github.com/galileogarin/uas-galileo/assets/138579426/b413b734-e435-458a-8ffb-1fbe9a055a19)

Untuk menambahkan data kontak / user, pilih button tambah kontak 
setelah itu, akan tampil menu tambah kontak yang dapat diisikan value nama, email dan nomor telpon. pilih simpan.

![add kontak](https://github.com/galileogarin/uas-galileo/assets/138579426/7ae5b14b-ca39-447d-8b02-ee2e0240adbb)

kemudian untuk melakukan edit (Hapus dan Update data kontak), pilih salah satu kontak yang diinginkan pada menu utama, lalu edit field data yang ingin diupdate.

Atau apabila ingin menghapus data kontak, pilih button hapus berwarna merah.

![kontak detail update](https://github.com/galileogarin/uas-galileo/assets/138579426/7fe40985-7e0f-4f0e-aee5-526794e19872)


Data kontak akan otomatis berubah dan proses CRUD telah berhasil

![kontak update berhasil](https://github.com/galileogarin/uas-galileo/assets/138579426/3a00267a-44b5-497a-892f-f0972e314c26)

