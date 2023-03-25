import React from "react";

import loading from "../assets/git/loading.gif";
import Modal from "../components/base/Modal";

type Props = {
  visible: boolean;
};

function Loading({ visible }: Props) {
  return visible ? (
    <Modal
      dialogContainerClassName=" backdrop-blur"
      overLayClassName="bg-[#C4C4C4] opacity-30"
      className={
        "bg flex m-0 p-0 !max-w-[176px] !min-w-[176px] !rounded-full  h-44 items-center justify-center "
      }
      closable={false}
      centered
      onClose={() => {}}
      visible={visible}
    >
      <img className="flex  " src={loading} />
    </Modal>
  ) : null;
}

export default Loading;
