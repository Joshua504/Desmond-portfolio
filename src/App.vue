<template>
	<Header />
	<Menu />
  <Navbar />

	<RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue"
import Navbar from "./components/Navbar.vue";
</script>

<style></style>
