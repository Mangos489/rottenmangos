<script lang="ts">
	import { base } from '$app/paths';
	import '/src/global.css';
	import image from '$lib/logo5.png';
	import gitlogo from '$lib/logos/gitlogo.png'
	import instalogo from '$lib/logos/instalogo.png'
	import twtlogo from '$lib/logos/twtlogo.png'
	import lnkdlogo from '$lib/logos/linklogo.png'
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
				  <a class="anavlink" href="{base}/products">Products</a>
				  <a class="anavlink" href="{base}/careers">Careers</a>
			      <a class="anavlink" href="{base}/Archive">Archive</a>
				  <a class="anavlink" href="{base}/contact">Contact</a>
			    <ul class="mobilemargin1">
					<a class="anavlink" href="{base}/team">Team</a>
				</ul>
			</ul>
		</div>
	</div>

	    <main>
		  <slot />
	    </main>

	<div class="footer">
		<div class="logosbox">

		</div>
	</div>
</body>


<style>
	
	/* These are desktop settings for header*/
	.anavlink {
		color: black;
		font-size: 42px;
		font-family: 'Chomsky', Arial, Helvetica;
		text-decoration: none;
		line-height: 70px;
		padding: 5px 12.5px;
		opacity: 0.7;
	}
	.mobilemargin1{
		margin-top: 0%;
	}

	.imghome {
		width: 56px;
		height: auto;
		float: left;
		margin-top: 0.5%;
		margin-left: -8%;
		border-radius: 8px 8px 8px 8px;
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

	/* These are footer settings*/
	.footer {
	  margin-top: 18%;
      bottom: 0;
      width: 100%;
	  height: 365px;
      background-color: #690404;
    }
	.logosbox{
      float: left;
	  width: 150px;
	  height: auto;
	  margin-top: 13.5%;
	  margin-left: 4%;;
	}
	.glogo{
		grid-area: header;
		width: 56px;
		height: auto;
		border-radius: 8px 8px 8px 8px;
	}
	.ilogo{
		grid-area: header;
		width: 57px;
		height: auto;
		border-radius: 8px 8px 8px 8px;
		margin-left: 2%;
		margin-right: 3%;
	}
	.tlogo{
		grid-area: main;
		width: 56px;
		height: auto;
		border-radius: 8px 8px 8px 8px;
		margin-bottom: 4%;
		}

    .llogo{
		grid-area: sidebar;
		width: auto;
		height: 60px;
		border-radius: 8px 8px 8px 8px;
	}

	/** Mobile settings*/
	/** Mobile settings*/

	@media only screen and (max-width: 389px) {
	    .anavlink {
		color: rgb(8, 8, 8);
		font-size: 24px;
		font-family: 'Chomsky', Arial, Helvetica;
		text-decoration: none;
		opacity: 0.8;
		line-height: 30px;
		padding: 5px 8.5px;
	}
	.mobilemargin1{
		margin-top: -2%;
		margin-left:  0%;
		margin-right: 0% ;
		padding: 5px 60px 0px 0px;
	}
	
	.imghome {
		width: 56px;
		height: auto;
		float: left;
		margin-top: 2%;
		margin-left: -26%;
		border-radius: 8px 8px 8px 8px;
	}
	.logofont {
		width: 38px;
		height: auto;
		float: left;
		margin-top: 3%;
		margin-left: 16.5%;
		color: #d0d0d0;
		font-family: 'Chomsky', Arial, Helvetica;
		font-size: 36px;
		text-decoration: none;
	}

	/* These are footer settings*/
	.footer {
	  margin-top: 60%;
      bottom: 0;
      width: 100%;
	  height: 365px;
      background-color: #690404;
    }
	.logosbox{
      float: left;
	  width: 150px;
	  height: auto;
	  margin-top: 13.5%;
	  margin-left: 4%;;
	}
	.glogo{
		grid-area: header;
		width: 56px;
		height: auto;
		border-radius: 8px 8px 8px 8px;
	}
	.ilogo{
		grid-area: header;
		width: 57px;
		height: auto;
		border-radius: 8px 8px 8px 8px;
		margin-left: 2%;
		margin-right: 3%;
	}
	.tlogo{
		grid-area: main;
		width: 56px;
		height: auto;
		border-radius: 8px 8px 8px 8px;
		margin-bottom: 4%;
		}

    .llogo{
		grid-area: sidebar;
		width: auto;
		height: 60px;
		border-radius: 8px 8px 8px 8px;
	}
}

@media screen and (min-width: 390px) and (max-width: 400px) {
	.anavlink {
		color: rgb(8, 8, 8);
		font-size: 24px;
		font-family: 'Chomsky', Arial, Helvetica;
		text-decoration: none;
		opacity: 0.8;
		line-height: 30px;
		padding: 5px 8.5px;
	}
	.mobilemargin1{
		margin-top: -2%;
		margin-left:  0%;
		margin-right: 0% ;
		padding: 5px 60px 0px 0px;
	}
	
	.imghome {
		width: 56px;
		height: auto;
		float: left;
		margin-top: 2%;
		margin-left: -25%;
		border-radius: 8px 8px 8px 8px;
	}
	.logofont {
		width: 38px;
		height: auto;
		float: left;
		margin-top: 3%;
		margin-left: 16.5%;
		color: #d0d0d0;
		font-family: 'Chomsky', Arial, Helvetica;
		font-size: 36px;
		text-decoration: none;
	}
		/* These are footer settings*/
		.footer {
	  margin-top: 60%;
      bottom: 0;
      width: 100%;
	  height: 365px;
      background-color: #690404;
    }
	.logosbox{
      float: left;
	  width: 150px;
	  height: auto;
	  margin-top: 13.5%;
	  margin-left: 4%;;
	}
	.glogo{
		grid-area: header;
		width: 56px;
		height: auto;
		border-radius: 8px 8px 8px 8px;
	}
	.ilogo{
		grid-area: header;
		width: 57px;
		height: auto;
		border-radius: 8px 8px 8px 8px;
		margin-left: 2%;
		margin-right: 3%;
	}
	.tlogo{
		grid-area: main;
		width: 56px;
		height: auto;
		border-radius: 8px 8px 8px 8px;
		margin-bottom: 4%;
		}

    .llogo{
		grid-area: sidebar;
		width: auto;
		height: 60px;
		border-radius: 8px 8px 8px 8px;
	}
}

/* Styles for screens with height between 601px and 900px */
@media screen and (min-width: 401px) and (max-width: 900px) {
	.anavlink {
		color: rgb(8, 8, 8);
		font-size: 24px;
		font-family: 'Chomsky', Arial, Helvetica;
		text-decoration: none;
		opacity: 0.8;
		line-height: 30px;
		padding: 5px 8.5px;
	}
	.mobilemargin1{
		margin-top: -2%;
		margin-left:  0%;
		margin-right: 0% ;
		padding: 5px 60px 0px 0px;
	}
	
	.imghome {
		width: 56px;
		height: auto;
		float: left;
		margin-top: 2%;
		margin-left: -23%;
		border-radius: 8px 8px 8px 8px;
	}
	.logofont {
		width: 38px;
		height: auto;
		float: left;
		margin-top: 3%;
		margin-left: 16.5%;
		color: #d0d0d0;
		font-family: 'Chomsky', Arial, Helvetica;
		font-size: 36px;
		text-decoration: none;
	}
		/* These are footer settings*/
		.footer {
	  margin-top: 54%;
      bottom: 0;
      width: 100%;
	  height: 365px;
      background-color: #690404;
    }
	.logosbox{
      float: left;
	  width: 150px;
	  height: auto;
	  margin-top: 13.5%;
	  margin-left: 4%;;
	}
	.glogo{
		grid-area: header;
		width: 56px;
		height: auto;
		border-radius: 8px 8px 8px 8px;
	}
	.ilogo{
		grid-area: header;
		width: 57px;
		height: auto;
		border-radius: 8px 8px 8px 8px;
		margin-left: 2%;
		margin-right: 3%;
	}
	.tlogo{
		grid-area: main;
		width: 56px;
		height: auto;
		border-radius: 8px 8px 8px 8px;
		margin-bottom: 4%;
		}

    .llogo{
		grid-area: sidebar;
		width: auto;
		height: 60px;
		border-radius: 8px 8px 8px 8px;
	}
}
</style>
