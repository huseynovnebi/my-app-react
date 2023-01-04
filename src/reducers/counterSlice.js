import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: false,
    cart: [],
    totalvalue: 0,
    pros: {},
    orders: []
  },
  reducers: {
    darkon: (state) => {
      state.value = !state.value
    },
    pushproduct: (state, product) => {
      if (!state.cart.includes(product.payload)) {
        state.cart.push(product.payload);
        state.pros[`${product.payload}`] = 1;

      }
      else {
        state.pros[`${product.payload}`] += 1;

      }


    },
    addtotal: (state, price) => {
      const currentprice = price.payload.length;
      state.totalvalue += currentprice;
    },
    minustotal: (state, product) => {
      if (state.pros[`${product.payload}`] == 1) {
        const index = state.cart.indexOf(product.payload);
        state.cart.splice(index, 1);
        delete state.pros[`${product.payload}`];
      }
      else {
        state.pros[`${product.payload}`] -= 1;
      }

    },
    minustotal2: (state, price) => {
      const currentprice = price.payload.length;
      state.totalvalue -= currentprice;
    },
    orderdone: (state,adress) => {
      state.cart.splice(0, state.cart.length);
      const obj = {};
      obj["id"] = Math.floor(Math.random() * 100000);
      obj["totalvalue"] = state.totalvalue;
      obj["adress"] = adress.payload[0];
      obj["fullname"] = adress.payload[1];
      obj["products"] = state.pros;
      state.orders.push(obj);
      console.log(state.orders[0])
      state.totalvalue = 0;
      var props = Object.getOwnPropertyNames(state.pros);
      for (var i = 0; i < props.length; i++) {
        delete state.pros[props[i]];
      }
      
    }
  },
})
export const { darkon, pushproduct, addtotal, minustotal, minustotal2,orderdone } = counterSlice.actions
export default counterSlice.reducer