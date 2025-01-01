function DocsNav({ refs }) {
  return(
    <ul className="docs-nav">
      <li onClick={() => {
        scrollTo(refs[0])
      }}>Overview</li>
      <li onClick={() => {
        scrollTo(refs[1])
      }}>Key Features</li>
      <li onClick={() => {
        scrollTo(refs[2])
      }}>Installation</li>
      <li onClick={() => {
        scrollTo(refs[3])
      }}>Setup</li>
      <li onClick={() => {
        scrollTo(refs[4])
      }}>Usage</li>
      <li onClick={() => {
        scrollTo(refs[5])
      }}>Configuration Details</li>
      <li onClick={() => {
        scrollTo(refs[6])
      }}>System Requirements</li>
      <li onClick={() => {
        scrollTo(refs[7])
      }}>License</li>
  </ul>
  )
}

function scrollTo(section) {
  section.current.scrollIntoView({
    behavior: "smooth",
  })
}

export default DocsNav