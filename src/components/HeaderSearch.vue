<template>
  <form @click.stop @submit.prevent class="header__search search">
    <input
      :value="searchData"
      type="text"
      class="search__input"
      placeholder="Select city..."
      @input="updateSearch"
      @focus="showList = true"
    />
    <button type="text" class="search__submit">
      <img src="../assets/images/icons8-search.svg" alt="" width="14" />
    </button>
    <header-search-list
      v-if="showList"
      :cities="cities"
      @selected="showList = false"
    />
  </form>
</template>
<script>
import { ref, watch, onMounted } from "vue";
import { useStore } from "vuex";
import { searchCitiesApi } from "../api/location";
import HeaderSearchList from "./HeaderSearchList.vue";

export default {
  components: { HeaderSearchList },
  setup() {
    const store = useStore();
    const searchData = ref("");
    const cities = ref([]);
    const showList = ref(false);

    const searchInputDelay = 1000;
    let timer;

    const updateSearch = (event) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        searchData.value = event.target.value;
      }, searchInputDelay);
    };

    watch(searchData, () => {
      if (searchData.value.length >= 3) {
        searchCitiesApi(searchData.value, store.state.settings.language)
          .then((res) => {
            cities.value = res;
          })
          .catch((error) => {
            store.commit("addError", error);
          });
      }
    });

    onMounted(() => {
      document.body.addEventListener("click", () => {
        showList.value = false;
      });
    });

    return { searchData, cities, showList, updateSearch };
  },
};
</script>
