<template>
    <div class="twoot alert alert-primary zoom-effect" role="alert" @click="favTwoot(twoot.id)">
        <div class="text-start"><strong>@{{username}}</strong></div>
        <p class="text-start">{{twoot.content}}</p>
    </div>
</template>

<script>
export default {
    name:"TwootItem",
    props:{
        username:{
            type:String,
            required: true
        },
        twoot:{
            type: Object,
            required: true
        }
    },
    methods: {
        favTwoot(id){
            this.$emit("fav", id)
        }
    }
}
</script>

<style lang="scss"  scoped>
    @keyframes fade {
        from {
            opacity: 0;
            visibility: hidden;
            transform: translateY(0);
        }
        to { 
            opacity: 1;
            visibility: visible;
            transform: translateY(10px);
        }
    }
    
    @keyframes zoom {
        from {
            transform: scale(1.0, 1.0);
        }
        to { 
            transform: scale(1.1, 1.1);
        }
    }

    .twoot {
        animation: fade 0.2s linear forwards;
    }
    
    .twoot:hover {
        animation: zoom 0.1s linear forwards;
    }



    /* HACE CONFLICTO CON LA ANIMACIÓN */
    .zoom-effect:hover{
        cursor:pointer;
        transform: scale(1.1, 1.1);
        transition: all 0.5s ease;
    }
    
</style>