import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import url from "../url";
import swal from "sweetalert";

function Input({ tasks, setTasks }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  async function handleSubmit() {
    try {
      if (inputValue.trim()) {
        setTasks([...tasks, inputValue]);
        setInputValue("");
      }
      // console.log(inputValue);
      // const co = Cookies.get("user")
      // console.log(co);
      let user = localStorage.getItem("user");
      user = JSON.parse(user);
      console.log(user);
      const fData = {
        userID: user._id,
        name: inputValue,
      };
      const res = await axios.post(url.insertTask, fData);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      swal({
        title: `OOPS!!`,
        text: `${err.response.data.message}`,
        icon: "error",
        button: "try Again",
      });
    }
  }
  return (
    <>
      <div className="text-center mt-4">
        <input
          className="bg-slate-50 h-12 rounded-s-lg"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="bg-blue-200 h-12 text-yellow-50 rounded-r-lg">
          <span className="p-3" onClick={handleSubmit}>
            Add Task
          </span>
        </button>
      </div>
    </>
  );
}

Input.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Input;
