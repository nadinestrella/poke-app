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
          I am a junior Frontend developer and I love creating interactive
          applications and learning new things every day. This application is
          built with Vue + Vite.
        </p>
        <a href="https://www.linkedin.com/in/nadinestrellavacas/"
          >This is my Linkedin</a
        >
        <a href="https://github.com/nadinestrella">This is my Github</a>
        <a href="https://nadinestrella.vercel.app/">This is mi Portfolio</a>
      </div>
    </div>
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

    .img {
      height: 100px;
      width: auto;
    }
    .profile {
      color: #191970;
      font-size: 30px;
    }
  }

  .info {
    color: #191970;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .container {
      flex-direction: row;
      justify-content: center;
      gap: 15px;
    }
  }
}
</style>
