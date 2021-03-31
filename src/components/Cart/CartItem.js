import React from "react";

export default function CartItem({ item, value }) {
  const { id, img, title, price, count, total } = item;
  const { increment, decrement, removeItem } = value;
  console.log("VALUE** = ", value);
  return <div>Hello from CartItem</div>;
}
