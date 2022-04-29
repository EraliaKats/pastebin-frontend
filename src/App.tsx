import { useEffect, useState } from "react";

interface Summary {
  summary_id: number;
  title: string;
  summary: string;
}

function App(): JSX.Element {
  const [title, setTitle] = useState("");
  const [textBody, setTextBody] = useState("");
  const [summaryList, setSummaryList] = useState<Summary[]>([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  function handleTitle(title: string) {
    setTitle(title);
  }

  function handleTextBody(textBody: string) {
    setTextBody(textBody);
  }

  async function handleSubmitPaste() {
    setIsButtonClicked(true);
    // const result = await fetch(
    //   "http://localhost:4000/pastes",
    const result = await fetch(
      "https://tifferalia-pastebin.herokuapp.com/pastes",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          text_body: textBody,
        }),
      }
    );
    //
    if (result.status === 200) {
      setTitle("");
      setTextBody("");
      console.log("added successfully");
      setIsButtonClicked(false);
    } else {
      console.log("an error occurred");
    }
  }
  useEffect(() => {
    const getResult = async () => {
      // const result = await fetch("http://localhost:4000/summaries");
      const result = await fetch(
        "https://tifferalia-pastebin.herokuapp.com/summaries"
      );
      const resultJson: Summary[] = await result.json();
      setSummaryList([...resultJson]);
    };
    getResult();
  }, [isButtonClicked, summaryList]);

  function displayOneSummary(summary: Summary) {
    return (
      <li key={summary.summary_id}>
        <details>
          <summary> {summary.title}</summary>
          <p> {summary.summary} </p>
        </details>
      </li>
    );
  }

  if (summaryList.length < 1) {
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
        <p>Oh we have no submits!</p>
      </>
    );
  } else {
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
          Oh you'd like to see more about a summary? Click on it and scroll
          down!
        </p>
        <ol>{summaryList.map(displayOneSummary)}</ol>
      </>
    );
  }
}

export default App;
