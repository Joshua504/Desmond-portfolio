<template>
	<section class="speakscontainer">
		<h3 ref="speaksText">speaking engagements</h3>
		<div class="flex-container">
			<div class="descriptions" ref="description">
				<section>
					<p class="description_text">
						"I am deeply passionate about sharing my expertise in backend
						development and Web 3 technologies through engaging, informative,
						and thought-provoking talks. With a robust foundation in
						cutting-edge technologies and years of hands-on experience, I am
						committed to empowering others by simplifying complex concepts and
						turning them into actionable knowledge. In my talks, I bridge the
						gap between theory and practice, offering insights that cater to a
						diverse audience—ranging from curious beginners to seasoned
						professionals. My focus lies in unraveling the intricacies of
						backend architectures, showcasing how robust systems are built and
						scaled, and exploring the transformative potential of decentralized
						technologies. Through live demonstrations, real-world case studies,
						and interactive discussions, I aim to make advanced technical
						concepts relatable and impactful. Beyond technical details, I delve
						into broader themes such as the future of web development, the
						ethical implications of decentralization, and strategies for
						building resilient, forward-thinking applications. My goal is to
						inspire my audience not just to adopt new tools and techniques, but
						also to think critically about how these innovations shape our
						digital landscape."
					</p>

					<button>
						<p>Book me for speaking engagements</p>
						<img src="../assets/Images/arrowUpRight.svg" alt="" />
					</button>
				</section>
				<!-- <div class="control-btn">
					<div @click="prevSlide" class="btns">
						<img src="../assets/Images/arrowLeft(1).svg" alt="" />
					</div>
					<div @click="nextSlide" class="btns">
						<img src="../assets/Images/arrowLeft.svg" alt="" />
					</div>
				</div> -->
			</div>
			<div class="carousel">
				<div class="carousel-container">
					<div class="carousel-slide">
						<img :src="currentImage" alt="" ref="slideImage" />
						<h3 ref="slideTitle">{{ currentTitle }}</h3>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- <carousel /> -->
</template>

<script setup>
import gsap from "gsap";
import { onMounted, ref } from "vue";
import image1 from "../assets/Images/Frame 74.svg";
import image2 from "../assets/Images/abstract-blue-liquid-shapes-with-circles-elements-pattern-on-dark-blue-background-vector.jpg";
import image3 from "../assets/Images/istockphoto-1451000936-612x612.jpg";
import image4 from "../assets/Images/images.jpeg";
// import carousel from "../components/carousel.vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const description = ref(null);
const speaksCarousel = ref(null);
const speaksText = ref(null);

onMounted(() => {
	let mediaQuery = gsap.matchMedia();

	mediaQuery.add("(min-width: 768px)", () => {
		gsap.set(description.value, {
			opacity: 0,
			x: -100,
		});
		gsap.set(speaksCarousel.value, {
			opacity: 0,
			x: 100,
		});
		gsap.set(speaksText.value, {
			opacity: 0,
			scale: 0.8,
		});

		gsap.to(speaksText.value, {
			scrollTrigger: {
				trigger: speaksText.value,
				start: "top 60%",
				toggleActions: "play none none reverse",
			},
			duration: 1,
			opacity: 1,
			scale: 1,
			ease: "expo.out",
		});

		gsap.to(description.value, {
			scrollTrigger: {
				trigger: description.value,
				start: "top 60%",
				toggleActions: "play none none reverse",
			},
			duration: 1,
			opacity: 1,
			x: 0,
			ease: "power3.out",
		});

		gsap.to(speaksCarousel.value, {
			scrollTrigger: {
				trigger: speaksCarousel.value,
				start: "top 60%",
				toggleActions: "play none none reverse",
			},
			duration: 1,
			opacity: 1,
			x: 0,
			delay: 0.8,
			ease: "power3.out",
		});
	});

	setInterval(rotateSlides, 5000);
});

const carouselContainer = ref(null);
const slides = ref([
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
const slideImage = ref(null);
const slideTitle = ref(null);

const rotateSlides = () => {
	gsap.to(".carousel-slide", {
		opacity: 0,
		duration: 0.5,
		onComplete: () => {
			currentIndex.value = (currentIndex.value + 1) % slides.value.length;

			gsap.to(".carousel-slide", {
				opacity: 1,
				duration: 0.5,
				ease: "power2.inOut",
			});
		},
	});
};
</script>

<style lang="scss" scoped>
@use "../style/variables" as *;
@use "../style/mixins" as *;

.speakscontainer {
	margin: 5rem 0;

	h3 {
		@include sub-header;
		text-align: center;
		margin-bottom: 32px;
	}

	.flex-container {
		@include flex;
		align-items: start;
		justify-content: center;
		gap: 6rem;

		@include mobile {
			flex-direction: column-reverse;
			gap: 1rem;
		}

		.descriptions {
			width: 100%;
			max-width: 800px;

			@include mobile {
				width: 100%;
			}

			section {
				background: #fff;
				padding: 24px 32px;

				@include mobile {
					padding: 10px;
				}

				.description_text {
					font-size: 16px;
					margin-bottom: 28px;
					color: var(--text2-color);

					@include mobile {
						font-size: 12px;
					}
				}

				button {
					@include description-btn;
				}
			}

			.control-btn {
				@include flex;
				justify-content: center;
				gap: 1.5em;
				margin-top: 20px;

				.btns {
					width: 80px;
					height: 80px;
					border: 2px solid var(--border-color);
					border-radius: 50%;
					@include flex;
					justify-content: center;
					cursor: pointer;
					transition: all 0.3s ease-in-out;
					background-color: var(--text3-color);

					&:hover {
						background: #bcb9b1;
					}
				}
			}
		}

		.carousel {
			position: relative;
			overflow: hidden;
			background: #fff;
			width: 100%;
			padding: 16px 10px 18px;
			// padding: 2rem;
		}

		.carousel-container {
			width: 100%;
			display: flex;
			transition: transform 0.5s ease;
			scroll-snap-type: x mandatory;
		}

		.carousel-slide {
			min-width: 100%;
			flex-shrink: 0;
			scroll-snap-align: center;
			// opacity: 1;
			transition: opacity 0.5s ease;
		}

		.carousel-slide img {
			width: 100%;
			height: auto;
			object-fit: contain;
		}
		.carousel-slide h3 {
			font-size: 20px;
			margin-top: 1.5rem;
		}
	}
}
</style>
