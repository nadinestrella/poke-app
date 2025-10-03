<script setup>
import Title from '@/components/Title.vue';
</script>

<template>
  <div>
    <Title label="About me"></Title>
    <div class="container">
      <div class="subtitle">
        <img class="img" src="@/assets/nadineLego.jpeg" alt="Nadine as Lego" />
        <h3 class="profile">Hi! It's Nadine</h3>
      </div>

      <div class="info">
        <p>
          I am a <strong> Junior Frontend Developer</strong> and I love creating
          interactive applications and learning new things every day.
        </p>
        <p>This application is built with <strong>Vue + Vite</strong> .</p>
      </div>

      <div class="social">
        <a
          href="https://www.linkedin.com/in/nadinestrellavacas/"
          target="_blank"
          >This is my Linkedin <font-awesome-icon :icon="['fab', 'linkedin']"
        /></a>
        <a href="https://github.com/nadinestrella" target="_blank"
          >This is my Github <font-awesome-icon :icon="['fab', 'github']"
        /></a>
        <a href="https://nadinestrella.vercel.app/" target="_blank"
          >This is mi Portfolio <font-awesome-icon :icon="['fas', 'user']"
        /></a>
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
    justify-content: flex-start;
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

  .social a {
    text-decoration: none;
    color: #191970;
    font-weight: bold;
    margin-bottom: 10px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  .social a:hover {
    color: rgb(227, 125, 211);
  }
}
</style>
