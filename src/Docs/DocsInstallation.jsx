function DocsInstallation({ ref }) {
  return(
    <section ref={ref} className="installation">
      <h2>Installation</h2>
      <p>Install the package via npm:</p>
      <p onClick={() => {
        navigator.clipboard.writeText("npm i alt-text-generator")
      }} className="code-box">npm i alt-text-generator <span className="copy-icon">copy</span></p>
    </section>
  )
}

export default DocsInstallation