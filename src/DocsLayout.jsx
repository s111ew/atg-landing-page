import DocsTitle from "./Docs/DocsTitle.jsx"
import DocsOverview from "./Docs/DocsOverview.jsx"
import DocsFeatures from "./Docs/DocsFeatures.jsx"
import DocsInstallation from "./Docs/DocsInstallation.jsx"
import DocsSetup from "./Docs/DocsSetup.jsx"
import DocsUsage from "./Docs/DocsUsage.jsx"
import DocsConfig from "./Docs/DocsConfig.jsx"
import DocsRequirements from "./Docs/DocsRequirements.jsx"
import DocsLicense from "./Docs/DocsLicense.jsx"
import { useRef } from "react"

function DocsLayout() {
  const overview = useRef()
  const features = useRef()
  const installation = useRef()
  const setup = useRef()
  const usage = useRef()
  const config = useRef()
  const requirements = useRef()
  const license = useRef()
  return(
    <div className="docs-container">
      <ul className="docs-nav">
        <li onClick={() => {
          scrollTo(overview)
        }}>Overview</li>
        <li onClick={() => {
          scrollTo(features)
        }}>Key Features</li>
        <li onClick={() => {
          scrollTo(installation)
        }}>Installation</li>
        <li onClick={() => {
          scrollTo(setup)
        }}>Setup</li>
        <li onClick={() => {
          scrollTo(usage)
        }}>Usage</li>
        <li onClick={() => {
          scrollTo(config)
        }}>Configuration Details</li>
        <li onClick={() => {
          scrollTo(requirements)
        }}>System Requirements</li>
        <li onClick={() => {
          scrollTo(license)
        }}>License</li>
      </ul>
      <article className="docs">
        <DocsTitle />
        <DocsOverview ref={overview}/>
        <DocsFeatures ref={features} />
        <DocsInstallation ref={installation} />
        <DocsSetup ref={setup} />
        <DocsUsage ref={usage} />
        <DocsConfig ref={config} />
        <DocsRequirements ref={requirements} />
        <DocsLicense ref={license} />
      </article>
    </div>
  )
}

function scrollTo(section) {
  section.current?.scrollIntoView({
    behaviour: 'smooth',
  })
}

export default DocsLayout