const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status !== 200) {
        throw new Error('An error occurred')
    }
    const data = await response.json()
    return data.puzzle
}

export {getPuzzle as default}
