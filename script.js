const aspekData = [
    {
        nama: "Seni Tari",
        budaya: [
            {judul: "Reog Ponorogo", gambar: "reog.jpg", deskripsi: "Reog menggambarkan keberanian, kekuatan, dan keteguhan hati dalam menghadapi kejahatan dan tirani. Sosok Singa Barong melambangkan kekuatan besar, sementara warok dan jathil melambangkan kebijaksanaan serta pengendalian diri. Reog juga menyiratkan hubungan manusia dengan alam dan spiritualitas masyarakat Ponorogo."},
            {judul: "Tari Gandrung Banyuwangi", gambar: "gandrung.jpg", deskripsi: "Tari Gandrung merupakan simbol rasa syukur, cinta kasih, dan kedekatan sosial masyarakat Using kepada Dewi Sri sebagai lambang kemakmuran. Tarian ini mencerminkan sifat terbuka, ramah, serta harmoni masyarakat Banyuwangi."},
            {judul: "Tari Remo", gambar: "remo.jpg", deskripsi: "Tari Remo menggambarkan semangat kepahlawanan, kelincahan, dan ketegasan. Gerakan kaki yang kuat (entakan selaras irama) melambangkan kesiapan menyambut tamu dengan gagah dan penuh penghormatan. Tari ini juga mencerminkan karakter masyarakat Jawa Timur yang energik dan berani."},
            {judul: "Jaranan", gambar: "jaranan.jpg", deskripsi: "Tari Jaranan menggambarkan keperkasaan prajurit berkuda, nilai loyalitas, serta keberanian dalam pertempuran. Unsur magis di dalamnya mencerminkan kepercayaan masyarakat pada dunia spiritual, ritus perlindungan, serta keseimbangan antara kekuatan fisik dan kekuatan batin."},
            {judul: "Tari Glipang", gambar: "glipang.jpg", deskripsi: "Tari Glipang merupakan perpaduan budaya Madura dan Probolinggo dengan gerak tegas dan dinamis. Filosofinya adalah perjuangan, kerja keras, ketangguhan, serta identitas masyarakat pesisir yang kuat dan tidak mudah menyerah."}
        ]
    },
    {
        nama: "Seni Musik",
        budaya: [
            {judul: "Karawitan Jawa Timuran", gambar: "karawitan.jpg", deskripsi: "Musik tradisional Jawa Timur dengan tempo lebih cepat dan dinamis."},
            {judul: "Gamelan", gambar: "gamelan.jpg", deskripsi: "Ansambel musik tradisional berbahan logam yang menghasilkan irama khas Nusantara."},
            {judul: "Ludruk", gambar: "ludruk.jpg", deskripsi: "Seni pertunjukan rakyat dengan musik, humor, dan pesan moral."},
        ]
    },
    {
        nama: "Aksara",
        budaya: [
            {judul: "Aksara Jawa", gambar: "aksarajawa.jpg", deskripsi: "Aksara Jawa melambangkan kearifan, tata krama, dan keluhuran budi masyarakat Jawa. Bentuk hurufnya yang lembut dan melengkung menunjukkan nilai keselarasan, keindahan, dan kerendahan hati. Penulisannya sarat etika, menggambarkan bahwa komunikasi harus dilakukan dengan hormat dan bijaksana."},
        ]
    },
    {
        nama: "Kuliner",
        budaya: [
            {judul: "Rawon", gambar: "rawon.jpg", deskripsi: "Kebijaksanaan (kuah hitam kluwek) yang dicapai setelah melalui proses sulit dengan ketekunan."},
            {judul: "Rujak Cingur", gambar: "rujak.jpg", deskripsi: "Toleransi dan Persatuan (campuran bahan) diikat oleh cinta kasih (petis)."},
            {judul: "Soto Lamongan", gambar: "soto.jpg", deskripsi: "Kemakmuran (kuah kuning) diraih melalui ketekunan dan harmoni (koya)."},
            {judul: "Lontong Balap", gambar: "lontong.jpg", deskripsi: "Semangat Juang (kecepatan) dan Keharmonisan dalam kesederhanaan."},
            {judul: "Pecel Madiun", gambar: "pecel.jpg", deskripsi: "Keselarasan (sayuran) dan Persatuan (bumbu) dalam kesederhanaan hidup."}
        ]
    },
    {
        nama: "Tradisi",
        budaya: [
            {judul: "Kasada Tengger", gambar: "kasada.jpg", deskripsi: "Upacara Kasada (Yadnya Kasada) masyarakat Tengger melambangkan pengorbanan, kesetiaan, dan rasa syukur kepada Sang Hyang Widhi. Tradisi ini bersumber dari legenda Roro Anteng dan Joko Seger, mengajarkan bahwa kesejahteraan memerlukan pengorbanan demi kebaikan bersama. Persembahan ke kawah Bromo menunjukkan hubungan manusia dengan alam serta penghormatan pada kekuatan spiritual."},
            {judul: "Petik Laut", gambar: "laut.jpg", deskripsi: "Petik Laut adalah ritual masyarakat pesisir sebagai wujud syukur atas hasil laut dan doa keselamatan untuk para nelayan. Filosofinya adalah harmoni manusia dengan laut, tempat kehidupan dan penghidupan. Perahu sesaji yang diarak ke laut melambangkan keikhlasan dan harapan akan berkah berkelanjutan."},
            {judul: "Ruwatan", gambar: "ruwatan.jpg", deskripsi: "Ruwatan adalah upacara spiritual untuk membersihkan diri dari kesialan, gangguan, dan energi negatif. Tradisi ini mengajarkan bahwa kehidupan harus dijalani dalam keadaan “suci” secara lahir batin. Filosofinya menekankan pemulihan, perlindungan, dan keseimbangan antara manusia dan kekuatan kosmis."},
            {judul: "Sedekah Bumi", gambar: "sedekah.jpg", deskripsi: "Sedekah Bumi adalah bentuk syukur masyarakat agraris atas kesuburan tanah dan hasil panen. Tradisi ini menggambarkan hubungan manusia dengan bumi sebagai sumber kehidupan. Filosofinya yaitu syukur, kerendahan hati, dan kewajiban menjaga alam."},
            {judul: "Tingkeban", gambar: "tingkeban.jpg", deskripsi: "Upacara kehamilan tujuh bulanan yang melambangkan pengharapan dan keselamatan ibu serta janin. Ini menekankan pentingnya mempersiapkan kelahiran dengan spiritualitas dan doa."},
        ]
    },
    {
        nama: "Pakaian Adat",
        budaya: [
            {judul: "Pesa'an Madura", gambar: "pesaan.jpg", deskripsi: "Keberanian dan martabat diri dalam kesederhanaan pakaian kerja."},
            {judul: "Kebaya Jawa Timuran", gambar: "kebaya.jpg", deskripsi: "Keanggunan dan Kesopanan yang diekspresikan secara terbuka dan dinamis."},
            {judul: "Batik Motif Kawung", gambar: "kawung.jpg", deskripsi: "Keadilan, kejujuran, dan kesempurnaan sebagai pedoman pemimpin."},
            {judul: "Batik Madura", gambar: "batikmadura.jpg", deskripsi: "Keberanian, ketegasan, dan semangat hidup yang lugas."},
            {judul: "Batik Tuban", gambar: "batiktuban.jpg", deskripsi: "Kemandirian, ketekunan, dan keterbukaan akulturasi."}
        ]
    },
    {
        nama: "Arsitektur",
        budaya: [
            {judul: "Candi Penataran", gambar: "penataran.jpg", deskripsi: "Candi Penataran, kompleks candi Hindu terbesar di Jawa Timur, melambangkan perlindungan, pemujaan kepada dewa, dan kemenangan atas kejahatan. Relief-reliefnya—terutama kisah Ramayana—mengajarkan nilai kebajikan, keberanian, dan pengendalian diri. Lokasinya di kaki Gunung Kelud mencerminkan filosofi harmoni manusia dengan alam dan kekuatan kosmis."},
            {judul: "Candi Singasari", gambar: "singasari.jpg", deskripsi: "Candi ini melambangkan keagungan spiritual, penghormatan kepada raja, dan perjalanan jiwa menuju kesempurnaan. Dibangun sebagai tempat pemuliaan Raja Kertanegara, candi ini mencerminkan perpaduan Hindu-Buddha yang filosofinya menekankan kesatuan, kebijaksanaan, dan pencarian pencerahan."},
            {judul: "Rumah Joglo", gambar: "joglo.jpg", deskripsi: "Rumah Joglo mencerminkan ketertiban, hierarki, keseimbangan, dan kerendahan hati. Tiang penyangga (saka guru) melambangkan kehidupan yang ditopang empat pilar moral."},
            {judul: "Rumah Osing", gambar: "osing.jpg", deskripsi: "Rumah adat Osing di Banyuwangi mencerminkan identitas, kemandirian, dan kesederhanaan masyarakat Using. Bentuk rumah yang kuat dan lapang melambangkan karakter masyarakat Osing yang jujur, terbuka, dan dekat dengan alam. Pembagian ruangnya menegaskan nilai kebersamaan keluarga dan keseimbangan antara dunia sosial dan spiritual."},
            {judul: "Masjid Sunan Ampel", gambar: "sunanampel.jpg", deskripsi: "Sebagai salah satu masjid tertua di Jawa Timur, Masjid Sunan Ampel melambangkan perdamaian, penyebaran ilmu, dan dakwah yang lembut. Arsitekturnya yang sederhana namun kokoh mencerminkan ajaran Sunan Ampel tentang ketauhidan, kesederhanaan, toleransi, dan persatuan umat. Masjid ini menjadi simbol bahwa spiritualitas harus diikuti dengan akhlak mulia dan perbuatan baik."}
        ]
    },
    {
        nama: "Ritual Keagamaan",
        budaya: [
            {judul: "Nyadran", gambar: "nyadran.jpg", deskripsi: "Nyadran adalah tradisi pembersihan makam leluhur dan upacara ritual sedekah bumi yang dilakukan menjelang bulan Ramadan (Bulan Ruwah). Filosofi utamanya adalah Penghormatan, Kesucian, dan Solidaritas."},
            {judul: "Grebeg", gambar: "grebeg.jpg", deskripsi: "Grebeg adalah upacara adat besar berupa arak-arakan gunungan (tumpukan hasil bumi dan makanan) dari Keraton menuju Masjid Agung atau tempat lain. Dilaksanakan pada hari-hari besar Islam (Grebeg Syawal, Grebeg Besar, Grebeg Mulud)."},
            {judul: "Piodalan", gambar: "piodalan.jpg", deskripsi: "Piodalan (atau Puja Wali) adalah upacara peringatan hari jadi atau ulang tahun berdirinya sebuah Pura (tempat ibadah Hindu Bali). Filosofi utamanya adalah Penghormatan, Kesucian, dan Pemeliharaan Keseimbangan Alam Semesta."},
        ]
    },
];

const aspekContainer = document.getElementById("aspek-container");
const budayaContainer = document.getElementById("budaya-container");
const budayaTitle = document.getElementById("budaya-title");
const budayaList = document.getElementById("budaya-list");
const backBtn = document.getElementById("back-btn");

const scrollRevealElements = []; 

// Fungsi untuk membuat card aspek dan menangani klik
aspekData.forEach((aspek) => {
    const card = document.createElement("div");
    card.className = "aspek-card";
    card.textContent = aspek.nama;

    card.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
        
        aspekContainer.style.display = "none";
        budayaContainer.classList.remove("hidden");
        budayaTitle.textContent = `Galeri ${aspek.nama}`;

        budayaList.innerHTML = "";
        aspek.budaya.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `
                <div class="budaya-item">
                    <img src="${item.gambar}" alt="${item.judul}" class="budaya-img">
                    <div class="budaya-info">
                        <h3>${item.judul}</h3>
                        <p>${item.deskripsi}</p>
                    </div>
                </div>
            `;
            budayaList.appendChild(li);
        });
    });

    aspekContainer.appendChild(card);
    scrollRevealElements.push(card); 
});

// Logika animasi 'reveal' saat scroll
const revealOnScroll = () => {
    scrollRevealElements.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - (window.innerHeight * 0.15) && !card.classList.contains("reveal")) {
            card.classList.add("reveal");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); 

// Tombol kembali
backBtn.addEventListener("click", () => {
    budayaContainer.classList.add("hidden");
    aspekContainer.style.display = "grid";
    window.scrollTo({ top: 0, behavior: 'smooth' });
});