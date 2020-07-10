import React from 'react'
import escapeHtml from 'escape-html'
import { Text } from 'slate'
import map from 'lodash/map'

import Paragraph from 'components/Paragraph'

const serializeNode = (node, index) => {
  if (Text.isText(node)) {
    return escapeHtml(node.text)
  }

  const children = map(node.children, (n, i) => serializeNode(n, i))

  switch (node.type) {
    // case 'quote':
    //   return `<blockquote><p>${children}</p></blockquote>`
    case 'paragraph':
      return <Paragraph key={index}>{children}</Paragraph>
    // case 'link':
    //   return `<a href="${escapeHtml(node.url)}">${children}</a>`
    default:
      return children
  }
}

const serialize = (content) => {
  return map(content, (n, i) => serializeNode(n, i))
}

type TextRenderer = {
  content: any
}

const TextRenderer: React.FC<TextRenderer> = ({ content = [] }) => {
  return <>{serialize(content)}</>
}

export default TextRenderer
