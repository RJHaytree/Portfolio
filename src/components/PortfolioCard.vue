<template>
    <md-card md-with-hover>
        <md-card-media>
            <img :src="image" :alt="imageAlt" />
        </md-card-media>
        <md-card-header>
            <div class="md-title"> {{ title }} </div>
            <div class="md-sibhead">{{ subhead }} </div>
        </md-card-header>
        <md-card-actions >
            <a 
            v-for="button in buttons"
            v-bind:key="button.id"
            :href="button.url">
                <md-button>{{ button.text }}</md-button>
            </a>
        </md-card-actions>
    </md-card>
</template>

<script>

export default {
    name: 'PortfolioCard',
    props: {
        image: String,
        imageAlt: String,
        title: String,
        subhead: String,
        buttons: Array
    }
}
</script>

<style scoped>
.md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}
a, a:hover {
    text-decoration: none;
    color: #424242;
}

@media (max-width: 800px) {
    .md-card {
        width: 250px;
    }
    .md-card .md-title {
        font-size: 17px;
    }
}
</style>