<template>
  <div>
    <!-- Search Section -->
    <v-card
      class="selection mx-auto grey lighten-5 mt-3"
      elevation="2"
      shaped
      style="max-height: 20vh; height: 20vh"
    >
      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        top
        color="info"
      ></v-progress-linear>
      
      <v-row class="items px-2 py-1">
        <!-- Item Search -->
        <v-col class="pb-0 mb-2" cols="20">
          <v-text-field
            dense
            clearable
            autofocus
            outlined
            color="primary"
            :label="frappe._('Search Items')"
            hint="Search by item code, serial number, batch no, or barcode"
            background-color="white"
            hide-details
            v-model="debounce_search"
            @keydown.esc="esc_event"
            @keydown.enter="enter_event"
            ref="debounce_search"
          ></v-text-field>
        </v-col>
        
        <!-- Customer Search -->
        <v-col cols="20" class="pb-2">
          <Customer></Customer>
        </v-col>
        
        <!-- Optional Fields (QTY and New Line) -->
        <v-col cols="3" class="pb-0 mb-2" v-if="pos_profile.posa_input_qty">
          <v-text-field
            dense
            outlined
            color="primary"
            :label="frappe._('QTY')"
            background-color="white"
            hide-details
            v-model.number="qty"
            type="number"
            ref="debounce_qty"
          ></v-text-field>
        </v-col>
        <v-col cols="2" class="pb-0 mb-2" v-if="pos_profile.posa_new_line">
          <v-checkbox
            v-model="new_line"
            color="accent"
            value="true"
            label="New Line"
            dense
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-card>

    <!-- Item Display Section -->
    <v-container class="fill-height d-flex align-center justify-center">
      <v-card class="mx-auto pa-3" >
        <!-- Check if filtered_items has at least one item -->
        <v-list-item v-if="filtred_items.length > 0">
          <v-list-item-content>
            <!-- Labels with Item Data -->
            <v-list-item-subtitle class="headline font-weight-bold"
            style="background-color: yellow; padding: 10px; border-radius: 8px;">
              
              <span style="font-size: 2rem; font-weight: 900;">
              <strong>{{ frappe._('Item') }}: </strong>  {{ filtred_items[0].item_code }}  {{ filtred_items[0].item_name }}
              </span>
            </v-list-item-subtitle>
        
            <!-- Loop through prices and display them -->
            <v-card
              v-for="price in getItemPrices(filtred_items[0].item_code)"
              :key="price.uom"
              class="pa-3 my-2"
              outlined
              style="background-color: lightgreen; border-radius: 8px;"
            >
              <v-list-item-subtitle class="headline">
                <strong>{{ frappe._('Price:') }} </strong> 
                <span style="font-size: 6rem; font-weight: 900;">
                  {{ price.price_list_rate }} TMT
                </span> 
                {{ price.uom }} <br>
              </v-list-item-subtitle>
            </v-card>
          </v-list-item-content>
        </v-list-item>

        <!-- Fallback when no item is selected -->
        <v-list-item v-else>
          <v-list-item-content>
            <v-list-item-title class="display-1 primary--text">
              No item selected
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>
  </div>
</template>


<script>
import { evntBus } from '../../bus';
import Customer from './Customer.vue';
import _ from 'lodash';
export default {
  data: () => ({
    pos_profile: '',
    flags: {},
    items_view: 'list',
    item_group: 'ALL',
    loading: false,
    items_group: ['ALL'],
    items: [],
    search: '',
    first_search: '',
    itemsPerPage: 1000,
    offersCount: 0,
    appliedOffersCount: 0,
    couponsCount: 0,
    appliedCouponsCount: 0,
    customer_price_list: null,
    float_precision: 2,
    currency_precision: 2,
    new_line: false,
    selectedCardIndex: null,
    qty: 1,
  }),

  watch: {
    filtred_items(data_value) {
     // this.update_items_details(data_value);
    },
    customer_price_list() {
      if(this.pos_profile.offline){
        evntBus.$emit('update_invoice_items');
      }else{
      this.get_items();
    }
    },
    new_line() {
      evntBus.$emit('set_new_line', this.new_line);
    },
  },
  components: {
    Customer,
  },

  methods: {
  
    formatCurrency(value) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'TMT',
      }).format(value);
    },
    shortSearchFocus(e) {
   
      if (e.key === 'F8') {
        e.preventDefault();
        if (this.$refs.debounce_search){
        this.$refs.debounce_search.focus();
      }
      }
    },
    shortQTYFocus(e) {
   
   if (e.key === 'F10') {
     e.preventDefault();
     if (this.$refs.debounce_qty){
     this.$refs.debounce_qty.focus();
   }
   }
 },

    get_items() {
      if (!this.pos_profile) {
        console.error('No POS Profile');
        return;
      }
      const vm = this;
      this.loading = true;
      if (vm.pos_profile.posa_local_storage && localStorage.items_storage) {
        vm.items = JSON.parse(localStorage.getItem('items_storage'));
        evntBus.$emit('set_all_items', vm.items);
        vm.loading = false;
      }
      frappe.call({
        method: 'posawesome.posawesome.api.posapp.get_items',
        args: {
          pos_profile: vm.pos_profile,
          price_list: vm.customer_price_list,
        },
        callback: function (r) {
          if (r.message) {
            vm.items = r.message;
            evntBus.$emit('set_all_items', vm.items);
            vm.loading = false;
            console.info('loadItmes');
            if (vm.pos_profile.posa_local_storage) {
             
              localStorage.setItem('items_storage', '');
              localStorage.setItem('items_storage', JSON.stringify(r.message));
            }
          }
        },
      });
    },
    get_price_list() {
      let price_list = this.pos_profile.selling_price_list;
      if (this.customer_info && this.pos_profile) {
        const { customer_price_list, customer_group_price_list } =
          this.customer_info;
        const pos_price_list = this.pos_profile.selling_price_list;
        if (customer_price_list && customer_price_list != pos_price_list) {
          price_list = customer_price_list;
        } else if (
          customer_group_price_list &&
          customer_group_price_list != pos_price_list
        ) {
          price_list = customer_group_price_list;
        }
      }
      return price_list;
    },
    // Method to get the prices for a particular item_code
    getItemPrices(item_code) {
      let price_list = this.pos_profile.selling_price_list;
      if (this.customer_price_list){
        price_list = this.customer_price_list; 
      }
      
      
       

      let item = this.filtred_items.filter(item => item.item_code === item_code);
     // Ensure the item exists and has item_prices before attempting to filter
  if (item && item[0].item_prices) {
    // Filter the prices based on the price list
    let prices = item[0].item_prices.filter(price => price.price_list === price_list);
    return prices;  // Return the filtered prices
  }

  return [];   
      return prices 
    },
   is_scale_item(first_search){
   if(first_search){
    if (first_search.startsWith(this.pos_profile.posa_scale_barcode_start )  || first_search.startsWith(this.pos_profile.scale_barcode_start_with_2 )  )    {
   return true;
    }
    return false;
  }},
    add_item(item) {
      item = { ...item };
      if (item.has_variants) {
        evntBus.$emit('open_variants_model', item, this.items);
      } else {
        if (!item.qty || item.qty === 1) {
          item.qty = Math.abs(this.qty);
        }
        evntBus.$emit('add_item', item);
        this.qty = 1;
      }
    },
    enter_event() {
      var is_scale_item = this.is_scale_item(this.first_search);
      if (!this.filtred_items.length || !this.first_search || (this.filtred_items.length>1 && !is_scale_item)) {
        return;
      }
      const qty = this.get_item_qty(this.first_search);
      const new_item = { ...this.filtred_items[0] };
      new_item.qty = flt(qty);
      new_item.item_barcode.forEach((element) => {
        if (this.search == element.barcode) {
          new_item.uom = element.posa_uom;
        }
      });
      if (this.flags.serial_no) {
        new_item.to_set_serial_no = this.flags.serial_no;
      }
      this.add_item(new_item);
      
      this.search = null;
      this.first_search = '';
      this.first_search = null;
      this.debounce_search = '';
      this.debounce_search = null;
      this.flags.serial_no = null;
      this.qty = 1;
      this.$refs.debounce_search.value = '';
     // this.$refs.debounce_search.focus();
    },
    get_item_qty(first_search) {
      let scal_qty = Math.abs(this.qty);
      if (first_search.startsWith(this.pos_profile.posa_scale_barcode_start )  || first_search.startsWith(this.pos_profile.scale_barcode_start_with_2 )  )    {
   
        var pesokg1 = first_search.substr(7, 5);
          var pesokg;
          if (pesokg1.startsWith('0000')) {
            pesokg = '0.00' + pesokg1.substr(4);
          } else if (pesokg1.startsWith('000')) {
            pesokg = '0.0' + pesokg1.substr(3);
          } else if (pesokg1.startsWith('00')) {
            pesokg = '0.' + pesokg1.substr(2);
          } else if (pesokg1.startsWith('0')) {
            pesokg = pesokg1.substr(1, 1) + '.' + pesokg1.substr(2, pesokg1.length);
          } else if (!pesokg1.startsWith('0')) {
            pesokg =
              pesokg1.substr(0, 2) + '.' + pesokg1.substr(2, pesokg1.length);
          }
          scal_qty = pesokg;
      }
      return scal_qty;
    },
    get_search(first_search) {
      let search_term = '';
      if ( first_search ){

 if  (first_search.startsWith(this.pos_profile.posa_scale_barcode_start )  || first_search.startsWith(this.pos_profile.scale_barcode_start_with_2 )  )    {
     search_term = first_search.substr(1, 6);
      } else {
        search_term = first_search;
      }
      return search_term;
    }},
    esc_event() {
      this.search = null;
      this.first_search = null;
      this.qty = 1;
      this.first_search = '';
      //this.$refs.debounce_search.focus();
    },
    
    update_cur_items_details() {
      this.update_items_details(this.filtred_items);
    },
    scan_barcoud() {
      
      const vm = this;
      onScan.attachTo(document, {
        suffixKeyCodes: [],
        keyCodeMapper: function (oEvent) {
         
          oEvent.stopImmediatePropagation();
          
          return onScan.decodeKeyEvent(oEvent);
        },
        onScan: function (sCode) {
          
          setTimeout(() => {
            vm.trigger_onscan(sCode);
          }, 300);
        },
      });
    },
    trigger_onscan(sCode) {

      var name = '';
var customerStorage = JSON.parse(localStorage.getItem('customer_storage')) || [];

// Check customer storage
var customerFound = customerStorage.some(function(entry) {
    if (entry.customer_id === sCode) {
        name = entry.name;
        return true;
    }
    return false;
});
if (!name) {
      this.first_search= sCode;
      if (this.filtred_items.length == 0) {
        evntBus.$emit('show_mesage', {
          text: `No Item has this barcode "${sCode}"`,
          color: 'error',
        });
        frappe.utils.play_sound('error');
      } else {
       
        //this.enter_event();
        //this.debounce_search = null;
        //this.search = null;
      }} else {
    if (customerFound) {
        evntBus.$emit('set_customer', name);
    }}
    },
    formtCurrency(value) {
      value = parseFloat(value);
      return value
        .toFixed(this.currency_precision)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    formtFloat(value) {
      value = parseFloat(value);
      return value
        .toFixed(this.float_precision)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
  },

  computed: {
 

    filtred_items() {
      this.search = this.get_search(this.first_search);
     
      var is_scale_item = this.is_scale_item(this.first_search);
  
      let filtred_list = [];
      let filtred_group_list = [];
      if (this.item_group != 'ALL') {
        filtred_group_list = this.items.filter((item) =>
          item.item_group.toLowerCase().includes(this.item_group.toLowerCase())
        );
      } else {
        filtred_group_list = this.items;
      }
      if (!this.search || this.search.length < 3) {
        if (
          this.pos_profile.posa_show_template_items &&
          this.pos_profile.posa_hide_variants_items
        ) {
          return (filtred_list = filtred_group_list
            .filter((item) => !item.variant_of)
            .slice(0, 50));
        } else {
          return (filtred_list = filtred_group_list.slice(0, 50));
        }
      } else if (this.search ) {
        if (!is_scale_item){
        filtred_list = filtred_group_list.filter((item) => {
          let found = false;
          for (let element of item.item_barcode) {
            if (element.barcode == this.search) {
              found = true;
              break;
            }
          }
          return found;
        });}
        if (filtred_list.length == 0) {
          //logic if it scale item check includes
          //other wise check strict.
          //A.R. Change 2.02.2024
     
          if (is_scale_item == true && this.search.length == 6  ){
            let groupName = "Развесные товары";
            
        filtred_group_list = this.items.filter((item) => item.item_group.toLowerCase().includes(groupName.toLowerCase()));  
        filtred_list = filtred_group_list.filter((item) =>item.item_code.toLowerCase().includes(this.search.toLowerCase()));
          
        } else if ( this.pos_profile.posa_search_strict1 ) {
          console.log(this.pos_profile.posa_search_strict1 );
            filtred_list = filtred_group_list.filter((item) =>
          item.item_code === this.search.toLowerCase() 
          );
          }else{
            
            filtred_list = filtred_group_list.filter((item) =>
          item.item_code.toLowerCase().includes(this.search.toLowerCase()) 
          );
          }
          if (filtred_list.length == 0) {
            filtred_list = filtred_group_list.filter((item) =>
              item.item_name.toLowerCase().includes(this.search.toLowerCase())
            );
          }
          if (
            filtred_list.length == 0 &&
            this.pos_profile.posa_search_serial_no
          ) {
            filtred_list = filtred_group_list.filter((item) => {
              let found = false;
              for (let element of item.serial_no_data) {
                if (element.serial_no == this.search) {
                  found = true;
                  this.flags.serial_no = null;
                  this.flags.serial_no = this.search;
                  break;
                }
              }
              return found;
            });
          }
        }
      }
      if (
        this.pos_profile.posa_show_template_items &&
        this.pos_profile.posa_hide_variants_items
      ) {
        return filtred_list.filter((item) => !item.variant_of).slice(0, 50);
      } else {
        return filtred_list.slice(0, 50);
      }
    },
    debounce_search: {
      get() {
        return this.first_search;
      },
      set: _.debounce(function (newValue) {
        this.first_search = newValue;
      }, 200),
    },
  },
  
  created: function () {
    this.$nextTick(function () {});
    evntBus.$on('register_pos_profile', (data) => {
      this.pos_profile = data.pos_profile;
      this.get_items();
      this.float_precision =
        frappe.defaults.get_default('float_precision') || 2;
      this.currency_precision =
        frappe.defaults.get_default('currency_precision') || 2;
      this.items_view = this.pos_profile.posa_default_card_view
        ? 'card'
        : 'list';
    });
    evntBus.$on('update_cur_items_details', () => {
      this.update_cur_items_details();
    });
    evntBus.$on('update_offers_counters', (data) => {
      this.offersCount = data.offersCount;
      this.appliedOffersCount = data.appliedOffersCount;
    });
    evntBus.$on('update_coupons_counters', (data) => {
      this.couponsCount = data.couponsCount;
      this.appliedCouponsCount = data.appliedCouponsCount;
    });
    evntBus.$on('update_customer_price_list', (data) => {
      this.customer_price_list = data;
    });

    document.addEventListener('keydown', this.shortSearchFocus.bind(this));

    document.addEventListener('keydown', this.shortQTYFocus.bind(this));
  },
  destroyed() {
    document.removeEventListener('keydown', this.shortQTYFocus);
    document.removeEventListener('keydown', this.shortSearchFocus);
   
  },
  mounted() {
    this.scan_barcoud();
  },
};
</script>

<style scoped>
.fill-height {
  height: calc(75vh); /* Allocate 75% of the height for item display */
}
.display-1 {
  font-size: 4rem;
}
.headline {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>