import React from "react"

const CategoryTitle: React.FC = ({ children }) => {
  return (
    <h1 className="about-title font-monument-ultrabold text-5xl md:text-7xl">
      {children}
    </h1>
  )
}

export default CategoryTitle
