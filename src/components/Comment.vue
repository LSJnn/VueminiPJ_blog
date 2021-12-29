<template>
  <div class="comment">
    <div class="list-group-item-dark align-content-sm-start">댓글 </div>
    <ol class="list-group list-group-numbered">
      <li class="list-group-item d-flex justify-content-between align-items-start"
      v-for="(comment,i) in comments" :key="i">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{comment.id}}</div>
          <div>{{comment.comment}}</div>
        </div>
        <span class="badge bg-primary rounded-pill">{{i}}</span>
      </li>
    </ol>
  </div>
</template>

<script>
import comments from '../assets/commentData'

export default {
  name: "Comment.vue",
  data(){
    return{
      comments : comments,
    }
  },
}
</script>

<style scoped>
.ms-2{
  text-align: start;
}
</style>