<template>
    <div id="app">
        <div class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Kitchen</a>
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a href="#/order">Place Order</a>
                    </li>
                    <li>
                        <a href="#/product">Create New Product</a>
                    </li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import VueRouter from 'vue-router';
import KitchenDisplay from './components/KitchenDisplay'
import Product from './components/Product'
import Order from './components/Order'
import Routes from './routes'

const router = new VueRouter({ routes:Routes });

export default {
    name: 'App',
    router,
    components: {
        KitchenDisplay,
        Product,
        Order
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.container {
    display: flex;
    justify-content: center;
}

.center {
    width: 600px;
}

.alert-message {
    margin: 25px
}

.success-message {
    color: blue;
}

.error-message {
    color: red;
}
</style>