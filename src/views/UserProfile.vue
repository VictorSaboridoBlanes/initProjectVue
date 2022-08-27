<template>
  <div class="card" style="width: 100%">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <div class="alert alert-danger" role="alert" v-if="state.user.isAdmin">
        Admin
      </div>
      <h1 class="card-title">@{{ state.user.username }}</h1>
      <div class="text-start">
        <strong>Followers: {{ state.followers }}</strong>
      </div>
      <p class="card-text text-start">"Description"</p>
      <button class="btn btn-primary" @click="followUser">Follow</button>
    </div>
  </div>
  <br />
  <CreateTwootPanel @newTwoot="createNewTwoot" />
  <br />
  <div class="user-profile__twoots-wrapper">
    <TwootItem
      class="user-profile__twoot"
      v-for="twoot in state.user.twoots"
      :key="twoot.id"
      :username="state.user.username"
      :twoot="twoot"
      @fav="toggleFav"
    />
  </div>
</template>

<script>
import { users } from "../assets/users";
import TwootItem from "../components/TwootItem.vue";
import CreateTwootPanel from "../components/CreateTwootPanel.vue";
import { useRoute } from "vue-router";
import { reactive, computed } from "vue";

export default {
  name: "UserProfile",
  components: { TwootItem, CreateTwootPanel },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);

    const state = reactive({
      followers: 0,
      isLoading: false,
      user: users[userId.value - 1] || users[0],
      // user: {
      //   id: 1,
      //   username: "VictorSaboridoBlanes13",
      //   name: "Victor",
      //   firstname: "Saborido",
      //   secondname: "Blanes",
      //   email: "victor.saborido.blanes.job@gmail.com",
      //   isAdmin: false,
      //   twoots: [
      //     { id: 1, content: "Mis huevos morenos al viento" },
      //     {
      //       id: 2,
      //       content: "Como me gusta escribir mierdas en esta plataforma",
      //     },
      //     { id: 3, content: "Eh! Tu! Hay algo que quiero enseñarte... " },
      //   ],
      // },
    });

    // Computed Methods
    const fullName = () =>
      `${state.user.name} ${state.user.firstname} ${state.user.secondname}`;

    //Methods
    function followUser() {
      state.followers++;
    }

    //TODO:Función de Fav a un Twoot, pero aún no está implementada
    function toggleFav(id) {
      console.log(`Twoot Fav! #${id}`);
    }

    // Función que se encarga de crear un nuevo Twoot cuando se lanza el evento "followUser"
    function createNewTwoot(newTwootContent) {
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content: newTwootContent,
      });
    }

    //Realiza la misma función que el Mounted Clásico
    return {
      state,
      computed,
      toggleFav,
      fullName,
      followUser,
      createNewTwoot,
      userId,
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
}
</style>
