function DocsFeatures({ ref }) {
  return(
    <section ref={ref} className="features">
      <h2>
        Key Features
      </h2>
      <ul className="body">
        <li>
          <span className="bold">Format Support:</span> Compatible with <span className="code-snippet">.jpg</span>, <span className="code-snippet">.jpeg</span>, and <span className="code-snippet">.png</span> image formats.
        </li>
        <li>
          <span className="bold">AI-Powered ALT Text:</span> Automatically generates accurate and descriptive ALT text for each image.
        </li>
        <li>
          <span className="bold">HTML Output:</span> Outputs HTML <span className="code-snippet">&lt;img&gt;</span> tags with the generated ALT text included.
        </li>
        <li>
          <span className="bold">User-friendly:</span> Simple setup and configuration.
        </li>
      </ul>
    </section>
  )
}

export default DocsFeatures