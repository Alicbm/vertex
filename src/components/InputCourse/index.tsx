import { LuSearch } from "react-icons/lu";
import './InputCourse.css';

export function InputCourse () {
  return (
    <div className="InputCourse">
      <input 
        type="text" 
        placeholder="Buscar..." 
        className="InputCourse-input"
      />
      <button className="InputCourse-button"><LuSearch /></button>
    </div>
  )
}