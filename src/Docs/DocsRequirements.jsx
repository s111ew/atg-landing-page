function DocsRequirements({ ref }) {
  return(
    <section ref={ref} className="requirements">
      <h2>System Requirements</h2>
      <ul>
        <li><span className="bold">Node.js:</span> Version 14 or higher.</li>
        <li><span className="bold">npm:</span> Version 6 or higher.</li>
        <li><span className="bold">OpenAI:</span> A Valid API key.</li>
      </ul>
    </section>
  )
}

export default DocsRequirements