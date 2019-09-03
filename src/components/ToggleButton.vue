<template>
    <div id="menu-btn" class="menu-btn"
        @click="handleMenuBtnClick"
        v-bind:class= "{ active: isMenuActive }"
    >
        <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
</template>

<script>
export default {
    name: 'ToggleButton.vue',
    data() {
        return {
            isMenuActive: false
        }
    },
    methods: {
        handleMenuBtnClick() {
            this.isMenuActive = !this.isMenuActive
            if (this.isMenuActive === true) {
                document.getElementById('sidebar').classList.add('active');
            }
            else {
                document.getElementById('sidebar').classList.remove('active');
            }
        }
    }
}
</script>

<style>
@media (min-width: 800px) {
    .menu-btn {
        display: none;
    }
}
.menu-btn {
    cursor: pointer;
    top: 0;
    z-index: 1000;
    position: absolute;
    left: 0px;
    width: 50px;
    padding: 10px;
    background-color: #fdfdfd;
    font-size: 30px;
}
.fa-bars {
    font-size: 30px;
    color: #202020;
}
.active {
    transition: 2s;
    -webkit-transition: width 2s;
    left: 330px;
}
</style>