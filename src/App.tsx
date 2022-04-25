function App(): JSX.Element {
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
      <input placeholder="Enter title here..." />
      <h4>Enter your pastebin here:</h4>
      <textarea
        placeholder="Enter some text, this field cannot be empty."
        cols={60}
        rows={5}
      />
      <br />
      <button>Submit</button>
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
