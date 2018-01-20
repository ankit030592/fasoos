<template>
    <div>
        <h1>Order</h1>
        <h4>Create New Product</h4>
        <div class="container">
            <form class="form-inline">
                <div class="form-group">
                    <label>Product Name:</label>
                    <input v-model="product_name" type="text" class="form-control" placeholder="Enter Product Name" name="product_name">
                </div>
                <div class="form-group">
                    <label>Quantity:</label>
                    <input v-model="quantity" type="number" class="form-control" placeholder="Enter quantity" name="quantity">
                </div>
                <button v-on:click.prevent="createProduct" class="btn btn-default">Submit</button>
            </form>
        </div>
        <div class="alert-message">
            <p v-if="success" class="success-message">New order placed successfully</p>
            <p v-if="fail" class="error-message">Error : {{error_message}}</p>    
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            product_name: "",
            quantity: "",
            success:false,
            fail:false,
            error_message:""
        }
    },
    methods: {
        createProduct: function() {
        	var kitchen_data= {
	            quantity: this.quantity,
    	        product_name: this.product_name,        		
        	};
            this.$http.post("/orders/createProduct", kitchen_data).then(function(data) {
                console.log(data);
                this.quantity ="";
                this.product_name="";
                this.success=true;
            }).catch(function(err) {
                console.log(err);
                this.fail=true          
                this.error_message=err.body.error;
            })
        }
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

.alert {
	width: 25%;
	margin: 25px;
	margin-left: 38%;
	padding:5px;
}
</style>