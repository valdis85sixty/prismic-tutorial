import React from "react"
import { graphql } from "gatsby"

const Index = ({ data }) => {
  if (!data) return null
  const home = data.prismicHomepage

  return (
    <React.Fragment>
      <h1>{home.data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: home.data.content.html }} />
    </React.Fragment>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`