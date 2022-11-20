Vue.component('cart', {
    props: ['arrJson', 'arrJsonList'],
    
    template: `
    <cart-item v-for="item in arrJson" :cart-item="item">
            </cart-item>
`
 });
