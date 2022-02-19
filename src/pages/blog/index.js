import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import {cArticle, cArticleSubtitle, cArticleTitle} from './blog.module.css'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article className={cArticle} key={node.id}>
            <Link className={cArticleTitle} to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>

            {/* <h2>{node.frontmatter.title}</h2> */}
            <p className={cArticleSubtitle}>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        slug
      }
    }
  }
`

export default BlogPage