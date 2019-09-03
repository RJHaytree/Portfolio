<template>
    <md-content id="sidebar" class="sidebar md-scrollbar">
        <div class="profile">
            <img src="../assets/avatar.jpg" alt="Profile Image" />
            <p class="name">RYAN HAYTREE</p>
            <hr>
            <div class="email-box"
            v-clipboard:copy="`${email1}${email2}${email3}${email4}`"
            v-clipboard:success="handleCopySuccess"
            v-clipboard:error="handleCopyFailure">
                <p class="email">
                    <span class="e-mail" data-user="eertyahjr" data-website="moc.liamg"></span>
                </p>
                <md-tooltip md-direction="bottom"> {{ this.tooltipMsg }}</md-tooltip>
            </div>
        </div>
        <div class="link-box">
            <li><a href="./#introduction" @click="handleCollapsedMenuToggle">INTRODUCTION &RightTeeArrow;</a></li>
            <li><a href="./#portfolio" @click="handleCollapsedMenuToggle">PORTFOLIO &RightTeeArrow;</a></li>
            <!-- <li><a href="./#contact">CONTACT &RightTeeArrow;</a></li> -->
        </div>
        <div class="add-links">
            <li><a href="https://github.com/rjhaytree"><img src="../assets/github.svg" style="width: 20px; height: 20px; margin-top: 100px; margin-bottom: 40px;"></a></li>
        </div>
        <p id="copyright">&copy; Ryan Haytree</p>
    </md-content>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            email1: 'rjhaytree',
            email2: '@',
            email3: 'gmail',
            email4: '.com',
            tooltipMsg: 'CLICK TO COPY'
        }
    },
    methods: {
        handleCopySuccess() {
            this.tooltipMsg = 'COPIED'
        },
        handleCopyFailure() {
            this.tooltipMsg = 'FAILED'
        },
        handleCollapsedMenuToggle() {
            let active = document.getElementById("sidebar").classList.contains('active');
            if (active) {
                document.getElementById('sidebar').classList.remove('active');
                document.getElementById('menu-btn').classList.remove('active');
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style scoped>
.sidebar {
    position: fixed;
    width: 330px;
    overflow-y: scroll;
    top: 0;
    bottom: 0;
    background-color: #fdfdfd;
    z-index: 2;

    /*#f2f3f7;*/
}
.profile img {
    width: 240px;
    height: 240px;
    border-radius: 130px;
    margin-top: 50px;
}
.md-scrollbar.md-theme-default::-webkit-scrollbar-thumb {
    background-color: #cecece;
}
.md-scrollbar.md-theme-default::-webkit-scrollbar {
    width: 5px;
}
.md-content.md-theme-default {
    background-color: #f7f7f7;
}
.profile p.name {
    font-size: 25px;
    font-family: 'Roboto Mono', monospace;
    color: #202020;
}
.profile p.email {
    font-size: 13px;
    font-family: 'Roboto Mono', monospace;
    color: #272727;
    margin: 0 auto;
    margin-top: 7px;
    width: 170px;
    padding: 2px;
    border-radius: 6px;
}
.profile p.email:hover {
    background-color: #ececec;
    cursor: pointer;
}
.link-box {
    margin-top: 50px;
}
.link-box li a, .add-links li a {
    color: #3e3e3e;
    font-family: 'Roboto Mono', monospace;
    text-decoration: none;
}
.link-box li a:hover {
    color: #6a6a6a
}
.link-box li, .add-links li {
    list-style: none;
}
.profile hr {
    width: 240px;
    margin: 0 auto;
}
.profile p {
    margin: 15px;
}
.profile p.name {
    margin-top: 20px;
}
p#copyright {
    font-size: 14px;
    margin-top: 70px;
    bottom: 10px;
    color: #717171;
}
.e-mail:before {
    content: attr(data-website) "\0040" attr(data-user);
    unicode-bidi: bidi-override;
    direction: rtl;
}
@media (max-width: 800px) {
    .sidebar {
        left: -330px;
        position: absolute;
    }
    .sidebar.active {
        left: 0px;
        transition: 2s;
        -webkit-transition: width 2s;
    }
}
</style>