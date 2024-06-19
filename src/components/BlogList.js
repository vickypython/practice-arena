import React from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";

const BlogList = () => {
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <div>
      {isOpen && <Modal />}
    </div>
  );
};

export default BlogList;
