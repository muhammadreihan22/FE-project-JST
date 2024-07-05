<template>
  <div class="d-flex align-items-center justify-content-center" style="height: 100vh; background-color: #222831">
    <div class="row d-flex align-items-center items-centers" style="margin-top: -20px">
      <div class="col-md-5 d-grid gap-2" style="max-width: 70rem">
        <h1 class="fw-bold" style="font-size: 4rem; color: orangered">Rekomendasi Mobil Terpercaya</h1>
        <p align="justify" style="color: whitesmoke; font-size: 1rem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit id odit eaque laboriosam cupiditate repellat?</p>
        <router-link :to="{ name: 'views.contact' }" class="btn btn-outline-dark fw-bold" style="color: orangered; padding: 10px; border: 2px solid; margin: 0px 50px">Lihat Rekomendasi</router-link>
      </div>
      <div class="col-md-7">
        <div class="img">
          <img src="../assets/civic.jpg" class="card-img-top" alt="..." style="border-radius: 10px" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style></style>
