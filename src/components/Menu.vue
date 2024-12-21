<template>
	<div ref="menu" @click="toggleMenu">
		<img src="../assets/Images/menu2.svg" alt="" />
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menu = ref(null);
const isMenuOpen = ref(false);

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
	document.querySelector("nav").style.top = isMenuOpen ? 0 : 100 + "%";
};

onMounted(() => {
	gsap.to(menu.value, {
		scrollTrigger: {
			trigger: "body",
			start: "100px top",
			toggleActions: "play none none reverse",
		},
		visibility: "visible",
		duration: 0.5,
		opacity: 1,
	});
});
</script>

<style lang="scss" scoped>
@use "../style/variables" as *;
@use "../style/mixins" as *;

div {
	background: #000;
	@include flex;
	justify-content: center;
	height: 1.875rem;
	width: 11.25rem;
	padding: 0.5em;
	background: $secondary-color;
	border-bottom-left-radius: 1.25rem;
	border-bottom-right-radius: 1.25rem;
	position: fixed;
	top: 1.5%;
	left: 50%;
	transform: translate(-50%, -50%);
	cursor: pointer;
	z-index: 1;
	visibility: hidden;
	opacity: 0;

	img {
		width: 2rem;
		height: 2rem;
	}
}
</style>
