import text from "./TextContent.js"

function DocsLayout() {
  return(
    <article>
      <section>
        {text.abstract.body}
      </section>
    </article>
  )
}

export default DocsLayout