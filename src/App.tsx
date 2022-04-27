import { useState } from "react";

function App(): JSX.Element {
  const [title, setTitle] = useState("");
  const [textBody, setTextBody] = useState("");

  function handleTitle(title: string) {
    setTitle(title);
  }

  function handleTextBody(textBody: string) {
    setTextBody(textBody);
  }

  function handleSubmitPaste() {
    //store the value of title and textBody
    //send the values to the bakend
  }

  return (
    <>
      <h1>Pastebin App</h1>
      <p>
        <strong>
          You can use this app as a handy clipboard for your code!
        </strong>
      </p>
      <br />
      <h3>Title (optional)</h3>
      <input
        placeholder="Enter title here..."
        value={title}
        onChange={(e) => handleTitle(e.target.value)}
      />
      <h4>Enter your pastebin here:</h4>
      <textarea
        placeholder="Enter some text, this field cannot be empty."
        cols={60}
        rows={5}
        value={textBody}
        onChange={(e) => handleTextBody(e.target.value)}
      />
      <br />
      <button onClick={handleSubmitPaste}>Submit</button>
      <br />
      <hr />
      <p>
        <strong> 10 most recent submits:</strong>
      </p>
      <p>
        Oh you'd like to see more about a summary? Click on it and scroll down!
      </p>
      <ol>
        <li></li>
      </ol>
    </>
  );
}

export default App;
