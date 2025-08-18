import React from "react";
import LoginForm from "../../../Forms/LoginForm/LoginForm";

const LoginModal = () => {
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="my_modal_7"
        className="btn btn-outline text-[#f9d689] hover:bg-[#b1986281] border-[#f9d689]"
      >
        Login
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal w-screen" role="dialog">
        <div className="modal-box">
          <LoginForm />
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default LoginModal;
