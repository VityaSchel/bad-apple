(() => {
  const your_host_server = 'localhost:27109'
  document.querySelectorAll('ol.memberList a.username span')
    .forEach((username, i) => {
      const x = i % 5
      const y = ~~(i/5)
      const filename = 'x'+x + '_' + 'y'+y
      username.style.background = `url("${your_host_server + '/' + filename}") !important`
    })
})()
