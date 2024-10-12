<script lang="ts">
</script>

<div class="welcome-section">
  <!-- Background Video -->
  <video class="background-video" autoplay muted loop>
    <source src="/videos/corgi-sleeping.1920x1080.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <!-- Welcome Section Content -->
  <div class="content">
    <h1>Welcome to Our Website</h1>
    <p>Your exciting journey starts here</p>
  </div>
</div>

<style lang="scss">
  .welcome-section {
    position: relative;
    width: 100%;
    height: 100vh; // Full viewport height

    // Video Background Styling
    .background-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; // Ensures the video covers the entire section
      z-index: -1; // Pushes the video behind content

      // Add a filter to make the video darker
      /* filter: brightness(1) contrast(1.2); // Adjust values to your preference */
      filter: brightness(0.5); // Adjust values to your preference
    }

    // Content of the section
    .content {
      position: relative;
      z-index: 1; // Make sure the content is above the video
      color: white; // Text color (adjust based on your design)
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      text-align: center;

      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1.5rem;
      }
    }
  }
</style>
