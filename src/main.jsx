import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Canvas } from "@react-three/fiber";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas>
      <App />
    </Canvas>
  </StrictMode>
);
