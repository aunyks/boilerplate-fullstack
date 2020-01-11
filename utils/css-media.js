const isDarkMode = () => {
  if (typeof window === 'undefined')
    return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const isStandalone = () => {
  if (typeof window === 'undefined')
    return false
  return window.matchMedia('(display-mode: standalone)').matches
}

module.exports = {
  isDarkMode,
  isStandalone
}