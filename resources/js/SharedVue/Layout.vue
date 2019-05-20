<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <inertia-link href="/" class="nav-item nav-link">Home</inertia-link>
          <inertia-link href="/about" class="nav-item nav-link">About</inertia-link>
          <inertia-link href="/contact" class="nav-item nav-link">Contact</inertia-link>
        </div>
      </div>
    </nav>

    <article>
      <slot />
    </article>
  </main>
</template>

<script>
export default {
  inject: ['page'],
}
</script>
