<template>
    <div class="hello">
        <h1>{{title}}</h1>
        <div class="container">
            <div class="center">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Created-till-now</th>
                        <th>Predicted</th>
                        <th>Status</th>
                    </tr>
                    <tr v-model="product_id"v-for="(kitchen, index) in kitchen_data" :key="index">
                        <td ref="product_id" type ="hidden" style="display:none;">{{kitchen.product_id}}</td>
                        <td>{{kitchen.product.product_name}}</td>
                        <td>{{kitchen.quantity}}</td>
                        <td>{{kitchen.created_till_now}}</td>
                        <td>{{kitchen.predicted}}</td>
                        <td><button v-on:click.prevent="processOrder(index)" class="btn btn-primary btn-sm">Done</button></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="alert-message">
            <!-- <p v-if="success" class="success-message">Order placed successfully</p> -->
            <p v-if="fail" class="error-message">Error : {{error_message}}</p>    
        </div>
        <span>Predication is for next one hour</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Sample Kitchen Display',
            kitchen_data: "",
            fail: false,
            error_message:""
        }
    },
    methods: {
        greeting: function() {
            return 'hey cowboy'
        },
        getKitchen: function() {
            this.$http.get("/orders").then(function(data) {
                this.getPrediction();
                console.log(data);
                this.kitchen_data = data.body;
            }).catch(function(err) {
                console.log(err);
                return err;
            })
        },
        processOrder: function(data) {
            var product={
              product_id: Number(this.$refs.product_id[data].innerText)
            };
            this.$http.put("orders/processOrder",product).then(function(data) {
                console.log(data);
                this.getKitchen();
            }).catch(function(err) {
                console.log(err);
                this.fail=true;
                this.error_message=err.body.error;
            })
        },
        getPrediction:function () {
          this.$http.get("orders/prediction");
        }

    },
    mounted() {
        this.getKitchen();

        setInterval(function() {
            this.getKitchen();
        }.bind(this), 30000);
    },
    beforeMount(){
      this.getKitchen()
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    width: 640px;
    border-collapse: collapse;
    border-spacing: 0;
}

td,
th {
    border: 1px solid #CCC;
}
</style>