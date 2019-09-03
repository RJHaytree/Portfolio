<template>
    <div id="portfolio" class="portfolio">
        <h1>PORTFOLIO &RightTeeArrow; MY PROJECTS</h1>
        <hr>
        <p class="top-msg">The vast majority of my projects are created as assignment work, therefore I will simply showcase projects that represent a milestone in my journey of software development.</p>
        <PortfolioCard
            v-for="card in cards"
            v-bind:key="card.id"
            v-bind:image="card.image"
            v-bind:imageAlt="card.imageAlt"
            v-bind:title="card.title"
            v-bind:subhead="card.subhead" 
            v-bind:buttons="card.buttons"
        />
    </div>
</template>

<script>

import PortfolioCard from './PortfolioCard'

export default {
    name: 'Portfolio',
    components: {
        PortfolioCard
    },
    data() {
        return {
            cards: [
                {
                    id: 1,
                    image: require('../assets/betterpizzaapp.png'),
                    imageAlt: 'BetterPizzaApp UI',
                    title: 'BetterPizzaApp',
                    subhead: 'A standalone application developed in C# for use in a theoretical pizza delivery service. Produced as a side project which stems from a peice of assignment work, this project offers improved security and an improved user interface.',
                    buttons: [
                        {
                            id: 1,
                            url: 'https://github.com/RJHaytree/BetterPizzaApp',
                            text: 'View project code'
                        }
                    ]
                },
                {
                    id: 2,
                    image: require('../assets/php-editor.png'),
                    imageAlt: 'BasicPHPDatabaseEditor UI',
                    title: 'BasicPHPDatabaseEditor',
                    subhead: 'This was my first true PHP website. This project was created as part of an assignment, where I had to develop a PHP interface that can be used to view, update, delete and create entries in a corresponding MySQL.',
                    buttons: [
                        {
                            id: 1,
                            url: 'https://github.com/RJHaytree/BasicPHPDatabaseEditor',
                            text: 'View project code'
                        }
                    ]
                },
                {
                    id: 3,
                    image: require('../assets/brookfieldweb.png'),
                    imageAlt: 'BrookfieldWeb Home Page',
                    title: 'BrookfieldWeb',
                    subhead: 'A very basic webapge created for my unit 43 - multimedia design project. For this unit, I simply had to create a website than display good use of multimedia components.',
                    buttons: [
                        {
                            id: 1,
                            url: 'https://rjhaytree.github.io/BrookfieldWeb/',
                            text: 'Live demo'
                        },
                        {
                            id: 2,
                            url: 'https://github.com/RJHaytree/BrookfieldWeb',
                            text: 'View project code'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portfolio {
    padding-top: 10px;
    padding: 35px;
}
h1 {
    text-align: left;
    font-family: 'Roboto Mono', monospace;
    font-size: 25px;
    margin-bottom: 10px;
    color: #5d5d5d;
}
hr {
    width: 80%;
    margin-right: 20%;
    margin-bottom: 20px;
}
p.top-msg {
    font-size: 15px;
    color: #1e1e38;
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
    margin: auto;
    margin-bottom: 30px;
    width: 70%;
}

@media (max-width: 800px) {
    .portfolio {
        padding: 0;
        padding-top: 10px;
        padding-right: 35px;
        padding-left: 35px;
    }
    h1 {
        font-size: 18px;
    }
    hr {
        width: 100%;
    }
}
</style>