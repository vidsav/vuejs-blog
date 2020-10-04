<template>
  <div id="show-blogs">
      <h1>All blog articles</h1>
      <div v-for="post in posts" v-bind:key="post.id" class="single-blog">
        <h3>{{post.title}}</h3>
        <article>{{post.body}}</article>
      </div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            posts: []
        }
    },
    methods: {

    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
            //console.log(data);
            this.posts = data.data.slice(0,10);
        })
    }
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
