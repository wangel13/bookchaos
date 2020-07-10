import React from 'react'
import Paragraph from 'components/Paragraph'
import { Element as SlateElement } from 'slate'

type Element = {
  element: SlateElement
  attributes: JSX.ElementAttributesProperty
}

const Element: React.FC<Element> = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'heading':
      return <h1 {...attributes}>{children}</h1>
    // case 'quote':
    //   return <QuoteComponent {...props} />
    // case 'image':
    //   return <ImageComponent {...props} />
    default:
      return <Paragraph attributes={attributes}>{children}</Paragraph>
  }
}

export default Element
