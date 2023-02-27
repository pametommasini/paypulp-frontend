import NavAuthBtns from "./NavAuthBtns";
import NavLinks from "./NavLinks";

function NavMenu({ showMenu, width, signOut, accountType }) {
  return (
    <div className={`nav-menu-mobile ${showMenu ? "nav-menu-show" : "nav-menu-hide"}`} >
      <NavLinks width={width} accountType={accountType} />
      <NavAuthBtns signOut={signOut} />
    </div>
  );
}

export default NavMenu;
