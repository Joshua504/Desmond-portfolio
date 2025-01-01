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
				<div class="image-container">
					<img :src="article.img" alt="" />
				</div>
				<div class="article_text">
					<h3>{{ article.title }}</h3>
					<div>
						<a class="btn" :href="article.link">
							<p>view</p>
							<img src="../assets/Images/arrowUpRight.svg" alt="" />
						</a>
					</div>
				</div>
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
import cody from "../assets/Images/cody.png";
import eliminate from "../assets/Images/eliminate.png";
import noen from "../assets/Images/neon.jpg";
import multi from "../assets/Images/multi.png";
import serverless from "../assets/Images/serverless.png";
import translator from "../assets/Images/translator.png";
import understand from "../assets/Images/understanding.png";
import weather from "../assets/Images/weather.png";
import automate from "../assets/Images/automate.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted, computed } from "vue";

gsap.registerPlugin(ScrollTrigger);

const image = ref([
	cody,
	eliminate,
	noen,
	multi,
	serverless,
	translator,
	understand,
	weather,
	automate,
]);

const articles = ref([
	{
		id: 1,
		link: "https://dev.to/hackmamba/faster-postgres-queries-with-cloudflare-hyperdrive-and-neon-4200",
		img: image.value[2],
		title: "Faster Postgres Queries with Cloudflare Hyperdrive and Neon ",
	},
	{
		id: 2,
		link: "https://www.twilio.com/en-us/blog/understanding-database-transactions-postgres-twilio",
		img: image.value[6],
		title: "Understanding Database Transactions with Postgres and Twilio",
	},
	{
		id: 3,
		link: "https://www.twilio.com/en-us/blog/build-translation-bot-twilio-whatsapp-aws-translate",
		img: image.value[5],
		title: "Build a Translation Bot using Twilio WhatsApp and AWS Translate",
	},
	{
		id: 4,
		link: "https://sourcegraph.com/blog/5-steps-to-automate-repetitive-tasks-in-software-development",
		img: image.value[8],
		title: "5 steps to automate repetitive tasks in software development",
	},
	{
		id: 5,
		link: "https://questdb.com/blog/visualizing-weather-kafka-grafana/",
		img: image.value[7],
		title:
			"Weather data visualization and forecasting with QuestDB, Kafka and Grafana",
	},
	{
		id: 6,
		link: "https://www.twilio.com/en-us/blog/multi-factor-authentication-go-twilio-verify",
		img: image.value[3],
		title: "Multi-factor authentication in Go using Twilio Verify API",
	},
	{
		id: 7,
		link: "https://www.twilio.com/en-us/blog/running-twilio-serverless-functions-database-events",
		img: image.value[4],
		title: "Running Twilio Serverless Functions Using Database Events",
	},
	{
		id: 8,
		link: "https://dev.to/hackmamba/copilot-vs-cody-all-you-need-to-know-jdi",
		img: image.value[0],
		title: "Copilot vs. Cody: All you need to know ",
	},
	{
		id: 9,
		link: "https://www.coderabbit.ai/blog/5-code-review-anti-patterns-you-can-eliminate-with-ai",
		img: image.value[1],
		title: "5 Code Review Anti-Patterns You Can Eliminate with AI",
	},
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
	padding: 0 1.5rem;

	@include mobile {
		padding: 0 0.5rem;
	}

	h3 {
		margin-bottom: 1.25rem;
		@include sub-header;
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
			width: 30%;
			border: 0.125rem solid $text-color;
			flex-shrink: 0;
			border-radius: 1.2rem;
			position: relative;
			background: #8b8984;

			@include mobile {
				width: 100%;
			}

			.image-container {
				width: 100%;
				height: 300px;
				border-top-right-radius: 1rem;
				border-top-left-radius: 1rem;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					border-top-right-radius: 1rem;
					border-top-left-radius: 1rem;
				}
			}

			.article_text {
				height: 100px;
				align-items: center;
				padding: 0 1em;
				gap: 2em;
				@include flex;

				h3 {
					font-size: 16px;
					font-family: $font-accent;
					color: #000;

					@include mobile {
						font-size: 12px;
						text-align: start;
					}
				}

				.btn {
					gap: 1em;
					padding: 1em 2em;
					background: $secondary-color-1;
					font-size: 1.2rem;
					color: $text-color;
					transition: all 0.3s;
					@include flex;

					@include mobile {
						padding: 0.5em 1em;
					}
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

		@include mobile {
			gap: 1rem;
		}

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

			@include mobile {
				padding: 0.5rem 1rem;
				font-size: 14px;
			}
		}
	}
}
</style>
