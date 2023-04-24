<template>
  <div class="home">
    <!-- <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="nav navbar-nav">
            <a class="nav-item nav-link active" href="#" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
            <a class="nav-item nav-link" href="#">Home</a>
        </div>
    </nav> -->
  </div>


  <div id="carouselExampleControls" class="carousel slide mb-4" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-rw0042d02-698574.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-leopard-print-kaftan-in-white-crepe-682236.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-chic-basic-two-piece-swimsuit-in-peach-colour-328050.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<CollectionPage></CollectionPage>

  <div class="" style="height:100vh">
    <RouterLink to="/CollectionPage" style="text-decoration: none;">
      <img
      src="../assets/banner.png"
      alt=""
      style="height: 100%; width: 100%; object-fit: contain"
      />
    </RouterLink>
    
  </div>
</template>

<script>
import CollectionPage from "@/components/Collection/CollectionPage.vue";

export default {
    name: "HomeView",
    components: { CollectionPage }
};
</script>
