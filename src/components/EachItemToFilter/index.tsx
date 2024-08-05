import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

type Props = {
  title: string;
  data: (string | undefined)[];
  setValue: (arg: string) => void;
  message?: string;
};

export function EachItemToFilter({ title, data, setValue, message }: Props) {
  const [text, setText] = useState("");
  const [modal, setModal] = useState(false);

  const newLearningPath = data?.filter((item) =>
    item?.toLowerCase()?.includes(text)
  );

  useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, 15000);
  }, [modal]);

  useEffect(() => {
    if (modal || message) setText("");
  }, [modal, message])

  return (
    <div className="ItemsFilter-item eachItem">
      <p className="ItemsFilter-item__text">{(!modal && !message) && text || title}</p>
      <span className="ItemsFilter-item__icon" onClick={() => setModal(!modal)}>
        {text.length == 0 ? (
          <FaChevronDown />
        ) : (
          <IoMdClose onClick={() => {
            setText("");
            setValue("");
          }} />
        )}
      </span>

      {modal && (
        <ul className="ItemsFilter-item__list">
          <input
            type="text"
            placeholder="Buscar..."
            onChange={(e) => setText(e.target.value)}
          />

          {!message ? newLearningPath.map((item, index) => (
            <li
              key={index}
              className={`${index % 2 != 0 ? "newBg" : ""} `}
              onClick={() => {
                setText(item || "");
                setModal(false);
                setValue(item || "");
              }}
            >
              {item}
            </li>
          )) : <li>{message}</li>}
        </ul>
      )}
    </div>
  );
}
