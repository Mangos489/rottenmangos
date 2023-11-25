<script>
    import Bonnie from '$lib/Bonnie.png';
    import Death from '$lib/Death.png';
    import Tokyo from '$lib/Tokyo.png';

    let images = [
    { src: Bonnie, caption: 'Bonnie from Willythewampus' },
    { src: Death, caption: 'Patrolling the consecrated snowlands. By ChristianYoung on Instagram' },
    { src: Tokyo, caption: 'Abandoned tori gate found at the end of a submerged tunnel in Japan.' },
  ];
  </script>
  
  <style>
    /* Your styling goes here */
  
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
      margin: 16px;
    }
  
    .gallery img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.3s ease-in-out;
    }
  
    .gallery img:hover {
      transform: scale(1.1);
    }
    .caption {
    text-align: center;
    margin-top: 8px;
    color: white; /* Set the text color to white */
  }
  </style>
  
  <div class="gallery">
    {#each images as { src, caption }, index (src)}
      <div>
        <img src={src} alt={`Image ${index + 1}`} />
        <p class="caption">{caption}</p>
      </div>
    {/each}
  </div>
  