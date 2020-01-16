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

const isMobile = () => {
  if (typeof window === 'undefined')
    return false
  return window.matchMedia('(max-width: 375px)').matches
}

module.exports = {
  isDarkMode,
  isStandalone,
  isMobile
}