<template>
  <div class="">
    <b-modal :active.sync="editModalActive">
      <form @submit.prevent="SaveAndClose()">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title has-text-white">
              Update
            </p>
          </header>
          <section class="modal-card-body has-background-bluegrey">
            <div class="field">
              <label class="label has-text-white">Title</label>
              <div class="control">
                <input
                  class="input"
                  v-model="data.title"
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
                  v-model="data.body"
                  class="textarea"
                  type="text"
                  placeholder="Task Description"
                  required
                />
              </div>
            </div>
            <b-checkbox v-model="data.completed" type="is-success"
              ><p class="has-text-white">Completed</p></b-checkbox
            >
            <b-checkbox v-model="data.pinned" type="is-info"
              ><p class="has-text-white">Pinned</p></b-checkbox
            >
          </section>
          <footer class="modal-card-foot">
            <button type="submit" class="button is-white is-inverted">Save</button>
          </footer>
        </div>
      </form>
    </b-modal>
    <div
      :class="completed ? 'complete-box' : null"
      class="card has-background-noir"
    >
      <div class="card-content">
        <!-- Main container -->
        <nav class="level is-mobile">
          <!-- Left side -->
          <div class="level-left">
            <div class="level-item">
              <span @click="toggleComplete(id)" class="option">
                <p v-if="!completed" class="subtitle is-5">
                  <img src="@/assets/Check.svg" />
                </p>
                <p v-else class="subtitle is-5">
                  <img src="@/assets/Check 2.svg" />
                </p>
              </span>
              <span @click="togglePinned(id)" class="option">
                <p v-if="pinned" class="subtitle is-5">
                  <span class="icon pinned">
                    <i class="fas fa-thumbtack"></i>
                  </span>
                </p>
                <p v-else class="subtitle is-5">
                  <span class="icon">
                    <i class="fas fa-thumbtack"></i>
                  </span>
                </p>
              </span>
              <p class="level-item">
                <a
                  @click="activateEditMode()"
                  class="has-text-white has-size-5 has-text-weight-bold option"
                >
                  <span class="icon">
                    <i class="fas fa-pencil-alt"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>

          <!-- Right side -->
          <div class="level-right">
            <p class="level-item">
              <a
                @click="deleteSticky(id)"
                class="has-text-white has-size-5 has-text-weight-bold"
              >
                <span class="icon">
                  <i class="fas fa-trash"></i>
                </span>
              </a>
            </p>
          </div>
        </nav>
        <p
          :class="completed ? 'complete' : null"
          class="subtitle is-5 has-text-white has-text-weight-bold"
        >
          {{ title }}
        </p>
        <div class="content">
        <p :class="completed ? 'complete' : null" class="has-text-grey-light">
          {{ body }}
        </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Sticky",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    pinned: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editModalActive: false,
      data: {
        id: this.id,
        title: null,
        body: null,
        completed: null,
        pinned: null
      }
    };
  },
  methods: {
    ...mapActions([
      "togglePinned",
      "toggleComplete",
      "deleteSticky",
      "updateSticky"
    ]),
    activateEditMode() {
      this.data.title = this.title;
      this.data.body = this.body;
      this.data.completed = this.completed;
      this.data.pinned = this.pinned;
      this.editModalActive = true;
    },
    SaveAndClose() {
      this.updateSticky(this.data);
      this.editModalActive = false;
    }
  }
};
</script>

<style>
.pinned {
  transform: rotate(45deg) !important;
  color: #4d7ea8 !important;
}

.complete-box {
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #43a680, rgba(0, 0, 0, 0)) 1 100%;
  box-sizing: border-box;
}

.option {
  margin-right: 0.35rem;
}
.complete {
  text-decoration: line-through;
}
</style>
