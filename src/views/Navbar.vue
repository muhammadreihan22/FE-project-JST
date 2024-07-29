<template>
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fw-bold" style="box-shadow: -1px 3px 20px black; position: fixed; width: 100%">
    <div class="container">
      <a class="navbar-brand" href="#" style="font-size: 25px; color: orangered">Rekomendasi Mobil</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#home" style="color: orangered">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about" style="color: orangered">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" style="color: orangered">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" style="color: orangered; background-color: orangered; color: white; border-radius: 50px; padding: 5px 10px">Admin</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--End Navbar-->
  <!--Home-->
  <section id="home">
    <div class="d-flex align-items-center justify-content-center" style="height: 100vh; background-color: #222831">
      <div class="row d-flex align-items-center items-centers justify-content-center" style="margin-top: -20px">
        <div class="col-md-5 d-grid gap-2 mb-3">
          <h1 class="fw-bold" style="font-size: 3rem; color: orangered">
            Rekomendasi Mobil <br />
            Terpercaya
          </h1>
          <p style="color: whitesmoke; font-size: 1rem">
            Selamat datang di Rekomendasi Mobil, tempat terbaik untuk menemukan informasi terkini dan terpercaya mengenai dunia otomotif. Kami adalah sumber utama Anda untuk berbagai rekomendasi, ulasan, dan berita seputar mobil di
            Indonesia.
          </p>
          <router-link :to="{ name: 'views.fitur' }" class="btn btn-outline-dark fw-bold" style="color: white; padding: 10px; margin: 0px 70px; background-color: orangered">Lihat Rekomendasi</router-link>
        </div>
        <div class="col-md-5 mb-3">
          <div class="img">
            <img src="../assets/civic.jpg" class="card-img-top" alt="..." style="border-radius: 10px" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--End Home-->
  <!--About-->
  <section id="about">
    <div class="d-flex align-items-center justify-content-center bg-dark" style="height: 100vh">
      <div class="row d-flex align-items-center items-centers justify-content-center">
        <div class="col-md-5">
          <!-- make image dummy ffrom unsplash -->
          <div class="img">
            <img src="../assets/civic.jpg" class="card-img-top" alt="..." style="border-radius: 10px; width: 360px; height: 500px" />
          </div>
        </div>
        <div class="col-md-5 d-grid gap-1">
          <h1 class="fw-bold" style="font-size: 2rem; color: orangered">Visi</h1>
          <p style="color: whitesmoke; font-size: 1rem">
            Visi kami adalah menjadi portal otomotif terkemuka yang memberikan informasi akurat dan berguna bagi para pecinta mobil di Indonesia. Kami berkomitmen untuk membantu Anda membuat keputusan yang tepat dalam membeli mobil, baik
            baru maupun bekas.
          </p>
          <h1 class="fw-bold" style="font-size: 2rem; color: orangered">Misi</h1>
          <p style="color: whitesmoke; font-size: 1rem">
            1. Menyediakan Informasi Lengkap: Kami berusaha menyajikan informasi yang lengkap dan up-to-date mengenai berbagai merek dan model mobil, termasuk spesifikasi, fitur, harga, dan ulasan pengguna.
          </p>
          <p style="color: whitesmoke; font-size: 1rem">2. Memberikan Rekomendasi Terbaik: Dengan tim ahli kami, kami memberikan rekomendasi mobil terbaik sesuai dengan kebutuhan dan anggaran Anda.</p>
        </div>
      </div>
    </div>
  </section>

  <!--End About-->
  <!--Contact-->
  <section class="contact" id="contact">
    <div class="container">
      <h2>Contact</h2>
      <div class="max-width">
        <div class="contact-content">
          <div class="row">
            <div class="col-6">
              <div class="column left">
                <p>Apabila ada yang ingin ditanyakan lebih mendalam terkait rekomendasi mobil bisa menghubungi kontak berikut ini. Saya sangat berterimasih bila kita bisa saling support.</p>
                <div class="icons">
                  <div class="row">
                    <div class="info">
                      <div class="head">Tempat</div>
                      <div class="sub-title">Jakarta, Indonesia</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="info">
                      <div class="head">Email</div>
                      <div class="sub-title">Rekomendasimobil@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="column right">
                <div class="text">Message me</div>
                <form action="#">
                  <div class="fields">
                    <div class="field name">
                      <input type="text" placeholder="Name" required="" />
                    </div>
                    <div class="field email">
                      <input type="email" placeholder="Email" required="" />
                    </div>
                  </div>
                  <div class="field">
                    <input type="text" placeholder="Subject" required="" style="width: 500px" />
                  </div>
                  <div class="field textarea">
                    <textarea cols="30" rows="10" placeholder="Message.." required=""></textarea>
                  </div>
                  <div class="button">
                    <button type="submit">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--End Contact-->
</template>

<script>
export default {};
</script>

<style>
.contact {
  min-height: 90vh;
  background: #222831;
}
.contact .container {
  padding-top: 60px;
}
.contact .container h2 {
  text-align: center;
  margin-bottom: 80px;
  color: orangered;
  letter-spacing: 2px;
}
.contact .contact-content .column {
  width: calc(80% - 30px);
  color: orangered;
}
.contact .contact-content .text {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: orangered;
  letter-spacing: 2px;
}
.contact .contact-content .left p {
  text-align: justify;
  margin-left: 30px;
  color: #fff;
}

.contact .contact-content .row {
  display: flex;
  height: 65px;
  align-items: center;
}
.contact .contact-content .row .info {
  margin-left: 30px;
}

.contact .contact-content .info .head {
  font-weight: 500;
  letter-spacing: 2px;
}
.contact .contact-content .info .sub-title {
  color: whitesmoke;
}
.contact .right form .fields {
  display: flex;
}
.contact .right form .field,
.contact .right form .fields .field {
  height: 45px;
  width: 100%;
  margin-bottom: 15px;
}
.contact .right form .textarea {
  height: 80px;
  width: 100%;
}
.contact .right form .name {
  margin-right: 10px;
  color: white;
}
.contact .right form .email {
  margin-left: 10px;
}
.contact .right form .field input,
.contact .right form .textarea textarea {
  height: 100%;
  width: 240px;
  border: 1px solid lightgrey;
  border-radius: 6px;
  outline: none;
  padding: 0 15px;
  font-size: 17px;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;
}
.contact .right form .field input:focus,
.contact .right form .textarea textarea:focus {
  border-color: #b3b3b3;
}
.contact .right form .textarea textarea {
  padding-top: 10px;
  resize: none;
  width: 500px;
}
.contact .right form .button {
  height: 47px;
  width: 170px;
}
.contact .right form .button button {
  width: 100%;
  height: 100%;
  border: 2px solid orangered;
  background: orangered;
  color: #fff;
  outline: none;
  font-size: 20px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.contact .right form .button button:hover {
  color: orangered;
  background: none;
}
</style>
