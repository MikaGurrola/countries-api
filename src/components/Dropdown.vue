<template>
  <div class="input-group">
    <div class="dropdown">
      <button>Filter by region <i class="fas fa-sort-down"></i></button>
      <div class="options">
        <button>Africa</button>
        <button>America</button>
        <button>Asia</button>
        <button>Africa</button>
        <button>America</button>
        <button>Asia</button>
        <button>Africa</button>
        <button>America</button>
        <button>Asia</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/lib-styles/mixins.scss';

.dropdown {
  @include element;
  width: fit-content;
  min-width: 200px;
  padding: 8px 0;
}

.options {
  @include element;
  display: none;

  &.open {
    position: absolute;
    top: 56px;
    right: 0;
    left: 0;
    width: 100%;
    height: 144px;
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
}

button {
  border: none;
  padding: 8px 25px;
  background: transparent;
  color: var(--text-color);
  text-align: left;
  font-size: 1em;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

</style>
