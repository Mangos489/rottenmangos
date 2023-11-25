<script>
    import BNA from '$lib/BNA.png';

    let images = [
    { src: BNA, caption: 'Be Not Afraid For I have SAVED YOU' },
  ];
</script>

<style>
  .center-container{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh; 
      margin: 0; 
    }
  .caption {
    margin-top: 16px;
    color: white; 
    text-align: center;
  }

  </style>
  <div class="center-container">
    {#each images as { src, caption }, index (src)}
    <div>
      <img src={src} alt={`Image ${index + 1}`} />
      <div>
      <p class="caption">{caption}</p>
      </div>
    </div>
  {/each}
  </div>
