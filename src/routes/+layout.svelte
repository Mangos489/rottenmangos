<script lang="ts">
    import { base } from '$app/paths';
    import '/src/global.css'
</script>
 
<nav>
    <a href="{base}/">Home</a>
    <a href="{base}/Archive">Archive</a>
    <a href="{base}/Contact">Contact</a>
    <a href="{base}/Projects">Projects</a>
    <a href="{base}/About">About me</a>
</nav>

<main>
	<slot />
</main>
