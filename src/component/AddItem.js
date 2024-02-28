import React from "react";
import "./AddItem.css";

export default function AddItem() {
  return (
    <>
      <form className="add-item-form">
        <div className="form-control">
          <input type="file" id="img" name="img" accept="image/*" />
          <input type="text" placeholder="Add descripton" />
          <button type="submit" className="form-btn">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
