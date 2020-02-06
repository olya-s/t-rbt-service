import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCategories, getAllContent, getContent } from "../store/actions";
import Catalog from "./Catalog";
import "../App.css";

const mapStateToProps = state => ({
  allCategories: state.allCategories,
  categories: state.categories,
  sortedCategories: state.sortedCategories,
  content: state.content,
  search: state.search
});

const mapDispatchToProps = {
  getAllCategories,
  getAllContent,
  getContent
};

let CatalogContainer = props => {
  const { getAllCategories } = { ...props };

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  return (
    <div>
      {!props.sortedCategories ? (
        <h3>Loading...</h3>
      ) : (
          <Catalog
            categories={props.categories}
            sortedCategories={props.sortedCategories}
            getContent={props.getContent}
            content={props.content}
            search={props.search}
          />
        )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);
