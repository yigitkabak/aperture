<!-- App.svelte -->
<script lang="ts">
  import Css from './scripts/css.svelte';
  import Header from './scripts/header.svelte';
  import Nav from './scripts/nav.svelte';
  import Footer from './scripts/footer.svelte';
</script>

<div class="container">
 <Header />
 <div class="subheader">
    <p>The only hub for <a href="https://github.com/yigitkabak/huh">.huh</a>, <a href="https://github.com/yigitkabak/aperium">aperium</a> and many more projects! a product of yigit.</p>
  </div>
 <Nav />
 <Footer />
</div>

<Css />