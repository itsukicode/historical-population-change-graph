---
to: <%= abs_path %>/index.tsx
---
<% if (have_style) { -%>
/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
<% } -%>
<% if (have_props) { -%>
// ______________________________________________________
// Type
type <%= component_name %>Props = {
  /**
  * The type to use for the this component
  * @default 'md'
  */
  type: 'sm'| 'md' | 'lg'
}
<% } -%>
// ______________________________________________________
// Styles
<% if (have_style) { -%>
<%= styles %>
// ______________________________________________________
// Component
<% } -%>
export const <%= component_name %>: <%- type_annotate %> = <%= props %> => {
  return (
    <<%= tag %>>
    </<%= tag %>>
  )
}