<template>
  <div>
    <v-autocomplete
      dense
      clearable
      auto-select-first
      outlined
      color="primary"
      :label="frappe._('Customer')"
      v-model="customer"
      :items="customers"
      item-text="customer_name"
      item-value="name"
      background-color="white"
      :no-data-text="__('Customer not found')"
      hide-details
      :filter="customFilter"
      :disabled="readonly"
      append-icon="mdi-plus"
      @click:append="new_customer"
      prepend-inner-icon="mdi-account-edit"
      @click:prepend-inner="edit_customer"
      readonly 
    >
      <template v-slot:item="data">
        <template>
          <v-list-item-content>
            <v-list-item-title
              class="primary--text subtitle-1"
              v-html="data.item.customer_name"
            ></v-list-item-title>
            <v-list-item-subtitle
              v-if="data.item.customer_name != data.item.name"
              v-html="`ID: ${data.item.name}`"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-if="data.item.tax_id"
              v-html="`TAX ID: ${data.item.tax_id}`"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-if="data.item.email_id"
              v-html="`Email: ${data.item.email_id}`"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-if="data.item.mobile"
              v-html="`Mobile No: ${data.item.mobile}`"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-if="data.item.address"
              v-html="`Primary Address: ${data.item.address}`"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
import { evntBus } from '../../bus';
export default {
  data: () => ({
    pos_profile: '',
    customers: [],
    customer: '',
    readonly: false,
    customer_info: {},
  }),

  methods: {
    update_price_list() {
      
      let price_list = this.get_price_list();
      if (price_list == this.pos_profile.selling_price_list) {
        price_list = null;
      }
      evntBus.$emit('update_customer_price_list', price_list);
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
    
    fetch_customer_details() {
      const vm = this;
      if (this.customer) {
        frappe.call({
          method: 'posawesome.posawesome.api.posapp.get_customer_info',
          args: {
            customer: vm.customer,
          },
          async: false,
          callback: (r) => {
            const message = r.message;
            if (!r.exc) {
              vm.customer_info = {
                ...message,
              };
            }
           
            vm.update_price_list();
           
          },
        });
      }
    },
    shortCustomerDiscount(e) {
   
   if (e.key === 'F9') {
     e.preventDefault();
     evntBus.$emit('set_customer', '1 Skidka');
   }
 },
 shortCustomerRegular(e) {
   
   if (e.key === 'F12') {
     e.preventDefault();
     evntBus.$emit('set_customer', 'Клиент 1');
   }
 },
    get_customer_names() {
      const vm = this;
  
      if (vm.pos_profile.posa_local_storage && localStorage.customer_storage) {
        vm.customers = JSON.parse(localStorage.getItem('customer_storage'));
        evntBus.$emit('customer_storage', vm.customers);
     
      }
      frappe.call({
        method: 'posawesome.posawesome.api.posapp.get_customer_names',
        args: {
          pos_profile: this.pos_profile.pos_profile,
        },
        callback: function (r) {
          if (r.message) {
            vm.customers = r.message;
            evntBus.$emit('customer_storage', vm.customers);
          
            console.info('LoadCustomers');
           
              localStorage.setItem('customer_storage', '');
              localStorage.setItem('customer_storage', JSON.stringify(r.message));
            
          }
        },
      });
    },
    new_customer() {
      evntBus.$emit('open_update_customer', null);
    },
    edit_customer() {
      evntBus.$emit('open_update_customer', this.customer_info);
    },
    customFilter(item, queryText, itemText) {
      const textOne = item.customer_name
        ? item.customer_name.toLowerCase()
        : '';
      const textTwo = item.tax_id ? item.tax_id.toLowerCase() : '';
      const textThree = item.email_id ? item.email_id.toLowerCase() : '';
      const textFour = item.mobile ? item.mobile.toLowerCase() : '';
      const textFifth = item.name.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 ||
        textTwo.indexOf(searchText) > -1 ||
        textThree.indexOf(searchText) > -1 ||
        textFour.indexOf(searchText) > -1 ||
        textFifth.indexOf(searchText) > -1
      );
    },
  },

  computed: {},

  created: function () {
    this.$nextTick(function () {
      evntBus.$on('register_pos_profile', (pos_profile) => {
        this.pos_profile = pos_profile;
        this.get_customer_names();
        this.update_price_list();
      
      });
      evntBus.$on('set_customer', (customer) => {
        this.customer = customer;

        this.fetch_customer_details();
        if(customer.length>1){
           frappe.call({
        method: 'posawesome.posawesome.api.posapp.check_customer_credit',
        args: {
          customer: customer,
        },
        callback: function (r) {
         
        },
      });};
      });
      evntBus.$on('add_customer_to_list', (customer) => {
        this.customers.push(customer);
      });
      evntBus.$on('set_customer_readonly', (value) => {
        this.readonly = value;
      });
      evntBus.$on('set_customer_info_to_edit', (data) => {
        this.customer_info = data;
      });
      evntBus.$on('fetch_customer_details', () => {
        this.get_customer_names();
   
      });
    });
    document.addEventListener('keydown', this.shortCustomerDiscount.bind(this));
    document.addEventListener('keydown', this.shortCustomerRegular.bind(this));
  },
  destroyed() {
    document.removeEventListener('keydown', this.shortCustomerDiscount);
    document.removeEventListener('keydown', this.shortCustomerRegular);
  },
  watch: {
    customer() {
      evntBus.$emit('update_customer', this.customer);
    },
  },
};
</script>
