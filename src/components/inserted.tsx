import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Inserted = (props: any) => {
  return (
    <>
      <div className="flex flex-col p-5 place-content-center place-items-center mt-4 gap-5">
        <p className="font-bold">Merci pour votre inscription!</p>
        <img src="checkmark.png" className="w-24 h-auto" />
      </div>
    </>
  );
};

export default Inserted;
