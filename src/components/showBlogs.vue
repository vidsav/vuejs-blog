<template>
  <div v-theme:column="'narrow'" id="show-blogs">
      <h1>All blog articles</h1>
      <input type="text" v-model="search" placeholder="search posts">
      <div v-for="post in filteredPosts" v-bind:key="post.id" class="single-blog">
        <h3 v-rainbow>{{uppercaseTitle(post.title)}}</h3>
        <article>{{sliceBody(post.body)}}</article>
      </div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            posts: [],
            search: ''
        }
    },
    computed: {
        filteredPosts(){
            return this.posts.filter((post)=>{
                return post.title.match(this.search);
            })
        }
    },
    methods: {
        uppercaseTitle(title){
            return title.toUpperCase();
        },
        sliceBody(body){
            return body.slice(0,100)+'...';
        }
    },
    directives: {
        'rainbow': {
            beforeMount(el){
                el.style.color = '#'+ Math.random().toString().slice(2,8)
            }
        },
        'theme': {
            beforeMount(el,bind){
                if(bind.value == 'wide'){
                    el.style.maxWidth = '1200px';
                }else if(bind.value == 'narrow'){
                    el.style.maxWidth = '560px';
                }

                if(bind.arg == 'column'){
                    el.style.background = '#ddd';
                    el.style.padding = '20px';
                }
            }
        }
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
