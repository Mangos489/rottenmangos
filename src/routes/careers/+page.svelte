<script>
	import '$lib/styling/careers.css'
	import List from '$lib/components/careers/list.svelte'
	import Form from '$lib/components/careers/form.svelte'

</script>
<body>
	<div class="zheader">
		<p class="ztitle">
			(Careers)
		</p>
		<p class="ztext">
			We are always searching for people who can lend their talents to help Rotten Mangos meet the needs of our clientel and expand our services. 
			 Open Positions are listed below. An interview will be conducted through zoom. 
		</p>
	</div>

	<div class="zalpha">
		<div class="zaform">
			<div class="forms">
				<Form></Form>
			</div>
		</div>		
		<div class="formcolom">
			<List></List>
		</div>
	</div>
</body>
