function DocsSetup({ ref }) {
  return(
    <section ref={ref} className="setup">
      <h2>Setup</h2>
      <p><span className="bold">Create a <span className="code-snippet">.env</span> file:</span> The <span className="code-snippet">.env</span> file is used to securely store your OpenAI key. If it does not exist, create it in the root directory of your project and ensure it is listed in your <span className="code-snippet">.gitignore</span> file to avoid exposing sensitive information.</p>
      <br></br>
      <p>Add the following line to the <span className="code-snippet">.env</span> file:</p>
      <p className="code-box"><span><span className="code-red">OPEN_API_KEY</span><span className="code-red">=</span><span className="code-blue">&lt;your-openai-api-key&gt;</span> </span><span className="copy-icon">copy</span> </p>
      <p>Replace <span className="code-snippet">&lt;your-openai-api-key&gt;</span> with your actual OpenAI API key.</p>
    </section>
  )
}

export default DocsSetup