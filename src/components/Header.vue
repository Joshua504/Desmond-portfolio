<template>
	<header>
		<div class="mini-info">
			<div class="mini-info__logo"><h1>Logo</h1></div>
			<div class="mini-info__details">
				<p class="details">
					{{ temperature }}°C lagos {{ currentTime }} * +234-000-0000-000 *
					<span class="email">anonx@gmail.com</span>
				</p>
			</div>
		</div>
		<div class="night-mode">
			<img @click="toggleDarkMode" :src="isDarkMode ? moon : sun" alt="" />
		</div>
		<!--  -->
	</header>
</template>
<script setup>
import { ref, onMounted } from "vue";
import moon from "../assets/Images/moon.svg";
import sun from "../assets/Images/sun.svg";

const isDarkMode = ref(false);

const toggleDarkMode = () => {
	isDarkMode.value = !isDarkMode.value;
	document.body.classList.toggle("light-mode", isDarkMode.value);
	localStorage.setItem("darkMode", isDarkMode.value);
};

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

	const savedDarkMode = localStorage.getItem("darkMode");
	if (savedDarkMode) {
		document.body.classList.toggle("dark-mode", isDarkMode.value);
	}
});
</script>

<style lang="scss" scoped>
@use "../style/mixins" as *;
@use "../style/variables" as *;

header {
	border-bottom: 2px solid var(--border-color);
	@include flex;
	justify-content: space-between;
	padding: 0.5625rem 1.2875rem;

	@include mobile {
		padding: 0.5625rem 0.625rem;
	}

	.mini-info {
		@include flex;
		gap: 2.25rem;

		@include mobile {
			flex-direction: column;
			align-items: baseline;
			gap: 0.5rem;
		}

		.mini-info__details {
			.details {
				color: var(--text-color);
				font-family: $font-accent;
				text-transform: capitalize;
			}
			@include mobile {
				display: none;
			}
			p {
				font-size: 1.375rem;
				color: $text-color;
			}

			.email {
				text-decoration: underline;
			}
		}
	}

	.night-mode {
		cursor: pointer;
	}
}
</style>
