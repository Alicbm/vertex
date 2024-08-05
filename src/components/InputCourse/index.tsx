import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import "./InputCourse.css";

type Props = {
  coursesToSearch: string[];
  searchCourse: (arg: string) => void;
};

export function InputCourse({ coursesToSearch, searchCourse }: Props) {
  const [wordToSearch, setWordToSearch] = useState("");
  const [showMatches, setShowMatches] = useState(true);

  const match = coursesToSearch?.filter((item) =>
    item.toLocaleLowerCase()?.includes(wordToSearch?.toLocaleLowerCase())
  );

  useEffect(() => {
    setTimeout(() => {
      setShowMatches(false);
    }, 20000);
  }, [showMatches]);

  return (
    <form 
      className="InputCourse"
      onSubmit={(e) => {
        e.preventDefault();
        searchCourse(wordToSearch);
        setShowMatches(false);
      }}
    >
      <input
        type="text"
        placeholder="Buscar..."
        value={wordToSearch}
        className="InputCourse-input"
        onChange={(e) => {
          setWordToSearch(e?.target?.value);
          setShowMatches(true);
        }}
      />
      <button 
        type="submit"
        className="InputCourse-button"
      >
        <LuSearch />
      </button>

      {showMatches && wordToSearch?.length > 0 && (
        <ul className="InputCourse-matches">
          {match.map((item, index) => (
            <li
              key={index}
              className={`${index % 2 != 0 ? "newBg" : ""} `}
              onClick={async () => {
                setWordToSearch(item);
                setShowMatches(false);
                searchCourse(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
