import React, { Fragment } from "react";

import styles from "./Search.module.scss";

const Search = props => {
  return (
    <Fragment>
      <div className={`${styles.Search}`}>
        <form
          action="https://www.google.com/search"
          method="GET"
          className={`${styles.search__form}`}
        >
          <label className={`${styles.search__label}`}>The Web</label>
          <input
            className={`${styles.search__input__radio}`}
            checked
            name="search"
            type="radio"
          />
          <label className={`${styles.search__label}`}>MySpace</label>
          <input
            className={`${styles.search__input__radio}`}
            name="search"
            type="radio"
          />
          <input
            className={`${styles.search__input__text}`}
            name="q"
            type="text"
          />
          <button className={`${styles.search__button}`}>search</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
