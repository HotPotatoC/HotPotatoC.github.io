import React from "react"

interface Props {
  extraClasses?: string
}

export const Container: React.FC<Props> = (props) => (
  <div
    className={`container mx-auto px-4 sm:px-6 md:px-16 lg:px-20 ${props.extraClasses}`}
  >
    {props.children}
  </div>
)

export default Container
