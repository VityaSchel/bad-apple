(() => {
  const your_host_server = 'http://localhost:27109'
  Array.from(document.querySelectorAll('ol.memberList a.username span'))
    .forEach((username, i) => {
      const x = i % 5
      const y = ~~(i/5)
      const filename = `x${x}_y${y}.webp`
      username.style.setProperty('background', `url("${your_host_server + '/' + filename}")`, 'important')
    })
})()
