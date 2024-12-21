<template>
	<div class="carousel-container">
		<div class="carousel" ref="carouselRef">
			<img
				v-for="(image, index) in images"
				:key="index"
				:src="image"
				:class="{ active: currentIndex === index }"
				class="carousel-image"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

// Your image array
const images = ref([
	{
		id: 1,
		image: image1,
		title: "Chaos africa submit",
	},
	{
		id: 2,
		image: image1,
		title: "axios",
	},
	{
		id: 3,
		image: image1,
		title: "google fest",
	},
	{
		id: 4,
		image: image1,
		title: "web3",
	},
]);

const currentIndex = ref(0);
const carouselRef = ref(null);
let intervalId;

const nextSlide = () => {
	gsap.to(".carousel-image.active", {
		opacity: 0,
		scale: 0.8,
		duration: 1,
		ease: "power2.inOut",
	});

	currentIndex.value = (currentIndex.value + 1) % images.length;

	gsap.fromTo(
		`.carousel-image:nth-child(${currentIndex.value + 1})`,
		{
			opacity: 0,
			scale: 1.2,
		},
		{
			opacity: 1,
			scale: 1,
			duration: 1,
			ease: "power2.inOut",
		}
	);
};

onMounted(() => {
	// Initial animation for first image
	gsap.to(`.carousel-image:first-child`, {
		opacity: 1,
		scale: 1,
		duration: 1,
	});

	// Start the interval
	intervalId = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
	clearInterval(intervalId);
});
</script>

<style scoped>
.carousel-container {
	width: 100%;
	height: 400px;
	overflow: hidden;
	position: relative;
}

.carousel {
	width: 100%;
	height: 100%;
	position: relative;
}

.carousel-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	object-fit: cover;
	pointer-events: none;
}

.carousel-image.active {
	opacity: 1;
}
</style>
