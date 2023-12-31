<script lang="ts">
	import { base } from '$app/paths';
	import '/src/global.css';
	import image from '$lib/logo5.png';
</script>

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
	<div class="navigation-bar">
		<div id="navigation-container">
			<a class="logofont" href="{base}/">Rotten Mangos</a>
			<a href="{base}/">
				<img class="imghome" src="{image}" alt="logo" />
			</a>
			<ul>
				<a class="anavlink" href="{base}/Archive">Archive</a>
				<a class="anavlink" href="{base}/contact">Contact</a>
				<a class="anavlink" href="{base}/Projects">Projects</a>
				<a class="anavlink" href="{base}/about">About me</a>
				<a class="anavlink" href="{base}/skillset">Skill Set</a>
			</ul>
		</div>

	</div>
	<main>
		<slot />
	</main>
	
</body>


<style>
	.anavlink {
		color: black;
		font-size: 42px;
		font-family: 'Chomsky', Arial, Helvetica;
		text-decoration: none;
		line-height: 70px;
		padding: 5px 12.5px;
		opacity: 0.7;
	}

	.imghome {
		width: 56px;
		height: auto;
		float: left;
		margin-top: 0.5%;
		margin-left: -8%;
		border-radius: 8px 8px 8px 8px; /* Top-left, top-right, bottom-right, bottom-left */
	}
	.logofont {
		width: 38px;
		height: auto;
		float: left;
		margin-top: 0.3%;
		margin-left: -3%;
		color: #d0d0d0;
		font-family: 'Chomsky', Arial, Helvetica;
		font-size: 42px;
		text-decoration: none;
	}

</style>
