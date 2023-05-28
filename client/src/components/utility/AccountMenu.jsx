import Class from "./AccountMenu.module.css";

function AccountMenu(props) {
  return (
    <div className={props.className}>
      <ul className={Class.list}>
        <li>
          <button className={Class.button}>Account</button>
        </li>
        <li className={Class.listItem}>|</li>
        <li>
          <button className={Class.button}>Sign-out</button>
        </li>
      </ul>
    </div>
  );
}

export default AccountMenu;
