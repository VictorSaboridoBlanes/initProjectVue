<template>
  <form class="card" @submit.prevent="createNewTwoot">
    <div class="card-body">
      <div class="mb-3">
        <label for="newTwoot" class="form-label">Twoot:</label>
        <textarea
          class="form-control"
          id="newTwoot"
          rows="3"
          placeholder="¿Que se te está pasando por la cabeza?"
          v-model="state.newTwootContent"
        />
      </div>
      <div class="mb-3">
        <label for="twootType" class="form-label">Twoot Type:</label>
        <div class="mb-3">
          <select
            id="twootType"
            class="form-control"
            v-model="state.selectedTwootType"
          >
            <option
              :value="option.id"
              v-for="(option, index) in state.twootTypes"
              :key="index"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CreateTwootPanel",
  setup(props, ctx) {
    const state = reactive({
      newTwootContent: "",
      selectedTwootType: 2,
      twootTypes: [
        {
          id: "1",
          name: "Draft",
        },
        {
          id: "2",
          name: "Instant Twoot",
        },
      ],
    });

    const newTwootCharacterCount = computed(() => state.newTwootContent.length);

    function createNewTwoot() {
      if (state.newTwootContent && state.selectedTwootType != 1) {
        ctx.emit("newTwoot", state.newTwootContent);
        state.newTwootContent = "";
      }
    }

    return {
      state,
      newTwootCharacterCount,
      createNewTwoot,
    };
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
