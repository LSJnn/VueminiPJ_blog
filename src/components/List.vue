<template>
  <div v-for="(b,i) in blog" :key="i">
    <h5 @click="$router.push('/detail/'+i)">{{ blog[i].title }}</h5>
    <p>{{ blog[i].date }}</p>
  </div>

</template>

<script>

export default {
  name: "List.vue",
  props : {
    blog : Array,
  },
  data() {
    return {
      index :0,
    }
  }

}
</script>

<style scoped>

</style>