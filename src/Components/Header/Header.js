import { useState } from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineAlignRight } from "react-icons/ai";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { logo } from "../../images/images";
import styles from "./Header.module.css";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);

  const navItems = [
    { navItem: "Whitepaper", to: "whitepaperae24.pdf?v=14" },
    { navItem: "Shop", to: "https://shop.uns.technology/" },
    { navItem: "Stake", to: "https://staking.uns.technology/" },
    { navItem: "Buy UNS", to: "https://sale.uns.technology/" },
  ];

  return (
    <header className={`wrapper ${styles.header}`}>
      <div className="appContainer">
        <div className={`${styles.headerInner}`}>
          <NavLink to="/">
            {" "}
            <img src={logo} alt="" className={styles.logo} />
          </NavLink>
          <nav style={{ right: headerToggle ? "0" : "-100%" }}>
            <Link
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              to="about"
              className={styles.navItem}
              onClick={() => setHeaderToggle((prev) => !prev)}
            >
              About
            </Link>

            {navItems.map((el, i) => (
              <NavLink
                to={el.to}
                target="_blank"
                className={styles.navItem}
                key={i}
                onClick={() => setHeaderToggle((prev) => !prev)}
              >
                {el.navItem}
              </NavLink>
            ))}
            <button type="button" className={styles.connectButton}>
              Connect
            </button>
            {headerToggle && (
              <MdClose
                onClick={() => setHeaderToggle((prev) => !prev)}
                className={`${styles.mobile} ${styles.close}  ${styles.hamberGer}`}
              />
            )}
          </nav>

          {!headerToggle && (
            <AiOutlineAlignRight
              onClick={() => setHeaderToggle((prev) => !prev)}
              className={`${styles.mobile} ${styles.toggleHeader} ${styles.hamberGer}`}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
