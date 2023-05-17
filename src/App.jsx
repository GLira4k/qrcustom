import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import Resizer from "react-image-file-resizer";
import "./App.css";

export default function App() {
  const [logoIcon, setLogoIcon] = useState("");

  function handleLogoFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "image/png") {
      resizeImage(selectedFile);
    } else {
      alert("Por favor, selecione um arquivo PNG");
    }
  }

  function resizeImage(file) {
    Resizer.imageFileResizer(
      file,
      400,
      400,
      "PNG",
      100,
      0,
      (resizedImage) => {
        const tempUrl = URL.createObjectURL(resizedImage);
        setLogoIcon(tempUrl);
      },
      "blob"
    );
  }

  return (
    <main>
      <h1>Hello World!</h1>
      <div className="qrcode-container">
        <QRCodeSVG
          value="https://github.com.br/GLira4k"
          size={250}
          includeMargin={true}
          imageSettings={{
            src: logoIcon || "",
            x: undefined,
            y: undefined,
            width: 40,
            height: 40,
            excavate: true,
            style: {
              borderRadius: "5px",
            },
          }}
        />
      </div>
      <input type="file" name="icon" id="icon" accept=".png" onChange={handleLogoFileChange} />
    </main>
  );
}