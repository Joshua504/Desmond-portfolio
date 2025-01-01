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
			</div>
			<div class="carousel">
				<div class="carousel-container">
					<div class="carousel-slide">
						<div class="image-container">
							<img :src="currentImage" alt="" ref="slideImage" />
						</div>
						<div class="slide-details">
							<div>
								<h3 ref="slideTitle">{{ currentTitle }}</h3>
							</div>
							<ul>
								<a href="">slides</a>
								<a href="">watch</a>
							</ul>
						</div>
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
import chaos from "../assets/Images/Chaoss 51.jpg";
import cityJs from "../assets/Images/City JS 16.jpg";
import localHost from "../assets/Images/20241226_213954.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const description = ref(null);
const speaksCarousel = ref(null);
const speaksText = ref(null);

const slideImages = ref([chaos, cityJs, localHost]);
const slides = ref([
	{
		id: 1,
		image: slideImages.value[0],
		title: "Chaos africa submit",
	},
	{
		id: 2,
		image: slideImages.value[1],
		title: "city js",
	},
	// {
	// 	id: 3,
	// 	image: slideImages.value[2],
	// 	title: "local host",
	// },
]);

const currentImage = ref(slides.value[0].image);
const currentTitle = ref(slides.value[0].title);
const currentIndex = ref(0);

const rotateSlides = () => {
	currentIndex.value = (currentIndex.value + 1) % slides.value.length;
	currentImage.value = slideImages.value[currentIndex.value];
	currentTitle.value = slides.value[currentIndex.value].title;
};

onMounted(() => {
	setInterval(rotateSlides, 20000);

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
</script>

<style lang="scss" scoped>
@use "../style/variables" as *;
@use "../style/mixins" as *;

.speakscontainer {
	margin: 5rem 0;
	padding: 0 1.5rem;

	@include mobile {
		padding: 0 0.5rem;
	}

	h3 {
		text-align: center;
		margin-bottom: 32px;
		@include sub-header;
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
		}

		.carousel-container {
			display: flex;
			transition: transform 0.5s ease;
		}

		.carousel-slide {
			max-width: 100%;
			max-height: 20%;
			flex-shrink: 0;
			transition: opacity 0.5s ease;

			.image-container {
				width: 100%;
				height: 90%;
				img {
					width: 100%;
					height: 100%;
				}
			}

			.slide-details {
				display: flex;
				align-items: center;
				justify-content: space-between;

				h3 {
					font-size: 25px;
					margin-top: 1.5rem;

					@include mobile {
						font-size: 16px;
					}
				}

				ul {
					display: flex;
					gap: 1rem;

					a {
						font-family: $font-accent;
						font-size: 1.2rem;
						color: var(--text2-color);
						text-transform: capitalize;
						padding: 0.5em 1em;
						border-radius: 50px;
						background: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);

						@include mobile {
							font-size: 12px;
							padding: 0.5em 0.8em;
						}
					}
				}
			}
		}
	}
}
</style>
