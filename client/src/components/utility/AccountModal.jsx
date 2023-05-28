import Class from "./AccountModal.module.css";

const Form = (props) => {
  return (
    <div>
      <button className={Class.closeBtn} onClick={props.removeModalHandler}>
        X
      </button>
      <form action="">
        <label>Email</label>
        <input type="text" name="email"></input>
        <label>Password</label>
        <input type="text" name="password"></input>
        <label>Password-confirmation</label>
        <input type="text" name="password-confirmation"></input>
        <button>submit</button>
      </form>
    </div>
  );
};

function AccountModal(props) {
  const removeModalHandler = (e) => {
    if (e.target.classList.contains(Class.modalBackground) || e.target.classList.contains(Class.closeBtn)) {
      props.removeModal();
    }
  };

  return (
    <div className={Class.modalBackground} onClick={removeModalHandler}>
      <div className={Class.modalContent}>
        <Form removeModal={removeModalHandler} />
      </div>
    </div>
  );
}

export default AccountModal;
