import React, { useState, useEffect } from "react";
import CategoryList from './CategoryList/CategoryList';
import SubcategoryList from "./SubcategoryList/SubcategoryList";
import GalleryContainer from "./GalleryContainer";
import "../App.css";

const a = 67;

let Catalog = props => {
  //categories and default subcategories (from first category)

  const categories = props.categories;
  const subCat =
    props.sortedCategories[categories[0].contentCatId].subCategories;

  const [subCategories, setSubCategories] = useState(subCat);
  const [activeCategory, setActiveCategory] = useState(props.categories[0]);
  const [activeSubCategory, setActiveSubCategory] = useState(subCat[0]);

  const getSubCategories = elem => {
    const subCategories =
      props.sortedCategories[elem.contentCatId].subCategories;
    setSubCategories(subCategories);
    if (subCategories[0]) {
      props.getContent(subCategories[0].contentCatId);
    } else props.getContent(elem.contentCatId);
  };

  const getDefaultContent = () => {
    const firstSubCatNo = subCat[0].contentCatId;
    props.getContent(firstSubCatNo);
  };

  const handleChangeCategory = elem => {
    setActiveCategory(elem);
    setActiveSubCategory(
      props.sortedCategories[elem.contentCatId].subCategories[0]
    );
    getSubCategories(elem);
  };

  const handleChangeSubCategory = elem => {
    setActiveSubCategory(elem);
    props.getContent(elem.contentCatId);
  };

  useEffect(() => {
    getDefaultContent();
  }, []);

  return (
    <div className="catalog">
      <CategoryList
        categories={categories}
        sortedCategories={props.sortedCategories}
        getSubCategories={getSubCategories}
        activeCategory={activeCategory}
        handleChangeCategory={elem => handleChangeCategory(elem)}
      />
      <SubcategoryList
        subCategories={subCategories}
        getContent={props.getContent}
        activeSubCategory={activeSubCategory}
        handleChangeSubCategory={elem => handleChangeSubCategory(elem)}
      />
      <GalleryContainer
        content={props.content}
        categoryTitle={activeCategory.catName}
        subCategoryTitle={activeSubCategory ? activeSubCategory.catName : ""}
        search={props.search}
      />
    </div>
  );
};

export default Catalog;
