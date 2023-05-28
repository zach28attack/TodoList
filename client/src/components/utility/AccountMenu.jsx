import Class from "./AccountMenu.module.css";

function AccountMenu(props) {
  return (
    <div className={props.className}>
      <ul className={Class.list}>
        <li className={Class.listItem}>Account</li>
        <li className={Class.listItem}>|</li>
        <li className={Class.listItem}>Sign-out</li>
      </ul>
    </div>
  );
}

export default AccountMenu;
