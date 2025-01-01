function DocsUsage({ ref }) {
  return(
    <section ref={ref} className="usage">
      <h2>Usage</h2>
      <h4>Importing the Module</h4>
      <br />
      <p>ES Modules</p>
      <p className="code-box es-module">
        <span><span className="code-red">import</span> &#123; generateAltText &#125; <span className="code-red">from</span> <span className="code-blue">&quot;alt-text-generator&quot;</span>;</span> <span className="copy-icon">copy</span>
      </p>
      <p>CommonJS</p>
      <p className="code-box common-js">
        <span><span className="code-red">const</span> &#123; generateAltText &#125; <span className="code-blue">=</span> <span className="code-purple">require</span>(<span className="code-blue">&quot;alt-text-generator&quot;</span>);</span> <span className="copy-icon">copy</span>
      </p>
      <h4>Calling the function</h4>
      <p>The <span className="code-snippet">generateAltText</span> function requires two arguments:</p>
      <ul>
        <li>
          <span className="bold">inputPath:</span> Path to the folder containing target image files.
        </li>
        <li>
          <span className="bold">outputPath:</span> Path to the Markdown file where the generated HTML tags will be written.
        </li>
      </ul>
      <br />
      <p className="bold">Example</p>
      <br />
      <div className="code-box example-usage">
        <div className="actual-code"><p>import &#123; generateAltText &#125; from &quot;alt-text-generator&quot;;</p>
        <br />
        <p>const inputPath = &quot;./images&quot;; // Path to the image folder</p>
        <p>const outputPath = &quot;./output.html&quot;; // Path to the output file</p>
        <br />
        <p>generateAltText(inputPath, outputPath)</p>
        <p>.then(() =&gt; console.log(&quot;Alt text generation complete.&quot;))</p>
        <p>.catch((err) =&gt; console.log(&quot;Error generating ALT text.&quot;))</p></div>
        <span className="copy-icon">copy</span>
      </div>
      <p className="bold">Expected Output</p>
      <p>The <span className="code-snippet">outputPath</span> file will contain HTML <span className="code-snippet">&lt;img&gt;</span> tags with generated ALT text, such as:</p>
      <br />
      <div className="code-box">
        <div className="actual-code"><p>&lt;img src=&quot;./images/image1.jpg&quot; alt=&quot;A red apple on a white plate.&quot; /&gt;</p>
        <p>&lt;img src=&quot;./images/image2.png&quot; alt=&quot;A black cat sitting on a windowsill.&quot; /&gt;</p></div>
        <span className="copy-icon">copy</span>
      </div>
    </section>
  )
}

export default DocsUsage