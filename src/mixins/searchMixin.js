export default {
    computed: {
        filteredPosts(){
            return this.posts.filter((post)=>{
                return post.title.match(this.search);
            })
        }
    }
}