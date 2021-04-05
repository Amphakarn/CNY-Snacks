import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='ปี๊บเล็ก our' title='products' />
            <div className='row'>
              <ProductConsumer>
                {(value) => {
                  // return value.products.map((product) => {
                  return value.products
                    .filter((product) => product.type === "small bucket")
                    .map((filteredProduct) => {
                      return (
                        <Product
                          key={filteredProduct.id}
                          filteredProduct={filteredProduct}
                        />
                      );
                    });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
