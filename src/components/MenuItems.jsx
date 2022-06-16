import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems(props) {
  const { pathname } = useLocation();
  console.log("sdfsdf", props);

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
      <Menu.Item key={props.loggedStatus ? "/wallet" : "/home"}>
        <NavLink to={props.loggedStatus ? "/wallet" : "/home"}>
          👛 Wallet
        </NavLink>
      </Menu.Item>
      <Menu.Item key={props.loggedStatus ? "/1inch" : "/home"}>
        {/* <NavLink to="/1inch">🏦 Dex</NavLink> */}
        <NavLink to={props.loggedStatus ? "/1inch" : "/home"}>🏦 Swap</NavLink>
      </Menu.Item>
      <Menu.Item key={props.loggedStatus ? "/onramp" : "/home"}>
        {/* <NavLink to="/onramp">💵 Fiat</NavLink> */}
        <NavLink to={props.loggedStatus ? "/onramp" : "/"}>
          💵 Buy / Sell
        </NavLink>
      </Menu.Item>
      <Menu.Item key={props.loggedStatus ? "/erc20balance" : "/home"}>
        <NavLink to={props.loggedStatus ? "/erc20balance" : "/home"}>
          💰 Balances
        </NavLink>
      </Menu.Item>
      <Menu.Item key={props.loggedStatus ? "/erc20transfers" : "/home"}>
        <NavLink to={props.loggedStatus ? "/erc20transfers" : "/home"}>
          💸 Transfers
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
