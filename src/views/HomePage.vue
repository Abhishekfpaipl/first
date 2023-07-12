<template>
  <HomeTopnav></HomeTopnav>
  <div style="padding-top: 35px;">
      <div id="carouselExampleInterval" class="carousel slide row-cols-xl" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-rw0042d02-698574.jpg"
            class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-leopard-print-kaftan-in-white-crepe-682236.jpg"
            class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-chic-basic-two-piece-swimsuit-in-peach-colour-328050.jpg"
            class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <CollectionPage></CollectionPage>
    <HomePageCard></HomePageCard>
  </div>
</template>

<script>
import CollectionPage from "@/components/Collection/CollectionPage.vue";
import HomeTopnav from "@/components/NavBar/HomeTopnav.vue";
import HomePageCard from "@/components/Collection/HomePageCard.vue";
export default {
  name: "HomeView",
  components: {
    CollectionPage,
    HomeTopnav,
    HomePageCard
}
};
</script>
