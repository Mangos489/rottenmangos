<script lang="ts">
    import '$lib/styling/components/form.css'

    //Everything here makes the sveltekit netlify port possible./Z/
    //btw pls ignore the error messages in terminal, its needed to make this work//
    import type contactFormSubmission from '$lib/types/contact-form-submission'
	import { onMount } from 'svelte'

	let isSubmitted = false
	let showError = false

	let formData: contactFormSubmission = {
		from_page: '',
		name: '',
		email: '',
		message: '',
        phone:''
	}

	onMount((): void => {
		const params = new URLSearchParams(window.location.search)
		formData = { ...formData, from_page: params.get('from_page') }
	})

	const encode = (data: object): string => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&')
	}

	const handleSubmit = (e: Event): void => {
		const { name, email, message, phone, from_page } = formData

		if (!name || !email || !message|| !phone) {
			showError = true
			return
		}
		
		const target = e.target as HTMLFormElement
		fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: encode({
					'form-name': target.getAttribute('name'),
					...formData,
				}),
			})
			.then(() => { isSubmitted = true })
			.catch(error => alert(error))
	}
    //END OF SCRIPT FOR Sveltekit Netlify Porter//
</script>

                <!--Makes submissions go through and serves as a sveltekit netlify porter-->
                <!--Makes submissions go through and serves as a sveltekit netlify porter-->

                {#if !isSubmitted}
                <noscript>
                    <h3>Sorry, this contact form won't work without JavaScript enabled.</h3>
                    <p>I don't do any tracking or anything like that though (except some <a href="https://umami.is">privacy-respecting analytics</a>), if that's your concern.</p>
                </noscript>
    
                <p class="lowered">
                    <i>
                    Email addresses submitted here are used only for replies.
                    </i>
                </p>
    
                <form
                    id="contact-form"
                    name="contact"
                    method="post"
                    on:submit|preventDefault={handleSubmit}
                    action="/success/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                        <label>
                            Don’t fill this out: <input name="bot-field" />
                        </label>
                    </p>
                    <input type="hidden" name="from_page" bind:value={formData.from_page} />
                    <div class="sender-info">
                        <div class="field">
                            <label for="name" class="label" >Name:</label>
                            <input type="text" name="name" bind:value={formData.name} placeholder="What should we call you?" />
                        </div>
                        <div class="field">
                            <label for="email">
                                Email:
                            </label>
                            <input type="email" name="email" bind:value={formData.email} placeholder="Where can we send a response?" />
                        </div>
                    </div>
    
                    <div class="message-wrapper field">
                        <label class="labelone" for="message">Desired position:</label>
                        <textarea name="message" bind:value={formData.message} rows="6" placeholder="Please enter your desired position and relevant experience."></textarea>
                    </div>
    
                    {#if showError}
                        <div class="error">
                            Please make sure all above fields are filled out. Thanks!
                        </div>
                    {/if}
                        <button class="buttonone" type="submit">
                            Send
                        </button>
                </form>
            {:else}
                    <p class="meh">
                    Thank you for your interest, please send your resume to DevrottenMangos@gmail.com. You can expect a response within two days.
                    </p>
                {/if}

            <!--END OF PORT-->
