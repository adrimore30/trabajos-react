import "./Sidebar.css";
import { useState } from "react";

export const Sidebar = () => {
  const [active, setActive] = useState("inicio");

  return (
    <div className="sidebar"> {/* horizontal, aunque se llama sidebar */}
      <ul>
        <li
          className={active === "inicio" ? "active" : ""}
          onClick={() => setActive("inicio")}
        >
          <a href="#inicio">Inicio</a>
        </li>
        <li
          className={active === "servicios" ? "active" : ""}
          onClick={() => setActive("servicios")}
        >
          <a href="#servicios">Servicios</a>
        </li>
        <li
          className={active === "contacto" ? "active" : ""}
          onClick={() => setActive("contacto")}
        >
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
