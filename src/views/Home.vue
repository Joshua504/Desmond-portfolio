<template>
	<main>
		<!-- /* ------------------------------ hero-section
		------------------------------ */ -->
		<section class="hero">
			<div class="hero_textcontainer">
				<h1 class="hero_text" ref="heroText">creative, nomad & tech ....</h1>
			</div>
			<div class="hero-smalltextconatainer com3" ref="heroSmallText">
				<p class="hero_smalltext">
					step in to my digital work space where code meet creativity
				</p>
				<div class="img_div">
					<img class="video" :src="currentVideo" alt="" />
				</div>
			</div>
		</section>
		<!-- /* ----------------------------- images-section
		----------------------------- */ -->
		<section class="image-move">
			<img
				class="luffyi"
				ref="luffyi"
				src="../assets/Images/Monkey-D-Luffy 1.svg"
				alt=""
			/>
			<img class="man-u" ref="manu" src="../assets/Images/manu.svg" alt="" />
			<img src="../assets/Images/christ.png" ref="christ" alt="" />
			<img class="tesla" src="../assets/Images/tesla.png" ref="tesla" alt="" />
			<img
				class="pad"
				ref="pad"
				src="../assets/Images/controller2.png"
				alt=""
			/>
		</section>
		<!-- /* ------------------------------ about-section ----------------------------- */ -->
		<aboutComponent />
		<projectComponent />
	</main>
	<footerComponent />
</template>

<script setup>
import luffy from "../assets/Images/luffy.gif";
import luffy1 from "../assets/Images/luffy1.gif";
import luffy2 from "../assets/Images/luffy2.gif";
import aboutComponent from "../components/about.vue";
import projectComponent from "../components/project.vue";
import footerComponent from "../components/footer.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";

gsap.registerPlugin(ScrollTrigger);

const videos = ref([luffy, luffy1, luffy2]);

const currentVideo = ref(videos.value[0]);
let currentIndex = 0;

const rotateVideos = () => {
	currentIndex = (currentIndex + 1) % videos.value.length;
	currentVideo.value = videos.value[currentIndex];
};

const heroText = ref(null);
const heroSmallText = ref(null);

const elementsText = {
	heroText,
	heroSmallText,
};

const luffyi = ref(null);
const manu = ref(null);
const christ = ref(null);
const tesla = ref(null);
const pad = ref(null);

const elements = {
	luffyi,
	manu,
	christ,
	tesla,
	pad,
};

onMounted(() => {
	currentVideo.value = videos.value[0];
	setInterval(rotateVideos, 30000);

	const initalPosition1 = {
		heroText: { x: "-100%", opacity: 0 },
		heroSmallText: { x: "100%", opacity: 0 },
	};
	Object.entries(initalPosition1).forEach(([key, position]) => {
		gsap.set(elementsText[key].value, position);
	});

	gsap.to(heroText.value, {
		x: "0",
		opacity: 1,
		duration: 2,
		ease: "power2.out",
		delay: 0.5,
	});

	gsap.to(heroSmallText.value, {
		x: "0",
		opacity: 1,
		duration: 2,
		ease: "power2.out",
		delay: 0.5,
	});

	/* ----------------------------- animated image ----------------------------- */
	let mediaQuery = gsap.matchMedia();

	mediaQuery.add("(min-width: 768px)", () => {
		const initialPositions = {
			luffyi: { x: "-60%" },
			manu: { x: "120%", y: "50%" },
			christ: { x: "120%", y: "-150%" },
			tesla: { x: "100%", y: "-100%" },
			pad: { x: "-800%", y: "-850%" },
		};

		Object.entries(initialPositions).forEach(([key, position]) => {
			gsap.set(elements[key].value, position);
		});

		const animations = {
			luffyi: {
				scrollTrigger: {
					start: "top 60%",
					end: "top 30%",
				},
				animation: {
					x: "-30%",
					y: "20%",
					duration: 1,
					delay: 1,
				},
			},
			manu: {
				scrollTrigger: {
					start: "top 60%",
					end: "top 30%",
				},
				animation: {
					x: "80%",
					y: "-50%",
					duration: 2,
					delay: 1.5,
				},
			},
			tesla: {
				scrollTrigger: {
					start: "top 70%",
					end: "top 30%",
				},
				animation: {
					x: "60%",
					y: "-60%",
					duration: 2,
					delay: 1.5,
				},
			},
			christ: {
				scrollTrigger: {
					start: "top 70%",
					end: "top 20%",
				},
				animation: {
					scale: 2.2,
					duration: 2,
					ease: "power2.out",
				},
			},
			pad: {
				scrollTrigger: {
					start: "top 60%",
					end: "top 20%",
				},
				animation: {
					x: "-600%",
					y: "-650%",
					duration: 2,
					delay: 1,
					ease: "power2.out",
				},
			},
		};

		// Apply animations
		Object.entries(animations).forEach(([key, config]) => {
			gsap.to(elements[key].value, {
				scrollTrigger: {
					trigger: elements[key].value,
					scrub: 1,
					toggleActions: "play none none reverse",
					...config.scrollTrigger,
				},
				opacity: 1,
				ease: "power1.out",
				...config.animation,
			});
		});
	});

	mediaQuery.add("(max-width: 767px)", () => {
		const initialPositions = {
			luffyi: { x: "-50%", y: "60%" },
			manu: { x: "100%", y: "40%" },
			christ: { x: "-11%", y: "-100%", scale: 0.7 },
			tesla: { x: "100%", y: "-270%" },
			pad: { x: "-1300%", y: "-4000%" },
		};

		Object.entries(initialPositions).forEach(([key, position]) => {
			gsap.set(elements[key].value, position);
		});

		const animations = {
			luffyi: {
				scrollTrigger: {
					start: "top 50%",
					end: "top 30%",
				},
				animation: {
					opacity: 1,
					x: "-30%",
					y: "60%",
					duration: 1,
					delay: 1,
					ease: "power1.out",
				},
			},

			manu: {
				scrollTrigger: {
					start: "top 60%",
					end: "top 30%",
				},
				animation: {
					x: "50%",
					y: "30%",
					duration: 2,
					delay: 1.5,
				},
			},

				christ: {
				scrollTrigger: {
					start: "top 70%",
					end: "top 20%",
				},
				animation: {
					scale: 1,
					duration: 2,
					ease: "power2.out",
				},
			},

			tesla: {
				scrollTrigger: {
					start: "top 70%",
					end: "top 30%",
				},
				animation: {
					x: "-10%",
					y: "-220%",
					duration: 2,
					delay: 1.5,
				},
			},

				pad: {
				scrollTrigger: {
					start: "top 60%",
					end: "top 20%",
				},
				animation: {
					x: "-600%",
					// y: "-3000%",
					duration: 2,
					delay: 1,
					ease: "power2.out",
				},
			},
		};

		Object.entries(animations).forEach(([key, config]) => {
			gsap.to(elements[key].value, {
				scrollTrigger: {
					trigger: elements[key].value,
					scrub: 1,
					toggleActions: "play none none reverse",
					...config.scrollTrigger,
				},
				opacity: 1,
				ease: "power1.out",
				...config.animation,
			});
		});
	});
});
</script>

<style lang="scss">
@use "../style/variables" as *;
@use "../style/mixins" as *;

main {
	overflow: hidden;

	@include mobile {
		padding: 0 0.5rem;
	}

	.hero {
		margin-top: 2.5rem;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		position: relative;

		.hero_textcontainer {
			text-align: center;

			@include mobile {
				@include flex;
				justify-content: center;
				align-items: center;
			}

			.hero_text {
				font-size: 18.625rem;
				letter-spacing: 2.1875rem;
				font-family: $font-primary;
				text-transform: capitalize;
				line-height: 100%;

				@include mobile {
					font-size: 2.5rem;
					letter-spacing: 1rem;
				}
			}
		}
		@include mobile {
		}

		.hero-smalltextconatainer {
			position: absolute;
			left: 1250px;
			top: 68.7%;
			margin-top: 1.25rem;

			@include mobile {
				left: 0%;
				top: 0%;
				position: relative;
			}

			.hero_smalltext {
				font-size: 1.575rem;
				color: $secondary-color-1;
				text-transform: capitalize;
				width: 70%;
				margin-bottom: 10px;

				@include mobile {
					font-size: 1rem;
					width: 100%;
				}
			}

			.img_div {
				height: 10.125rem;
				width: 80%;
				border-radius: 1.25rem;
				background: rgb(209, 207, 207);

				@include mobile {
					width: 100%;
				}

				img {
					width: 100%;
					height: 100%;
					border-radius: 1.25rem;
				}
			}
		}
	}

	.image-move {
		margin: 2.5rem 0;
		position: relative;
		height: 100vh;
		width: 100%;
		background-image: url("../assets/Images/rio.jpg");
		background-size: cover;
		background-position: center;

		@include mobile {
			width: 100%;
			padding: 0;
		}

		.luffyi {
			@include mobile {
				width: 90%;
			}
		}

		.man-u {
			@include mobile {
				width: 80%;
			}
		}

		.tesla {
			width: 50%;
			@include mobile {
				width: 80%;
			}
		}

		.pad {
			width: 10%;
		}
	}
}
</style>
