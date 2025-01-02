function DocsNav({ refs }) {
  return(
    <ul className="docs-nav">
      <li tabIndex={4} onClick={() => {
        scrollTo(refs[0])
      }}
      onKeyDown={e => e.key === 'Enter' ? scrollTo(refs[0]) :
        ''}>Overview</li>
      <li tabIndex={5} onClick={() => {
        scrollTo(refs[1])
      }}
      onKeyDown={e => e.key === 'Enter' ? scrollTo(refs[1]) :
        ''}>Key Features</li>
      <li tabIndex={6} onClick={() => {
        scrollTo(refs[2])
      }}
      onKeyDown={e => e.key === 'Enter' ? scrollTo(refs[2]) :
        ''}>Installation</li>
      <li tabIndex={7} onClick={() => {
        scrollTo(refs[3])
      }}
      onKeyDown={e => e.key === 'Enter' ? scrollTo(refs[3]) :
        ''}>Setup</li>
      <li tabIndex={8} onClick={() => {
        scrollTo(refs[4])
      }}
      onKeyDown={e => e.key === 'Enter' ? scrollTo(refs[4]) :
        ''}>Usage</li>
      <li tabIndex={9} onClick={() => {
        scrollTo(refs[5])
      }}
      onKeyDown={e => e.key === 'Enter' ? scrollTo(refs[5]) :
        ''}>Configuration Details</li>
      <li tabIndex={10} onClick={() => {
        scrollTo(refs[6])
      }}
      onKeyDown={e => e.key === 'Enter' ? scrollTo(refs[6]) :
        ''}>System Requirements</li>
      <li tabIndex={11} onClick={() => {
        scrollTo(refs[7])
      }}
      onKeyDown={e => e.key === 'Enter' ? scrollTo(refs[7]) :
        ''}>License</li>
  </ul>
  )
}

function scrollTo(section) {
  section.current.scrollIntoView({
    behavior: "smooth",
  })
}

export default DocsNav