<script>
	
	import { Accordion, AccordionItem } from 'svelte-collapsible'
	
	const items = [
		{
			key: 'a',
			title: 'Ruby Developer',
			subtitle: 'Open Position Hr/$25-$40',
			text: 'We are looking for Ruby Developers experienced with using Ruby on Rails and Postgres or Heroku. Please have at least one completed project that reflects your skill set and experience. This is an entry level position'
		},
		{
			key: 'b',
			title: 'Public Outreach',
			subtitle: ' Open  Position Hr/$23-$30',
			text: '-We are looking for a professional yet friendly character to communicate with clients interested in our services.-Set meetings and arrange appointments for our developers and clients to meet and discuss project details. -Experience with Google sheets to maintain records on Client contact information.'
		},
		{
			key: 'c',
			title: 'Rust Developer',
			subtitle: 'Open Position Hr/$25-$40',
			text: 'We are looking for Rust developers with experience using frameworks such as Axume, Actix, or etc. Experience with databases and creating web apps is highly appreciated. Please have at least one completed project that reflects your skill set and experience. This is an entry level position.'
		}
	]
</script>

<Accordion>
	
	{ #each items as item }
	
		<AccordionItem key={item.key}>
			<div slot='header' class='header'>
				<div>
					<h6>{ item.title }</h6>
					<p>{ item.subtitle }</p>
				</div>
			</div>
			
			<p slot='body' class='body'>
				{ item.text }
			</p>

		</AccordionItem>
	
	{ /each }

</Accordion>


<style>
	
	:global(.accordion) {
		width: 60%;
	    margin: 0 auto;	
	}
	
	:global(.accordion-item) {
		border-bottom: 2px solid #4D4D51;
		background-color: #212125;
	}
	.header {
		display: flex;
		align-items: center;
		padding: 0.5em;
		color: rgba(248, 255, 255, 0.7);
	}
	.header p {
    font-size: 16px;
    margin: 0;
    color: rgba(248, 255, 255, 0.5);

}

.header h6 {
    font-size: 16px;
    margin: 0;
	padding: 0;
    color: rgba(248, 255, 255, 0.7);
}		

	.body {
		font-size: 18px;
		padding: 0.5em;
	    margin: 0;
		background-color: #212125;
		color: rgba(248, 255, 255, 0.8);
	}
	@media only screen and (max-width: 600px) {
  
        :global(.accordion) {
    width: 70%;
    margin: 0 auto;	
}

:global(.accordion-item) {
    border-bottom: 2px solid #4D4D51;
    background-color: #212125;
}
.header {
    align-items: center;
    padding: 0.5em;
    color: rgba(248, 255, 255, 0.7);
}
.header p {
    font-size: 10px;
    margin: 0;
    color: rgba(248, 255, 255, 0.5);

}

.header h6 {
    font-size: 13px;
    margin: 0;
	padding: 0;
    color: rgba(248, 255, 255, 0.7);
}	

.body {
    font-size: 12px;
    padding: 0.5em;
    margin: 0;
	background-color: #212125;
    color: rgba(248, 255, 255, 0.8);
}}
</style>