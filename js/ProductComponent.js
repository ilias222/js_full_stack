Vue.component('products', {
   props: ['products', 'img'],
   template: `<nav class="cardbar_card">
                <product v-for="item of products" 
                :key="item.id_product" 
                :img="img"
                :product="item"></product>
               </nav>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
    <div class="cardbar_card_product">
    <div class="blackblok_button" v-bind:data-type="product.img"
    @click="$parent.$emit('add-product', product)"
    >
        <img src="imp_page/corf_cardbar.png" alt="Chek" class="corp" v-bind:data-type="product.img">
        <p class="corp_text" v-bind:data-type="product.img">Add to copf</p>
    </div>
    <div class="box_media_card">
        <img v-bind:src="product.img" alt="Product" class="poduct_image">
        <p class="product_text">{{ product.product_name }}<span class="product_text_price">
            {{ product.price }}$</span>
        </p>
    </div>
</div>
    `
})

            //     <div class="cardbar_card_product ${this.img}">
            //         <div class="blackblok_button" v-bind:data-type="product.img">
            //             <img src="corf_cardbar.png" alt="Chek" class="corp" v-bind:data-type="product.img">
            //             <p class="corp_text" v-bind:data-type="product.img">Add to copf</p>
            //         </div>
            //         <div class="box_media_card">
            //             <img v-bind:src="product.img" alt="Product" class="poduct_image">
            //             <p class="product_text">{{ product.product_name }}<span class="product_text_price">
            //                 {{ product.price }}$</span>
            //             </p>
            //         </div>
            //     </div>

            //     <div class="product-item">
            //     <div class="desc">
            //         <img v-bind:src="product.img" alt="Some img">
            //         <h3>{{product.product_name}}</h3>
            //         <p>{{product.price}}</p>
            //         <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
            //     </div>
            // </div>