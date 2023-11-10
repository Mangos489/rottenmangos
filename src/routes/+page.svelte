<script>
	import welcome from '$lib/BNA.jpg';
	import welcome_fallback from '$lib/BNA.jpg';
    import 'Style.css';
</script>

<svelte:head>
	<title>RottenMangos</title>
	<meta name="2nd page" content="Second Page" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

</section>