import { createRoot } from "react-dom/client";
import App from "./MyApp";
import "./index.css";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(<App />);
