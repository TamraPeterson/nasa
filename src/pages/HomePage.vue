<template>
  <div class="container">
    <div class="row justify-content-center text-center p-3">
      <div class="col-6">
        <form>
          <input type="date" v-model="date" @change="getApod" />
        </form>
      </div>
    </div>
    <div class="row text-center p-3">
      <div class="col-12">
        <h3>{{ photo.title }}</h3>
        <p>{{ photo.explanation }}</p>
        <img class="img-fluid" :src="photo.hdurl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import { photosService } from "../services/PhotosService";
import { AppState } from "../AppState";

export default {
  name: "Home",
  setup() {
    const date = ref(new Date().toISOString().split("T")[0]);
    onMounted(async () => {
      try {
        await photosService.getPhoto();
      } catch (error) {
        logger.error(error);
      }
    });
    return {
      photo: computed(() => AppState.photo),
      date,
      getApod() {
        logger.log(date.value);
        photosService.search(date.value);
      },
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
