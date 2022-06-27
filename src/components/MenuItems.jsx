import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems(props) {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      {/* <Menu.Item key="/quickstart">
        <NavLink to="/quickstart">🚀 Quick Start</NavLink>
      </Menu.Item> */}
      <Menu.Item key={props.loggedStatus ? "/wallet" : "/Home"}>
        <NavLink to={props.loggedStatus ? "/wallet" : "/Home"}>
          👛 Wallet
        </NavLink>
      </Menu.Item>
      <Menu.Item key={props.loggedStatus ? "/1inch" : "/Home"}>
        {/* <NavLink to="/1inch">🏦 Dex</NavLink> */}
        <NavLink to={props.loggedStatus ? "/1inch" : "/Home"}>🏦 Swap</NavLink>
      </Menu.Item>
      <Menu.Item key={props.loggedStatus ? "/onramp" : "/Home"}>
        {/* <NavLink to="/onramp">💵 Fiat</NavLink> */}
        <NavLink to={props.loggedStatus ? "/onramp" : "/"}>
          💵 Buy / Sell
        </NavLink>
      </Menu.Item>
      <Menu.Item key={props.loggedStatus ? "/erc20balance" : "/Home"}>
        <NavLink to={props.loggedStatus ? "/erc20balance" : "/Home"}>
          💰 Balances
        </NavLink>
      </Menu.Item>
      <Menu.Item key={props.loggedStatus ? "/erc20transfers" : "/Home"}>
        <NavLink to={props.loggedStatus ? "/erc20transfers" : "/Home"}>
          💸 Transfers
        </NavLink>
      </Menu.Item>
      <Menu.Item key={props.loggedStatus ? "/UtilityPay" : "/Home"}>
        {/* <NavLink to="/onramp">💵 Fiat</NavLink> */}
        <NavLink to={props.loggedStatus ? "/UtilityPay" : "/Home"}>
          💵 UtilityPay
        </NavLink>
      </Menu.Item>

      {/* <Menu.Item key="/nftBalance">
        <NavLink to="/nftBalance">🖼 NFTs</NavLink>
      </Menu.Item>
      <Menu.Item key="/contract">
        <NavLink to="/contract">📄 Contract</NavLink>
      </Menu.Item> */}
    </Menu>
  );
}

export default MenuItems;
