<template>
  <div class="home">
    <h1>Hogar dulce hogar</h1>
    <div class="users-list">
      <router-link
        v-for="user in users"
        :key="user.id"
        :to="{ name: 'UserProfile', params: { userId: user.id } }"
        ><p>{{ user.username }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { users } from "../assets/users";

export default {
  name: "HomeView",
  setup() {
    return {
      users,
    };
  },
};
</script>
