import React, { useState } from 'react';
import './TextEditor.css';

function TextEditor () {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [textColor, setTextColor] = useState('#333');
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
  };

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const textStyle = {
    fontSize: `${fontSize}px`,
    fontFamily: fontFamily,
    color: textColor,
    backgroundColor: backgroundColor,
  };

  return (
    <div className="text-editor-container">
      <div className="text-editor-toolbar">
        <label>
          Font size:
          <input
            type="number"
            min="10"
            max="36"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
        </label>
        <label>
          Font family:
          <select value={fontFamily} onChange={handleFontFamilyChange}>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
          </select>
        </label>
        <label>
          Text color:
          <input
            type="color"
            value={textColor}
            onChange={handleTextColorChange}
          />
        </label>
        <label>
          Background color:
          <input
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </label>
      </div>
      <textarea
        className="text-editor-textarea"
        style={textStyle}
        value={text}
        onChange={handleTextChange}
      />
      <div className="text-editor-preview" style={textStyle}>
        {text}
      </div>
    </div>
  );
};

export default TextEditor;
