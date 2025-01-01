<template>
	<section class="about">
		<div class="abt-text" ref="aboutText">
			<h3>behind the code</h3>
			<section class="smalltextcon">
				<img class="pin" src="../assets/Images/pin.svg" alt="" />
				<div class="small_textcon">
					<p class="sub_text">
						With 5 years of experience in backend development, I specialize in
						crafting robust, scalable, and high-performance systems. My
						expertise spans across multiple programming languages and
						frameworks, including JavaScript, Node.js, TypeScript, Go, and Rust,
						which enable me to deliver efficient solutions tailored to specific
						needs.
					</p>

					<p class="sub_text">
						I thrive in environments where problem-solving meets creativity,
						building the backbone of web applications that power seamless user
						experiences. While my core strength lies in backend architecture and
						infrastructure, I’m equally comfortable collaborating on full-stack
						projects, with proficiency in modern frontend technologies like
						React and Vue.
					</p>

					<p class="sub_text">
						Whether it’s optimizing server-side performance, building APIs, or
						ensuring systems run smoothly under heavy load, I’m passionate about
						writing clean, maintainable code that drives digital innovation.
					</p>

					<p>
						When I’m not coding, you’ll find me exploring new technologies,
						contributing to open-source projects, or sharpening my skills to
						stay at the cutting edge of software development.
					</p>
				</div>
			</section>
		</div>
		<!-- /* --------------------------------- flexed --------------------------------- */ -->
		<div class="imgcontainer" ref="aboutImg">
			<img class="tape" src="../assets/Images/Tape.svg" alt="" />
			<div class="imgslider">
				<section class="slider">
					<div class="slides">
						<img src="../assets/Images/avatar.jpg" alt="" />
					</div>
				</section>
			</div>
			<img class="tape tape-2" src="../assets/Images/Tape.svg" alt="" />
		</div>
	</section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

const aboutText = ref(null);
const aboutImg = ref(null);

const elements = {
	aboutText,
	aboutImg,
};

onMounted(() => {
	let mediaQuery = gsap.matchMedia();

	mediaQuery.add("(min-width: 768px)", () => {
		const initialPositions = {
			aboutText: { x: "-100%", opacity: 0 },
			aboutImg: { x: "100%", opacity: 0 },
		};

		Object.entries(initialPositions).forEach(([key, position]) => {
			gsap.set(elements[key].value, position);
		});

		gsap.to(aboutText.value, {
			scrollTrigger: {
				trigger: aboutText.value,
				start: "top 60%",
				// scrub: 1,
				toggleActions: "play none none none",
			},
			opacity: 1,
			x: 0,
			duration: 1.5,
			ease: "expo.out",
		});

		gsap.to(aboutImg.value, {
			scrollTrigger: {
				trigger: aboutImg.value,
				start: "top 60%",
				// scrub: 1,
				toggleActions: "play none none none",
			},
			opacity: 1,
			x: 0,
			duration: 1.5,
			ease: "expo.out",
			delay: 0.8, // Slight delay for staggered effect
		});
	});
});
</script>

<style lang="scss" scoped>
@use "../style/variables" as *;
@use "../style/mixins" as *;

.about {
	@include flex;
	justify-content: space-between;
	margin: 5rem 0;
	padding: 0 1.5rem;
	overflow: hidden;

	@include mobile {
		flex-direction: column;
		gap: 2rem;
		padding: 0 0.5rem;
	}

	.abt-text {
		width: 100%;
		max-width: 1000px;

		h3 {
			margin-bottom: 0.625rem;
			@include sub-header;
		}

		.smalltextcon {
			background: var(--secondary-color);
			padding: 1.25rem 1.25rem 9.875rem;
			position: relative;

			@include mobile {
				padding: 0.8rem 0.8rem 1.5rem;
			}

			.pin {
				position: absolute;
				left: 45%;
				transform: translate(-50%, -50%);
			}

			.small_textcon {
				background: var(--background-color);
				padding: 1.25rem;

				@include mobile {
					padding: 1rem;
				}

				p {
					font-size: 1.2rem;

					@include mobile {
						font-size: 0.9rem;
						margin-bottom: 0.5rem;
					}
				}
				.sub_text {
					margin-bottom: 1.5625rem;

					@include mobile {
						font-size: 0.9rem;
						margin-bottom: 0.5rem;
					}
				}
			}
		}
	}
	.imgcontainer {
		position: relative;
		width: 100%;
		max-width: 800px;
		background: var(--secondary-color);
		padding: 15px 4px;

		@include mobile {
			padding: 6px 5px;
		}

		.tape {
			position: absolute;
			left: -125px;
			top: -85px;
			margin: auto;
			z-index: 1;

			@include mobile {
				width: 40%;
				left: -70px;
				top: -40px;
			}
		}
		.tape-2 {
			bottom: -55rem;
			right: -55rem;

			@include mobile {
				bottom: -26rem;
				right: -26rem;
			}
		}
		.imgslider {
			@include flex;
			justify-content: center;
			overflow: hidden;

			.slider {
				@include flex;
				padding: 0 9px;

				@include mobile {
					padding: 0 8px;
				}

				&:hover {
					animation-play-state: paused;
				}

				.slides {
					flex: 0 0 auto;
					width: 100%;
					margin-right: 20px;
				}

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}
}
</style>
