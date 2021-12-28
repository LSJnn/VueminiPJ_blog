<template>
<div>
  <h5>{{blog[$route.params.id].title}}</h5>
  <h6>{{blog[$route.params.id].date}}</h6>
  <p>{{blog[$route.params.id].content}}</p>
  <router-view></router-view>
</div>


</template>

<script>
export default {
  name: "Detail",
  props:{
    blog : Array,

  }
}
</script>

<style scoped>

</style>