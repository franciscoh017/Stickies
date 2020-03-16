<template>
  <div>
    <Navbar />
    <section id="content" class="section has-background-bluegrey">
      <Stickies />
    </section>
  </div>
</template>

<script src="./Layout.js"></script>

<style>
#content {
  min-height: calc(100vh - (3.25rem));
}
.has-background-bluegrey{
    background-color: #272932 !important;
}
.has-background-noir {
  background-color: #12151f !important;
}
</style>
