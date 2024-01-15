<script>
  import image1 from '$lib/logo5.png';
  import { base } from '$app/paths';
</script>

<body>
  <p class ="top">
    (Welcome)  
  </p>
    <div class="containtop">
      <div class="greycontainer">
        <div class="boxtxt">
          <p> Rotten Mangos is a Los Angeles marketing agency that seeks to promote 
            and elevate local buisness by offering competitve yet affordable 
            services that align with the interests of our clinetel.
          </p>
          <p class="transparent">filler</p>
            <p class="title">(Our philosophy)</p>
          <p>
            Local Businesses are now faced with insurmountable challenges when competing
             against corporate America. By utilizing affordable and powerful
             <a style=" text-decoration:none; color:#DEC18F;" href="{base}/products">tools</a>
               we seek to curate websites that minimize how many hands touch the income
               of our clients while also offering affordable service.    
          </p>
          <p class="transparent">filler</p>
            <p class="title2"> (Competition) </p>
          <p>
            Professional apperanceses are everything, from ensuring that missed
            fees are payed to ensuring a smooth transaction of goods. Professional
            apperances grant a buisness legitamacy, authority but most importantly
            respect. A professional apperance adds weight to the pentalies placed
            upon customers when fees are unmet thus ensuring businesses are made whole. 
          </p>
        </div>
      </div>
      <img class="skull" src="{image1}" alt="Img">
    </div>


</body>

<style>
  .top{
    font-family: 'bestchristmas';
    font-size: 73px;
    margin-right: 48%;
    margin-top: 4%;
  }
  .greycontainer{
    background-color: #3e3a3a00;
    border-radius: 8px 8px 8px 8px;
    display:inline-block;
    vertical-align:left;
    margin-right: 48%;
    width: 600px;
    height: auto;
    margin-top: -6%;
    margin-left: -10%;
  }
  .boxtxt{
    font-family: "blackchancery";
    color: #ffffff;
    font-size: 36px;
  }
  .transparent{
    color: #3e3a3a00;
  }
  .skull{
    width: 600px;
		height: auto;
    float: right;
		margin-top: -106.5%;
		margin-right: -10%;
		border-radius: 10px 10px 10px 10px;
  }
  .containtop{
    width: auto;
  margin: auto;
  height: 100px;
  margin-bottom: 2%;
  display:inline-block;
  }
  .title{
    font-family: 'bestchristmas';
    font-size: 70px;
    margin-right: 5%;
    margin-top: -5%;
    margin-bottom: -2%;
  }
  .title2{
    font-family: 'bestchristmas';
    font-size: 70px;
    margin-right: 8%;
    margin-top: -5%;
    margin-bottom: -2%;
    margin-left: 0%;
  }


  /** Mobile settings*/
  @media only screen and (max-width: 389px) {
      .top{
    font-family: 'bestchristmas';
    font-size: 60px;
    margin-right: 3%;
    margin-top: 7%;
    margin-bottom: 6%;
    margin-left: 5%;
  }
  .greycontainer{
    background-color: #3e3a3a00;
    border-radius: 8px 8px 8px 8px;
    display:inline-block;
    vertical-align:left;
    width: 280px;
    height: auto;
    margin-top: -6%;
    margin-left: 3%;
    margin-right: 0%;
  }
  .boxtxt{
    font-family: "blackchancery", "bestchristmas";
    color: #d0d0d0;
    font-size: 22px;
  }
  .transparent{
    color: #3e3a3a00;
  }
  .skull{
    width: 100px;
		height: auto;
    float: center;
		margin-top: 2%;
    margin-bottom: 2%;
		margin-right: 35%;
		border-radius: 10px 10px 10px 10px;
  }
  .containtop{
    width: auto;
  margin: auto;
  height: 100px;
  margin-bottom: 2%;
  display:inline-block;
  }
  .title{
    font-family: 'bestchristmas';
    font-size: 50px;
    margin-top: -5%;
    margin-bottom: -2%;
    margin-right: 1%;
  }
  .title2{
    font-family: 'bestchristmas';
    font-size: 50px;
    margin-top: -5%;
    margin-bottom: -2%;
    margin-right: 5%;
    margin-left: 5%;
  }
  }
  /* Styles for screens with height between 601px and 900px */
@media screen and (min-width: 390px) and (max-width: 900px) {
  
  .top{
    font-family: 'bestchristmas';
    font-size: 60px;
    margin-right: 3%;
    margin-top: 7%;
    margin-bottom: 6%;
    margin-left: 5%;
  }
  .greycontainer{
    background-color: #3e3a3a00;
    border-radius: 8px 8px 8px 8px;
    display:inline-block;
    vertical-align:left;
    width: 280px;
    height: auto;
    margin-top: -6%;
    margin-left: 3%;
    margin-right: 0%;
  }
  .boxtxt{
    font-family: "blackchancery", "bestchristmas";
    color: #d0d0d0;
    font-size: 22px;
  }
  .transparent{
    color: #3e3a3a00;
  }
  .skull{
    width: 100px;
		height: auto;
    float: center;
		margin-top: 2%;
    margin-bottom: 2%;
		margin-right: 35%;
		border-radius: 10px 10px 10px 10px;
  }
  .containtop{
    width: auto;
  margin: auto;
  height: 100px;
  margin-bottom: 2%;
  display:inline-block;
  }
  .title{
    font-family: 'bestchristmas';
    font-size: 50px;
    margin-top: -5%;
    margin-bottom: -2%;
    margin-right: 1%;
  }
  .title2{
    font-family: 'bestchristmas';
    font-size: 50px;
    margin-top: -5%;
    margin-bottom: -2%;
    margin-right: 5%;
    margin-left: 5%;
  }
}
</style>