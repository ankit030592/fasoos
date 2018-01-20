<template>
    <div>
        <h1>Order</h1>
        <h4>Place An Order</h4>
        <div class="container">
            <form class="form-inline">
                <select v-model="product_id" class="form-control" v-validate="'required'">
                    <option></option>
                    <option :value="product.id" v-for="product in product_list">
                        {{product.product_name}}
                    </option>
                </select>
                <div class="form-group">
                    <label>Quantity:</label>
                    <input v-model="quantity" type="number" v-validate="'required'" class="form-control" placeholder="Enter quantity" name="quantity">
                </div>
                <button v-on:click.prevent="createOrder" class="btn btn-default">Submit</button>
            </form>
        </div>
        <div class="alert-message">
            <p v-if="success" class="success-message">Order placed successfully</p>
            <p v-if="fail" class="error-message">Failed to place order</p>    
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            product_id: "",
            product_list: "",
            product_name: "",
            quantity: "",
            success: false,
            fail: false,
        }
    },
    methods: {
        getProducts: function() {
            this.$http.get("/orders/products").then(function(data) {
                console.log(data.body);
                this.product_list = data.body;
                // this.kitchen_data = data.body;
            }).catch(function(err) {
                console.log(err);
                return err;
            })
        },
        createOrder: function() {
            var kitchen_data = {
                quantity: this.quantity,
                product_id: this.product_id,
            };
            this.$http.post("/orders/create", kitchen_data).then(function(data) {
                console.log(data);
                this.quantity = "";
                this.product_name = "";
                this.success = true;
            }).catch(function(err) {
                console.log(err);
                this.fail = true
            })
        }
    },
    beforeMount() {
        this.getProducts()
    }
}
</script>
<style scoped>
.form-group label {
    padding-left: 10px;
    padding-right: 5px;
}

.btn-default {
    margin-left: 10px;
}
</style>