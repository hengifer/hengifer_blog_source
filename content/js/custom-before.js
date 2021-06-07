// js/custom-before.js
function darkFunc() {
    console.log(`Now in ${window.isDark === 'y' ? 'dark' : 'light'} mode`)
  }
  
  window.darkFunctions = [darkFunc]