<template>
    <div id="introduction" class="intro">
        <h1>INTRODUCTION &RightTeeArrow; ABOUT ME</h1>
        <hr>
        <div class="block">
            <p class="intro-name">Hello there, my name is Ryan Haytree.</p>
            <p>I am a computing student, and I am currently starting a HNC course in software development and web design. Due to much of the past years being dedicated to education, I am lacking experience in the software world, and am looking to gain as much experience as possible.</p>
            <p>Eventually, I am looking to start a career in full-stack development, with emphasis on both back-end and front-end development. I have moderate experience in both areas thanks to my education, which has enabled me to quickly learn various different programming langauges, paradigms and environments</p>
            <p>In terms of education, I am gradually working towards a degree in computer science, either at my current location (Walsall College), or univeristy</p>
            <p>With regards to what my education has taught me programming wise, here's a brief overview:</p>
            <ul class="list">
                <li>C# (Intermediate)</li>
                <li>Java (Beginner/Intermediate)</li>
                <li>JavaScript (ES6/JQuery/VueJS/Node)</li>
                <li>PHP (Beginner)</li>
                <li>MySQL (Intermediate)</li>
            </ul>
            <p>This list will be expanding rapidly overtime, so more is coming soon...</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Introduction',
    data() {
        return {/* null */}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro {
    padding-top: 25px;
    padding-right: 35px;
    padding-left: 35px;
}
.intro p.intro-name {
    font-family: 'Roboto Mono', monospace;
    color: #2f235f;
    font-weight: bold;
    text-align: center;
    margin-bottom: 25px;
}
.intro .block {
    width: 600px;
    margin: 0 auto;
}
.intro p {
    text-align: left;
}
.intro .list {
    font-family: 'Titillium Web', sans-serif;
    text-align: left;
    color: #244e1b;
    font-weight: 600;
    font-size: 15px;
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
}
@media (max-width: 800px) {
    .intro {
        padding-top: 25px;
        padding-left: 20px;
    }
    .intro .block {
        width: 100%;
    }
    h1 {
        font-size: 18px;
    }
    hr {
        width: 100%;
    }
}
</style>