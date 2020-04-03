<template>
  <section class="section">
    <div class="field">
      <a
        id="add"
        class="button is-white is-inverted"
        href="#"
        @click="isFormModal = true"
      >
        <span class="icon"> <i class="fas fa-plus"></i></span>
        <span>Add</span>
      </a>
    </div>

    <h1 class="heading has-text-white has-text-weight-bold">Pinned</h1>
    <div id="pinned" v-if="pinnedStickies.length > 0">
      <ul
        class="columns is-multiline"
      >
        <li class="column is-3" v-for="(stickie, index) in pinnedStickies"
        :key="index">
          <Sticky
            class="sticky"
            :id="stickie.id"
            :index="index"
            :title="stickie.title"
            :body="stickie.body"
            :completed.sync="stickie.completed"
            :pinned.sync="stickie.pinned"
          />
        </li>
      </ul>
    </div>
    <div v-else>
      <section class="section has-text-centered">
        <span class="has-text-grey-light">
          Pin an <b>important</b> Sticky here.</span
        >
      </section>
    </div>
    <br />
    <h1 class="heading has-text-white has-text-weight-bold">Other</h1>
    <div id="other" v-if="otherStickies.length > 0">
      <ul
        class="columns is-multiline"
      >
        <li class="column is-3" v-for="(stickie, index) in otherStickies"
        :key="index">
          <Sticky
            class="sticky"
            :id="stickie.id"
            :index="index"
            :title="stickie.title"
            :body="stickie.body"
            :completed.sync="stickie.completed"
            :pinned.sync="stickie.pinned"
          />
        </li>
      </ul>
    </div>
    <div v-else>
      <section class="section has-text-centered">
        <span class="has-text-grey-light">
          <b>Create</b> a Sticky to get started.</span
        >
      </section>
    </div>
    <b-modal :active.sync="isFormModal">
      <form @submit.prevent="processSticky()" action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title has-text-white">
              Create New
            </p>
          </header>
          <section class="modal-card-body has-background-bluegrey">
            <div class="field">
              <label class="label has-text-white">Title</label>
              <div class="control">
                <input
                  class="input"
                  v-model="currentSticky.title"
                  type="text"
                  placeholder="Task Title"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Desription</label>
              <div class="control">
                <textarea
                  v-model="currentSticky.body"
                  class="textarea"
                  type="text"
                  placeholder="Task Description"
                  required
                />
              </div>
            </div>
            <b-checkbox v-model="currentSticky.pinned" type="is-info"
              ><p class="has-text-white">Pinned</p></b-checkbox
            >
          </section>
          <footer class="modal-card-foot">
            <button type="submit" class="button is-white is-inverted">Save</button>
          </footer>
        </div>
      </form>
    </b-modal>
  </section>
</template>

<script>
import Sticky from "../Sticky/Sticky.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Stickies",
  components: {
    Sticky
  },
  data() {
    return {
      stickies: [],
      isFormModal: false,
      currentSticky: {
        id: null,
        title: null,
        body: null,
        pinned: false,
        completed: false
      }
    };
  },
  computed: {
    ...mapGetters(["pinnedStickies", "otherStickies"])
  },
  methods: {
    ...mapActions(["getStickies", "createSticky"]),
    showUpdateModal(sticky) {
      this.currentSticky = {
        id: sticky.id,
        title: sticky.title,
        body: sticky.body,
        pinned: sticky.pinned,
        completed: sticky.completed
      };
      this.isFormModal = true;
    },
    processSticky() {
      const id = Math.floor(Math.random() * Date.now());
      this.currentSticky.id = id;
      this.createSticky(this.currentSticky);
      this.isFormModal = false;
      this.clearForm();
    },
    clearForm() {
      this.currentSticky = {
        id: null,
        title: null,
        body: null,
        pinned: false,
        completed: false
      };
    }
  }
};
</script>

<style scoped>
#add {
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(45deg, #43a680,#4d7ea8) 1 1 1 1;
  box-sizing: border-box;
}

.sticky {
  cursor: pointer;
}
</style>
