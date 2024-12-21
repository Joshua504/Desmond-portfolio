<template>
	<section class="article-container" ref="articleContainer">
		<h3>articles</h3>
		<div class="article-description">
			<img class="pin" src="../assets/Images/pin.svg" alt="" />
			<img class="pin-2" src="../assets/Images/pin2.svg" alt="" />
			<p class="article_text">
				Welcome to the blog! Here, you’ll find deep dives into backend
				development, covering everything from server-side programming,
				performance optimization, and API design to exploring modern frameworks
				like Node.js, Go, and Rust. Each post is crafted to offer practical
				insights, solutions to common challenges, and best practices for
				building scalable, efficient systems.
			</p>
			<button>
				<p>Hire me for technical writing</p>
				<img src="../assets/Images/arrowUpRight.svg" alt="" />
			</button>
		</div>
		<section class="article_wrapper" ref="articleWrapper">
			<div
				v-for="article in displayedArticles"
				:key="article.id"
				class="article"
			>
				<router-link class="btn"
					><p>view</p>
					<img src="../assets/Images/arrowUpRight.svg" alt=""
				/></router-link>
			</div>
		</section>

		<div class="pagination">
			<button
				class="pagination-btn"
				@click="previousPage"
				:disabled="currentPage === 1"
			>
				Previous
			</button>
			<span>{{ currentPage }} / {{ totalPages }}</span>
			<button
				class="pagination-btn"
				@click="nextPage"
				:disabled="currentPage === totalPages"
			>
				Next
			</button>
		</div>
	</section>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted, computed } from "vue";

gsap.registerPlugin(ScrollTrigger);

const articles = ref([
	{ id: 1, title: "article 1" },
	{ id: 2, title: "article 2" },
	{ id: 3, title: "article 3" },
	{ id: 4, title: "article 4" },
	{ id: 5, title: "article 5" },
	{ id: 6, title: "article 6" },
	{ id: 7, title: "article 7" },
	{ id: 8, title: "article 8" },
	{ id: 9, title: "article 9" },
	{ id: 10, title: "article 10" },
	{ id: 11, title: "article 11" },
	{ id: 12, title: "article 12" },
	{ id: 13, title: "article 13" },
	{ id: 14, title: "article 14" },
	{ id: 15, title: "article 15" },
	{ id: 16, title: "article 16" },
	{ id: 17, title: "article 17" },
	{ id: 18, title: "article 18" },
]);

const itemsPerPage = 6;
const currentPage = ref(1);

const totalPages = computed(() =>
	Math.ceil(articles.value.length / itemsPerPage)
);

const displayedArticles = computed(() => {
	const start = (currentPage.value - 1) * itemsPerPage;
	const end = start + itemsPerPage;
	return articles.value.slice(start, end);
});

const nextPage = () => {
	if (currentPage.value < totalPages.value) {
		currentPage.value++;
	}
};

const previousPage = () => {
	if (currentPage.value > 1) {
		currentPage.value--;
	}
};

const articleContainer = ref(null);
const articleWrapper = ref(null);

onMounted(() => {
	gsap.set(articleContainer.value, {
		scale: 0.8,
		opacity: 0,
	});

	gsap.set(articleWrapper.value, {
		x: "100%",
		opacity: 0,
	});

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: articleContainer.value,
			start: "top 60%",
			toggleActions: "play none none reverse",
		},
	});

	tl.to(articleContainer.value, {
		scale: 1,
		opacity: 1,
		duration: 1.8,
		ease: "expo.out",
		transformOrigin: "center center",
	});

	tl.to(
		articleWrapper.value,
		{
			x: 0,
			opacity: 1,
			duration: 1.5,
			ease: "power4.out",
		},
		"-=0.8"
	); // Overlap with previous animation
});
</script>

<style lang="scss" scoped>
@use "../style/variables" as *;
@use "../style/mixins" as *;
@use "../style/global" as *;

.article-container {
	margin: 5rem 0;

	h3 {
		@include sub-header;
		margin-bottom: 1.25rem;
	}

	.article-description {
		background: #fff;
		padding: 0.875rem 1.75rem;
		width: 100%;
		max-width: 42.9375rem;
		margin-bottom: 5rem;
		position: relative;

		.pin {
			position: absolute;
			right: -0.625rem;
			top: -1.25rem;
		}
		.pin-2 {
			position: absolute;
			left: -1.25rem;
			top: -1.25rem;
		}

		.article_text {
			margin-bottom: 2.375rem;
			color: var(--text1-color);
		}

		button {
			@include description-btn;
		}
	}

	.article_wrapper {
		@include flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1em;
		margin-bottom: 1em;

		.article {
			width: 37.5rem;
			height: 22.3125rem;
			border: 0.125rem solid $text-color;
			flex-shrink: 0;
			border-radius: 0.9375rem;
			position: relative;
			background: #8b8984;

			@include mobile {
				width: 100%;
			}

			.btn {
				@include flex;
				gap: 1em;
				position: absolute;
				bottom: 0;
				right: 0;
				padding: 1em 2em;
				background: $secondary-color-1;
				border-bottom-right-radius: 0.9375rem;
				font-size: 1.2rem;
				color: $text-color;
				transition: all 0.3s;

				&:hover {
					border-top: 0.125rem solid $text-color;
					border-left: 0.125rem solid $text-color;
				}

				@include mobile {
					padding: 0.5em 1em;
				}
			}
		}
	}

	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		margin-top: 2rem;

		.pagination-btn {
			padding: 1rem 2rem;
			background: $accent-color;
			border: 2px solid var(--text-color);
			color: #ffffff;
			font-size: 16px;
			font-family: $font-accent;
			border-radius: 10px;
			transition: all 0.3s;
			cursor: pointer;

			&:disabled {
				opacity: 0.5;
				cursor: not-allowed;
			}
		}
	}
}
</style>
