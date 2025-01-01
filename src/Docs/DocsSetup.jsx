function DocsSetup() {
  return(
    <section className="setup">
      <h2>Setup</h2>
      <p><span className="bold">Create a <span className="code-snippet">.env</span> file:</span> The <span className="code-snippet">.env</span> file is used to securely store your OpenAi key. If it does not exist, create it in the root directory of your project and ensure it is listed in your <span className="code-snippet">.gitignore</span> file to avoid exposing sensitive information.</p>
      <br></br>
      <p>Add the following line to the <span className="code-snippet">.env</span> file:</p>
      <p className="code-snippet">OPEN_API_KEY=&lt;your-openai-api-key&gt;</p>
      <p>Replace <span className="code-snippet">&lt;your-openai-api-key&gt;</span> with your actual OpenAI API key.</p>
    </section>
  )
}

export default DocsSetup