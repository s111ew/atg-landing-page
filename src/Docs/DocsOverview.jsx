function DocsOverview({ ref }) {
  return(
    <section ref={ref} className="overview">
      <h2>
        Overview
      </h2>
      <p className="body">
      Alt-Text Generator is an npm package designed to automatically generate concise and descriptive ALT text for images in a specified folder, leveraging <a className="inline-link" href="https://platform.openai.com/docs/overview">OpenAI&apos;s API</a>. The generated ALT text is integrated into HTML <span className="code-snippet">&lt;img&gt;</span> tags and saved in a Markdown file for easy usage.
      </p>
    </section>
  )
}

export default DocsOverview