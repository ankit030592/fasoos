import KitchenDisplay from './components/KitchenDisplay'
import Product from './components/Product'
import Order from './components/Order'

export default [{ path: '/', component: KitchenDisplay },
  { path: '/product', component: Product },
  { path: '/order', component: Order }
]
