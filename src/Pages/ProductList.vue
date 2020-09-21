<template>
  <div id="ProductList">
    <div id="add1">
        <div id="basket" @click="basketShow = !basketShow">
          <img src="../images/1.jpg" alt="Image not found">
        </div>
      <div id="numberofProducts">
        <p>{{added.length}}</p>
      </div>
      </div>
    <basket-page :added-products="added" v-show="basketShow"></basket-page>
    <label for="productType" id="productTypeLabel">Product Type: </label>
    <select name="productType" id="productType" v-model="typeofProduct" >
      <option value="all">All</option>
      <option value="clothe">Clothes</option>
      <option value="shoe">Shoes</option>
      <option value="bag">Bags</option>
    </select>
    <label for="gender" id="genderLabel">Gender: </label>
    <select name="gender" id="gender" v-model="gender" >
      <option value="all">All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="baby">Baby</option>
    </select>
    <div class="productList" v-show="!basketShow">
      <product-card
        v-for="product in products"
        v-if="(typeofProduct == product.type || typeofProduct == 'all')&(gender == product.gender || gender == 'all')"
           :name="product.name"
           :brand="product.brand.toUpperCase()"
           :price="product.price"
           :img_src="product.img_src">
          <button id="add" slot="add" @click="add(product)">Add</button>
          <button id="buy" slot="buy" @click="buyShow = !buyShow">Buy</button>
      </product-card>
    </div>
    <div id="buyShow" v-show="buyShow">
      <div id="buyCard">
        <h1>Buy</h1>
        <label for="cn">Card number:</label>
        <input type="text" id="cn" placeholder="card number">
        <label for="cfd">Card finish date:</label>
        <input type="text" id="cfd" placeholder="card finish date">
        <button @click="buy">Buy</button>
        <button @click="buyShow = !buyShow">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductCard from "../components/ProductCard";
  import BasketPage from "./BasketPage"

  export default {
    name: "ProductList",
    components: {
      'product-card': ProductCard,
      'basket-page': BasketPage
    },
    data() {
      return {
        products: [
            {
              name: 'Hoodie',
              price: '56',
              brand: 'h&m',
              type: 'clothe',
              gender: 'male',
              img_src: '../images/clothe/hoodie1.jpg'
            },
            {
              name: 'Bag',
              price: '56',
              brand: 'h&m',
              type: 'bag',
              gender: 'female',
              img_src: '../images/bag/1.jpg'
            },
            {
              name: 'Baby',
              price: '56',
              brand: 'h&m',
              type: 'clothe',
              gender: 'baby',
              img_src: '../images/clothe/1.jpg'
            },
            {
              name: 'Hoodie',
              price: '45',
              brand: 'just',
              type: 'clothe',
              gender: 'female',
              img_src: '../images/clothe/hoodie2.jpg'
            },
          {
            name: 'Hoodie',
            price: '45',
            brand: 'just',
            type: 'clothe',
            gender: 'baby',
            img_src: '../images/clothe/2.jpg'
          },
            {
              name: 'Hoodie',
              price: '53',
              brand: 'nike',
              type: 'clothe',
              gender: 'female',
              img_src: '../images/clothe/hoodie3.jpg'
            },
            {
              name: 'Hoodie',
              price: '86',
              brand: 'gucci',
              type: 'clothe',
              gender: 'male',
              img_src: '../images/clothe/hoodie4.jpg'
            },
          {
            name: 'Hoodie',
            price: '45',
            brand: 'just',
            type: 'clothe',
            gender: 'baby',
            img_src: '../images/clothe/3.jpg'
          },
            {
              name: 'Hoodie',
              price: '92',
              brand: 'adidas',
              type: 'clothe',
              gender: 'male',
              img_src: '../images/clothe/hoodie5.jpg'
            },
          {
            name: 'Hoodie',
            price: '45',
            brand: 'just',
            type: 'clothe',
            gender: 'baby',
            img_src: '../images/clothe/4.jpg'
          },
            {
              name: 'Hoodie',
              price: '74',
              brand: 'louis vuitton',
              type: 'clothe',
              gender: 'male',
              img_src: '../images/clothe/hoodie6.jpg'
            },
            {
              name: 'Hoodie',
              price: '87',
              brand: 'cartier',
              type: 'clothe',
              gender: 'male',
              img_src: '../images/clothe/hoodie7.jpg'
            },
            {
              name: 'Hoodie',
              price: '65',
              brand: 'zara',
              type: 'clothe',
              gender: 'female',
              img_src: '../images/clothe/hoodie8.jpg'
            },
          {
            name: 'Hoodie',
            price: '45',
            brand: 'just',
            type: 'clothe',
            gender: 'baby',
            img_src: '../images/clothe/5.jpg'
          },
            {
              name: 'Hoodie',
              price: '59',
              brand: 'chanel',
              type: 'clothe',
              gender: 'female',
              img_src: '../images/clothe/hoodie9.jpg'
            },
            {
              name: 'Hoodie',
              price: '49',
              brand: 'uniqlo',
              type: 'clothe',
              gender: 'male',
              img_src: '../images/clothe/hoodie10.jpg'
            },
            {
              name: 'Hoodie',
              price: '60',
              brand: 'hermes',
              type: 'clothe',
              gender: 'female',
              img_src: '../images/clothe/hoodie11.jpg'
            },
            {
              name: 'Hoodie',
              price: '76',
              brand: 'choosy',
              type: 'clothe',
              gender: 'male',
              img_src: '../images/clothe/hoodie12.jpg'
            },
            {
              name: 'Hoodie',
              price: '69',
              brand: 'mango',
              type: 'clothe',
              gender: 'male',
              img_src: '../images/clothe/hoodie13.jpg'
            },
            {
              name: 'Hoodie',
              price: '98',
              brand: 'outdoor voices',
              type: 'clothe',
              gender: 'male',
              img_src: '../images/clothe/hoodie14.jpg'
            },
            {
              name: 'Hoodie',
              price: '120',
              brand: 'fr noel',
              type: 'clothe',
              gender: 'male',
              img_src: '../images/clothe/hoodie15.jpg'
            },
            {
              name: 'Hoodie',
              price: '70',
              brand: 'la causa',
              type: 'clothe',
              gender: 'male',
              img_src: '../images/clothe/hoodie16.jpg'
            }
          ],
        search: '',
        typeofProduct: 'all',
        gender: 'all',
        basketShow: false,
        user: {
          numberofProducts: 3
        },
        added: [
          {
            name: 'Bag',
            price: '56',
            brand: 'h&m',
            type: 'bag',
            gender: 'female',
            img_src: '../images/bag/1.jpg'
          },
          {
            name: 'Hoodie',
            price: '45',
            brand: 'just',
            type: 'clothe',
            gender: 'female',
            img_src: '../images/clothe/hoodie2.jpg'
          },
          {
            name: 'Hoodie',
            price: '65',
            brand: 'zara',
            type: 'clothe',
            gender: 'female',
            img_src: '../images/clothe/hoodie8.jpg'
          },
        ],
        buyShow: false
      }
    },
    methods: {
      add: function (product) {
        this.added.push(product)
        alert('Product was added!!!')
      },
      buy: function () {
        alert('You will get order product as soon as!!!')
        this.buyShow = !this.buyShow
      }
    }
    }
    </script>

    <style scoped lang="scss">
      #ProductList {
        position: relative;
        background-color: antiquewhite;
        #add1 {
          position: absolute;
          right: 25px;
          margin: 0;
          #numberofProducts {
            position: absolute;
            background-color: #a4a4a4;
            color: white;
            top: 10px;
            right: -5px;
            border-radius: 50%;
            padding: 3px 5px;

            p {
              margin: 0;
            }
          }
          #basket {
            width: 50px;
            height: 50px;
            background-color: #a03131;
            border-radius: 50%;
            position: relative;
            overflow: hidden;
            margin-left: 1260px;
            margin-top: 20px;
            img {
              width: 100%;
            }
          }
        }
        input[type='text'] {
          border: none;
          border-bottom: 1px solid #cfcfcf;
          padding: 7px;
          background-color: transparent;
          margin-left: 920px;
          margin-top: 30px;
        }
        select {
          border: none;
          border-radius: 3px;
          width: 80px;
          padding: 6px;
          background-color: transparent;
          border-bottom: 1px solid #cfcfcf;
        }
        #productType {
          margin-top: 90px;
        }
        #productTypeLabel {
          margin-left: 820px;
        }
        #productGender {
          margin-left: 20px;
        }
        #genderLabel {
          margin-left: 20px;
        }
        .productList {
          margin: 50px auto;
          width: 70%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      }
      #add {
        border: none;
        background: indianred;
        padding: 8px 16px;
        border-radius: 5px;
        margin-bottom: 0;
        margin-left: 8px;
        color: #ffffff;
        display: inline;
        box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.2);
      }
      #buy {
        border: none;
        background: cornflowerblue;
        padding: 8px 16px;
        border-radius: 5px;
        margin-top: 30px;
        margin-left: 138px;
        margin-bottom: 20px;
        color: #ffffff;
        box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.2);
      }
      #buyShow {
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 103%;
        position: absolute;
        top: -80px;
      }
      #buyCard {
        background-color: white;
        position: fixed;
        top: 20%;
        left: 40%;
        padding: 3rem;
        label {
          font-size: 15px;
          margin-bottom: 30px;
        }
        input[type='text']{
          background-color: transparent;
          border: none;
          display: block;
          margin-left: 0;
          margin-top: 0;
          margin-bottom: 30px;
          border-bottom: 1px solid #b5b5b5;
        }
      }
    </style>
