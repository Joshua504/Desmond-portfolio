<template>
	<nav :class="{ active: isMenuOpen }">
		<ul class="nav-container">
			<router-link @click="handleNavClick" to="/about" class="list list1"
				><li>about</li></router-link
			>
			<router-link @click="handleNavClick" to="/projects" class="list list2"
				><li>project</li></router-link
			>
			<router-link @click="handleNavClick" to="/speaks" class="list list3"><li>speaks</li></router-link>
			<router-link @click="handleNavClick" to="/articles" class="list list4"
				><li>articles</li></router-link
			>
			<router-link @click="handleNavClick" to="/" class="list list5"
				><li>home</li></router-link
			>
		</ul>
		<div @click="closeMenu" class="close">
			<img src="../assets/Images/menu2.svg" alt="" />
		</div>
	</nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const closeMenu = () => {
	document.querySelector("nav").style.top = "-" + 100 + "%";
	isMenuOpen.value = false;
};

const handleNavClick = () => {
	document.querySelector("nav").style.top = "-" + 100 + "%";
	isMenuOpen.value = false;
};
</script>

<style lang="scss" scoped>
@use "../style/variables" as *;
@use "../style/mixins" as *;

nav {
	background: rgba(255, 255, 255, 0.2); /* Adjust opacity as needed */
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
	position: fixed;
	width: 100%;
	top: -100%;
	transition: $transition-1;
	z-index: 999;

	&.active {
		right: 0;
	}
	.nav-container {
		height: 90vh;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 1.5rem;
		padding: 2.25rem 1.25rem;

		@include mobile {
			padding: 10px;
			gap: 0.5rem;
		}

		.list {
			@include flex;
			justify-content: center;
			align-items: center;
			font-size: 1.5rem;
			font-weight: 600;
			text-transform: capitalize;
			height: 100%;
			text-transform: capitalize;
			height: 100%;
			width: 100%;
			border-radius: 10px;
			background: $secondary-color;
			cursor: pointer;
			transition: $transition-1;

			&:hover {
				background-color: rgba(0, 0, 0, 0.1);
				cursor: pointer;
			}

			li {
				color: $text-color;
				font-size: 4.25rem;
				text-transform: uppercase;

				@include mobile {
					font-size: 16px;
				}
			}
		}

		.list1 {
			grid-column: span 4;
			grid-row: span 2;
			background: $secondary-color-1;
			@include mobile {
				grid-column: span 12;
				grid-row: 1;
			}
		}
		.list2 {
			grid-column: span 5;
			@include mobile {
				grid-column: span 12;
			}
		}
		.list3 {
			grid-column: span 3;
			@include mobile {
				grid-column: span 12;
				// grid-row: span 2;
			}
		}
		.list4 {
			grid-column: span 6;
			background: $secondary-color-1;
			@include mobile {
				grid-column: span 12;
			}
		}
		.list5 {
			grid-column: span 2;
			@include mobile {
				grid-column: span 12;
			}
		}
	}

	.close {
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
		top: 101.7%;
		left: 50%;
		transform: translate(-50%, -50%);
		cursor: pointer;

		img {
			width: 2rem;
			height: 2rem;
		}
	}
}
</style>
