let tabs = () => {
  let options = document.querySelectorAll('.explore__nav'),
    content = document.querySelectorAll('.explore__cards'),
    optionsName
  options.forEach(item => {
    item.addEventListener('click', selectOption)
  })

  function selectOption() {
    options.forEach(item => {
      item.classList.remove('_active');
    });
    this.classList.add('_active')
    optionsName = this.getAttribute('data-tab-name')
    document.querySelector(`.explore__navigation-mob [data-tab-name="${optionsName}"]`).classList.add('_active')
    selectcatalogCategoryContent(optionsName)
  }
  function selectcatalogCategoryContent(optionsName) {
    content.forEach(item => {
      item.classList.contains(optionsName) ? item.classList.add('_active') : item.classList.remove('_active')
    })
  }
}

tabs()