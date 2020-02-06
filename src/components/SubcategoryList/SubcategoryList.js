import React from "react";
import "../../App.css";
import "./style.css";

const SubcategoryList = props => {
  return (
    <div className="layout-row content-item">
      <p className="content-item-title">
        Categories
        <span className="green">
          {props.categoryTitle && `"${props.categoryTitle}"`}
        </span>
      </p>
      <ul className="layout-row list">
        {props.subCategories &&
          props.subCategories.map(elem => (
            <li
              key={elem.contentCatId}
              className={
                elem.contentCatId === props.activeSubCategory.contentCatId
                  ? "subcategory-item active"
                  : "subcategory-item"
              }
              onClick={() => props.handleChangeSubCategory(elem)}
            >
              {elem.catName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SubcategoryList;
