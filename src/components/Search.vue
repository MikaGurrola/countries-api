<template>
  <div class="input-group">
    <i class="fas fa-search"></i>
    <input type="text" placeholder="Search for a country">
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/lib-styles/mixins.scss';

.input-group { color: var(--input-color); }

i {
  position: absolute;
  top: 16px;
  left: 32px;
}

input {
  @include element;
  font-size: 1em;
  padding: 15px 15px 15px 73px;
  box-shadow: var(--box-shadow);
  background: var(--bg-color);
  border-radius: 6px;
  width: 100%;
  border: none;
  box-sizing: border-box;
  margin-bottom: 38px;
}

</style>
