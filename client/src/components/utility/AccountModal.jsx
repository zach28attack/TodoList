import Class from "./AccountModal.module.css";

function AccountModal(props) {
  const removeModalHandler = (e) => {
    if (e.target.classList.contains(Class.modalBackground)) {
      props.removeModal();
    }
  };

  return (
    <div className={Class.modalBackground} onClick={removeModalHandler}>
      <div className={Class.modalContent}>{props.children}</div>
    </div>
  );
}

export default AccountModal;
