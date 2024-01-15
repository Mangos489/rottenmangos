<script>
    import '$lib/styling/contact.css'
    import one from '$lib/webimages/contact/img1.png'
    import two from '$lib/webimages/contact/img2.png'
</script>
<main>

    <body>
    <div class="t">
        <div class="title">
            <p>(Contact)</p>
        </div>

        <div class="d">
            <p>To schedule an appointment to obtain a quote please submit a contact form. For expedited service you may contact client outreach through email.</p>
        </div>
        
        <div class="da">
            <p>Thank you for choosing Rotten Mangos as your  primary software provider</p>
        </div>

    </div>

    <div class="alpha">

        <div class="aform">
            <div class="forms">
                <form
				id="contact-form"
				name="contact"
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>                <p>
                      <label>Your Name: <input type="text" name="name" /></label>
                    </p>
                    <p>
                      <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                      <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                      <button type="submit">Send</button>
                    </p>
                  </form>
                  
            </div>
        </div>

        <div class="formcolom">
            <div class="colom1">
                <img class="at" src="{one}" alt="background1">
            </div>
        
            <div class="colom2">
                <p>Insert clientoutreachrottenmangos@gmail.com</p>
            </div>

            <div class="colom3">
                <img class="b" src="{two}" alt="background2">
            </div>

        </div>
    </div>
    </body>
</main>