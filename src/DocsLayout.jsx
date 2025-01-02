import DocsTitle from "./Docs/DocsTitle.jsx"
import DocsOverview from "./Docs/DocsOverview.jsx"
import DocsFeatures from "./Docs/DocsFeatures.jsx"
import DocsInstallation from "./Docs/DocsInstallation.jsx"
import DocsSetup from "./Docs/DocsSetup.jsx"
import DocsUsage from "./Docs/DocsUsage.jsx"
import DocsConfig from "./Docs/DocsConfig.jsx"
import DocsRequirements from "./Docs/DocsRequirements.jsx"
import DocsLicense from "./Docs/DocsLicense.jsx"
import DocsNav from "./Docs/DocsNav.jsx"
import { useRef, useState, useEffect } from "react"

function DocsLayout() {
  const overviewRef = useRef();
  const featuresRef = useRef();
  const installationRef = useRef();
  const setupRef = useRef();
  const usageRef = useRef();
  const configRef = useRef();
  const requirementsRef = useRef();
  const licenseRef = useRef();
  const refs = [overviewRef, featuresRef, installationRef, setupRef, usageRef, configRef, requirementsRef, licenseRef]

  const [isDesktop, setDesktop] = useState(window.innerWidth > 930);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 930)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia)
  })
  return(
    <div className="docs-container">
      { isDesktop ? (<DocsNav refs={refs} />) : '' }
      <article className="docs">
        <DocsTitle />
        <DocsOverview ref={overviewRef}/>
        <DocsFeatures ref={featuresRef}/>
        <DocsInstallation ref={installationRef}/>
        <DocsSetup ref={setupRef}/>
        <DocsUsage ref={usageRef}/>
        <DocsConfig ref={configRef}/>
        <DocsRequirements ref={requirementsRef}/>
        <DocsLicense ref={licenseRef}/>
      </article>
    </div>
  )
}

export default DocsLayout