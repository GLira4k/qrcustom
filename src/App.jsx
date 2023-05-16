import { QRCodeSVG } from "qrcode.react";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [logoFile, setLogoFile] = useState(null)

  function handleLogoFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile.type === "image/png") {
      setLogoFile(selectedFile);
    } else {
      alert("Por favor, selecione um arquivo PNG");
    }
  }


  return (
    <main>
      <h1>Hello World!</h1>
      <QRCodeSVG 
        value="https://github.com.br/GLira4k"
        size={250}
        includeMargin={true}
        imageSettings={{
          src: logoFile ? URL.createObjectURL(logoFile) : "",
          x: undefined,
          y: undefined,
          height: 10,
          width: 40,
          excavate: true,
        }}
      />

      <input type="file" name="icon" id="icon" accept=".png" onChange={handleLogoFileChange}/>
    </main>
  );
}