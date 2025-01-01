<template>
	<main>
		<h3 class="title">selected projects</h3>
		<div class="projectscon" ref="projectContainer">
			<div class="project-wrapper" ref="projectWrapper">
				<div class="project">
					<div class="stackscon">
						<div class="stacks">
							<p>node js</p>
						</div>
						<div class="stacks">
							<p>mySQL</p>
						</div>
						<div class="stacks">
							<p>rust</p>
						</div>
						<div class="stacks">
							<p>golang</p>
						</div>
					</div>
					<div class="img-div"></div>
					<div class="projectdetails">
						<h3>fragile poetry</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
							consequatur molestiae
						</p>
					</div>
				</div>
				<div class="project blue">
					<div class="stackscon">
						<div class="stacks">
							<p>node js</p>
						</div>
						<div class="stacks">
							<p>mySQL</p>
						</div>
						<div class="stacks">
							<p>rust</p>
						</div>
						<div class="stacks">
							<p>golang</p>
						</div>
					</div>
					<div class="img-div"></div>
					<div class="projectdetails">
						<h3>fragile poetry</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
							consequatur molestiae
						</p>
					</div>
				</div>
				<div class="project purple">
					<div class="stackscon">
						<div class="stacks">
							<p>node js</p>
						</div>
						<div class="stacks">
							<p>mySQL</p>
						</div>
						<div class="stacks">
							<p>rust</p>
						</div>
						<div class="stacks">
							<p>golang</p>
						</div>
					</div>
					<div class="img-div"></div>
					<div class="projectdetails">
						<h3>fragile poetry</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
							consequatur molestiae
						</p>
					</div>
				</div>
				<div class="project green">
					<div class="stackscon">
						<div class="stacks">
							<p>node js</p>
						</div>
						<div class="stacks">
							<p>mySQL</p>
						</div>
						<div class="stacks">
							<p>rust</p>
						</div>
						<div class="stacks">
							<p>golang</p>
						</div>
					</div>
					<div class="img-div"></div>
					<div class="projectdetails">
						<h3>fragile poetry</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
							consequatur molestiae
						</p>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

const projectContainer = ref(null);
const projectWrapper = ref(null);

onMounted(() => {
	const sections = gsap.utils.toArray(".project");

	gsap.to(sections, {
		xPercent: -100 * (sections.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: ".projectscon",
			pin: true,
			scrub: 1,
			snap: 1 / (sections.length - 1),
			end: () => "+=" + document.querySelector(".projectscon").offsetWidth,
		},
	});
});
</script>

<style lang="scss" scoped>
@use "../style/variables" as *;
@use "../style/mixins" as *;

main {
	padding: 5rem 1.5rem;
	
	@include mobile{
		padding: 3rem 0;
	}
}

.title {
	@include sub-header;
}

.projectscon {
	padding: 2rem 0;
	overflow: hidden;

	.project-wrapper {
		display: flex;
		gap: 30px;
		width: 100%;

		@include mobile {
			gap: 25px;
		}
	}

	.project {
		width: 100%;
		background: yellow;
		padding: 2rem;
		height: 90vh;
		flex: 0 0 auto;

		@include mobile{
			padding: 0.8rem;
			height: 80vh;
		}
		.stackscon {
			display: flex;
			justify-content: end;
			gap: 1rem;

			@include mobile {
				justify-content: center;
				align-items: center;
				gap: 10px;
			}

			.stacks {
				background: $secondary-color;
				padding: 0.5rem 1rem;
				border-radius: 1.5rem;
				border: 2px solid $text-color;

				@include mobile {
					padding: .7rem;
					border: 1px solid $text-color;
				}

				p {
					font-family: $font-accent;
					font-size: 20px;
					text-transform: capitalize;
					color: $text-color;

					@include mobile {
						font-size: 15px;
					}
				}
			}
		}
		.projectdetails {
			h3 {
				font-size: 46px;
				text-transform: capitalize;
				color: $secondary-color-1;
				margin-bottom: 5px;
				font-family: $font-primary;

				@include mobile {
					font-size: 26px;
				}
			}
			p {
				font-size: 24px;
				font-family: $font-accent;
				color: $text-color;

				@include mobile {
					font-size: 15px;
				}
			}
		}
	}
	.img-div {
		width: 100%;
		height: 80%;
		margin: 5px 0;

		@include mobile {
			height: 70%;
		}
	}
	.blue {
		background: blue;
	}
	.purple {
		background: purple;
	}
	.green {
		background: green;
	}
}
</style>
