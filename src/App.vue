<template>
  <v-app class="bg-light">
    <v-main>

      <nav>
        <a href="#" id="logo">
          <img src="/src/assets/extra/logo.png" alt="Logo" class="logo-img">
        </a>

        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/specimens">Specimens</router-link>
          <router-link to="/gallery">Gallery</router-link>
          <router-link to="/videos"> References</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </nav>

      <hr>

      <router-view />

    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.bg-light {
  background-color: #f5f5f5;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  margin: 0;
  background-color: rgb(79, 22, 16) !important;
  min-height: 10vh; 
}

.logo-img {
  width: 25vw;
  max-width: 300px;
  min-width: 160px;
  height: auto;
}

.nav-links {
  display: flex;
  gap: 30px;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: white;
}

#logo:hover {
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}

hr {
  margin: 0px;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    padding: 1rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .logo-img {
    min-width: 140px;
  }

  .nav-links {
    gap: 12px;
    font-size: 0.85rem;
  }
}
</style>