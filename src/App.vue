<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from './components/Layout/Layout.vue';
export default {
  name: 'App',
  components: {
    Layout,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
html,
body {
  font-family: 'Quicksand', sans-serif;
}

.modal-card-head,
.modal-card-foot {
  background-color: #191b20 !important;
  border-bottom: solid #191b20 1px !important  ;
  border-top: solid #191b20 1px !important  ;
}

.input,
.textarea {
  background-color: #191b20 !important;
  color: white !important;
}

.input::placeholder,
.textarea::placeholder {
  color: rgba(245, 245, 245, 0.5) !important;
}

.input:focus,
.textarea:focus {
  border-color: #43a680 !important;
  box-shadow: 0 0 0 0.125em rgba(67, 166, 128, 0.25) !important;
}

.b-checkbox.checkbox input[type='checkbox']:checked + .check.is-success {
  border-color: #43a680 !important;
  background-color: #43a680 !important;
}

.b-checkbox.checkbox input[type='checkbox']:checked + .check.is-success:hover{
  border-color: #43a680 !important;
  background-color: #43a680 !important;
}

.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-success {
    border-color: #43a680 !important;
}

.b-checkbox.checkbox input[type='checkbox']:checked + .check.is-info {
  border-color: #4d7ea8 !important;
  background-color: #4d7ea8 !important;
}

.b-checkbox.checkbox input[type='checkbox']:checked + .check.is-info:hover{
  border-color: #4d7ea8 !important;
  background-color: #4d7ea8 !important;
}

.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-info {
    border-color: #4d7ea8 !important;
}
</style>
