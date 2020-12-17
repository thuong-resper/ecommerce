import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = (props) => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__actionLineOne">Hello Guest</span>
          <span className="header__actionLineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__actionLineOne">Return</span>
          <span className="header__actionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__actionLineOne">Your</span>
          <span className="header__actionLineTwo">Prime</span>
        </div>
      </div>
      <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <span className="header__actionLineTwo header_basketCount">0</span>
      </div>
    </div>
  );
};

export default Header;
