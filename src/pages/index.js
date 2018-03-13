import React from 'react'

const Item = ({ title, url, price, features, image }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>
        <strong>Price:</strong> {price}
        <br />
        {features && (
          <span>
            <strong>Features</strong> {features}
          </span>
        )}
        <br />
      </p>
      <img src={image.url} alt={`Image of ${title}`} />
      <p>
        <a href={url} target="_blank" rel="noopener">
          View on Amazon
        </a>
      </p>
    </div>
  )
}

export default ({ data }) => {
  const items = data.allAmazonWishlistItem.edges.map(edge => edge.node)

  return <div>{items.map(Item)}</div>
}

export const query = graphql`
  query IndexQuery {
    allAmazonWishlistItem {
      edges {
        node {
          id
          title
          url
          price
          features
          comment
          priority
          purchased
          requested
          image {
            url
          }
        }
      }
    }
  }
`
