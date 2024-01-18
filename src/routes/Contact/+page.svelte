<script lang="ts">
    import one from '$lib/webimages/contact/img1.png'
    import two from '$lib/webimages/contact/img2.png'
    import '$lib/styling/contact.css'
    import Form from '$lib/components/contact/form.svelte'
</script>
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
    
    <div class="banner">
        <img class="b" src="{two}" alt="background2">
    </div>

    <div class="alpha">
        <div class="aform">
            <div class="forms">
                <Form></Form>
            </div>
        </div>

        <div class="formcolom">
            <div class="colom2">
                <p class="fonta">(Email)</p>
                <p class="fontb">Clientoutreachrottenmangos@gmail.com</p>
            </div>

            <div class="colom3">
                <img class="at" src="{one}" alt="background1">
            </div>

        </div>
    </div>
</body>