import React from "react";

export default function StructuredDataContainer(props) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: props.innerHTML }}
    />
  );
}
