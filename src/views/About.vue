<script></script>

<template>
  <div>
    <h2 class="title">About me</h2>

    <div class="container">
      <div class="subtitle">
        <img class="img" src="@/assets/nadineLego.jpeg" alt="Nadine as Lego" />
        <h3 class="profile">Hi! It's Nadine</h3>
      </div>

      <div class="info">
        <p>
          I am a <strong>Frontend Developer</strong> and I love creating
          interactive applications and learning new things every day.
        </p>
        <p>This application is built with <strong>Vue + Vite</strong> .</p>
      </div>

      <div class="social">
        <a href="https://www.linkedin.com/in/nadinestrellavacas/"
          >This is my Linkedin</a
        >
        <a href="https://github.com/nadinestrella">This is my Github</a>
        <a href="https://nadinestrella.vercel.app/">This is mi Portfolio</a>
      </div>
    </div>

    <!-- SOCIAL -->
  </div>
</template>
<style scoped>
.title {
  color: #191970;
}

.container {
  display: flex;
  flex-direction: column;

  .subtitle {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 15px;
    margin-bottom: 50px;

    .img {
      height: 100px;
      width: auto;
      border-radius: 50%;
    }
    .profile {
      color: #191970;
      font-size: 30px;
    }
  }

  .info {
    color: #191970;
  }

  .social {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
