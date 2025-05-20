import React, { useState, useEffect } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [isFocused, setIsFocused] = React.useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const containerStyle = {
    backgroundColor: isFocused ? 'rgba(13, 15, 17, 0.64)' : 'rgba(203, 203, 204, 0.48)',
    transition: 'background .2s ease'
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const term = searchTerm.toLowerCase().trim().replace(/\s+/g, ' ')
      const cards = document.querySelectorAll(`
        .S_MediumLearningCard,
        .W_SmallLearningCardRow > a,
        .W_SmallLearningCardRow > div
      `)

      cards.forEach((card) => {
        const cardText = card.textContent
          .toLowerCase()
          .replace(/[\u00A0\s]+/g, ' ')
          .trim()

        const isVisible = !term || cardText.includes(term)
        card.style.display = isVisible ? '' : 'none'
      })
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm])

  return (
    <div className="W_SearchContainer" style={containerStyle}>
      <div className="Q_SearchIcon"></div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="A_SearchInput A_Heading3Burger"
        placeholder="поиск по учёбе"
        autoComplete="off"
      />
    </div>
  )
}

export default Search