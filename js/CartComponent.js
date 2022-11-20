Vue.component('cart', {
    props: ['cartItems', 'img', 'visibility'],
    template: `
        <div class="cart-block" v-show="visibility">
            <cart-item v-for="item of cartItems" :key="item.id_product" :img="img" :cart-item="item">
            </cart-item>
        </div>
    `
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `
    <div class="copf_img_box">
        <div class="img_list_box">
            <img :src="cartItem.img" alt="Some img" class="copf_box">
        </div>
        <div class="price_info">
            <p class="text_copf">{{ cartItem.product_name }}</p>
            <img :src="cartItem.like" alt="Like" class="like_img_box">
            <label class="label_call_copf">
                <span>Колл :</span>
            <input type="number" data-inpat="" id="" class="copf_card_call" 
                :value="cartItem.quantity" disabled>
            </label>
            <p class="like_price_text">{{ cartItem.quantity*cartItem.price }}$</p>
        </div>
        <div class="delete_copf_card">
            <button class="del-btn" @click="$parent.$emit('remove', cartItem)">&times;</button>
        </div>
    </div>
    `
})

    // <div class="copf_img_box">
    //     <div class="img_list_box">
    //         <img :src="cartItem.img" alt="Some img" class="copf_box">
    //     </div>
    //     <div class="price_info">
    //         <p class="text_copf">{{ cartItem.product_name }}</p>
    //         <img src="#" alt="Like" class="like_img_box">
    //         <label class="label_call_copf">
    //             <span>Колл :</span>
    //         <input type="number" data-inpat="" id="" class="copf_card_call" 
    //             :value="cartItem.quantity">
    //         </label>
    //         <p class="like_price_text">{{ cartItem.price }}$</p>
    //     </div>
    //     <div class="delete_copf_card">
    //     <button class="del-btn" @click="$parent.$emit('remove', cartItem)">&times;</button>
    //     </div>
    //     <div class="right-block">
    //                     <div class="product-price">{{cartItem.quantity*cartItem.price}}</div>
                        
    //                 </div>
    // </div>

    // <div class="cart-item">
    //                 <div class="product-bio">
    //                     <img :src="cartItem.img" alt="Some img">
    //                     <div class="product-desc">
    //                         <div class="product-title">{{ cartItem.product_name }}</div>
    //                         <div class="product-quantity">Quantity: {{ cartItem.quantity }}</div>
    //                         <div class="product-single-price">$ {{ cartItem.price }} each</div>
    //                     </div>
    //                 </div>
    //                 <div class="right-block">
    //                     <div class="product-price">{{cartItem.quantity*cartItem.price}}</div>
    //                     <button class="del-btn" @click="$parent.$emit('remove', cartItem)">&times;</button>
    //                 </div>
    //             </div>