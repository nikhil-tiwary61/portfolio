import "../styles/Footer.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={theme}>
      Copyright &#169; 2023 Nikhil Tiwary. All Rights Reserved
    </footer>
  );
}
