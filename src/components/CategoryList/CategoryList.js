import React from "react";
import "../../App.css";
import "./style.css";

const CategoryList = props => {
  return (
    <div className="layout-row content-item">
      <p className="content-item-title">Genres</p>
      <ul className="layout-row list">
        {props.categories &&
          props.categories.map(elem => (
            <li
              key={elem.contentCatId}
              className={
                elem.contentCatId === props.activeCategory.contentCatId
                  ? "genres-item active"
                  : "genres-item"
              }
              onClick={() => props.handleChangeCategory(elem)}
            >
              {elem.catName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CategoryList;
