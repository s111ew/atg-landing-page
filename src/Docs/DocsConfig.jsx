function DocsConfig({ ref }) {
  return(
    <section ref={ref} className="config">
      <h2>Configuration Details</h2>
      <h4>Input Folder</h4>
      <p>The <span className="code-snippet">inputPath</span> should point to a folder contianing <span className="code-snippet">.jpg</span>, <span className="code-snippet">.jpeg</span>, or <span className="code-snippet">.png</span> images for ALT text generation.</p>
      <h4>Output File</h4>
      <p>Specify the file path where the HTML tags should be written. If the file does not exist, it will be created automatically.</p>
    </section>
  )
}

export default DocsConfig