Vue.component('search', {
  data () {
      return {
        userSearch: ''
      }
    },
    template: 
    `
    <form action="#" class="header_inputs_formbar" @submit.prevent='$parent.filter(userSearch)'>
                            <input type="text" class="header_inputs_innertext" id="header_innertext"
                                placeholder="Search for Item..." autocomplete="off" 
                                v-model='userSearch'>
                            <img src="imp_page/glass.png" alt="Glass" class="header_inputs_imgglass">
                        </form>
    `
})

/* <form action="#" class="header_inputs_formbar" @submit.prevent='$parent.filter(userSearch)'>
                            <input type="text" class="header_inputs_innertext" id="header_innertext"
                                placeholder="Search for Item..." autocomplete="off" 
                                v-model='userSearch'>
                            <img src="imp_page/glass.png" alt="Glass" class="header_inputs_imgglass">
                        </form>

                        <form action="#" class="search-form"  @submit.prevent='$parent.filter(userSearch)'>
      <input type="text" class="search-field" v-model='userSearch'>
      <button type="submit" class="btn-search">
          <i class="fas fa-search"></i>
      </button>
    </form> */