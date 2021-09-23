import React, { useState } from "react";
import data from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";

const Menu = () => {
  const [menuList, setMenuList] = useState(data);
  return (
    <section className="menuList">
      <h1 className="text-center pt-3">Our Menu</h1>

      <div className="row mb-5">
      {data.map((res,key) => {
        const { image, name, price } = res;
        return (
             <MenuItem key={key} image={image} name={name} price={price} />
          
        );
      })}
      </div>
    </section>
  );
};

export default Menu;
