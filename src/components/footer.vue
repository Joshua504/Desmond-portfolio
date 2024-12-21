<template>
	<footer>
		<section class="logo-section">
			<div>
				<h1>anonx</h1>
			</div>
			<div>
				<p>{{ temperature }}°C lagos {{ currentTime }}</p>
				<p>Booked until November 2024</p>
			</div>
		</section>
		<section class="logo-section work-days">
			<div>
				<h3>work days</h3>
				<p>monday - friday</p>
			</div>
			<div class="anyidea">
				<h3>have a project in mind ?</h3>
				<div class="emailsection">
					<img src="../assets/Images/arrowRight.svg" alt="" />
					<div>
						<p><span>anonx</span>@<span>gmail.com</span></p>
					</div>
				</div>
			</div>
		</section>
		<section class="logo-section socials">
			<div>
				<div><h4>socials</h4></div>
				<ul>
					<router-link to=""> <li>github</li> </router-link>
					<router-link to=""> <li>linkedin</li> </router-link>
					<router-link to=""> <li>twitter</li> </router-link>
					<router-link to=""> <li>instagram</li> </router-link>
				</ul>
			</div>
			<div class="copyright">
				<p>© 2024 Cyd Stumpel</p>
				<p>designed & created by <span>chukwuebuka joshua</span></p>
			</div>
		</section>
	</footer>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentTime = ref("");
const temperature = ref(null);

const updateTime = () => {
	const now = new Date();
	currentTime.value = now.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});
};
const fetchTemperature = async () => {
	const API_KEY = "ed1f7debc1cbbbd6f1ffaf116e176e1b";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=${API_KEY}`;

	try {
		const response = await fetch(url);
		const data = await response.json();
		temperature.value = Math.round(data.main.temp);
	} catch (error) {
		temperature.value = "--";
	}
};

onMounted(() => {
	updateTime();
	setInterval(updateTime, 1000);
	fetchTemperature();
	setInterval(fetchTemperature, 1800000);
});
</script>

<style lang="scss" scoped>
@use "../style/variables" as *;
@use "../style/mixins" as *;

footer {
	padding: 1.875rem 1.25rem;
	border-top: 1px solid var(--border-color);

	@include mobile {
		padding: 1.875rem 1rem;
	}

	.logo-section {
		@include flex;
		justify-content: space-between;

		@include mobile {
			flex-direction: column;
		}

		div {
			h1 {
				font-size: 8rem;
				text-transform: capitalize;

				@include mobile {
					font-size: 4rem;
				}
			}
		}
		div {
			p {
				font-size: 1.25rem;
				margin-bottom: 0.625rem;

				@include mobile {
					font-size: 1rem;
					text-align: center;
				}
			}
		}
	}

	.work-days {
		div {
			h3 {
				font-size: 4.25rem;
				text-transform: capitalize;

				@include mobile {
					font-size: 3rem;
				}
			}
			p {
				font-size: 2rem;
				text-transform: capitalize;

				@include mobile {
					font-size: 1.5rem;
				}
			}
		}

		.anyidea {
			h3 {
				font-size: 3rem;

				@include mobile {
					font-size: 1.5rem;
				}
			}

			.emailsection {
				@include flex;
				gap: 2em;
				justify-content: right;

				@include mobile {
					justify-content: center;
				}

				div {
					p {
						cursor: pointer;

						span {
							text-decoration: underline;
						}
					}
				}
			}
		}
	}

	.socials {
		div {
			@include flex;
			align-items: baseline;
			gap: 2em;

			@include mobile {
				flex-direction: column;
				gap: 1em;
				justify-content: center;
				align-items: center;
			}

			div {
				h4 {
					font-size: 3rem;
					text-transform: capitalize;

					@include mobile {
						font-size: 2rem;
					}
				}
			}

			ul {
				@include flex;
				gap: 2em;

				@include mobile {
					gap: 1em;
				}

				a {
					font-size: 32px;
					text-transform: capitalize;
					text-decoration: underline;
					color: var(--text3-color);

					@include mobile {
						font-size: 20px;
					}
				}
			}
		}

		.copyright {
			flex-direction: column;
			gap: 0;
			align-items: end;

			@include mobile {
				margin-top: 15px;
				align-items: center;
			}

			p {
				font-size: 1.25rem;
				text-transform: capitalize;

				span {
					text-decoration: underline;
				}
			}
		}
	}
}
</style>
