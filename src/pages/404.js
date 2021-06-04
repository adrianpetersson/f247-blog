import * as React from "react"
import SectionLayout from "../styles/SectionLayout"


const NotFoundPage = () => {

  return (
    <SectionLayout>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </SectionLayout>
  )
}

export default NotFoundPage

