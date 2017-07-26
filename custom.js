const btn = document.querySelector('.button')

btn.addEventListener('click', loadContent)

function loadContent(){

fetch('data.json')
.then(function (response){
  if (response.status !== 200){
    console.log('look loke there was a problem: ' + response.status)
    return
  }
  response.json()
  .then(function (data) {
    var newContent = ''
    for (var i = 0; i < data.fruits.length; i++) {
      newContent += '<div>'
      newContent += '<img src="' + data.fruits[i].photo + '"'
      newContent += 'alt="' + data.fruits[i].name + '">'
      newContent += '<p><strong>' + data.fruits[i].name+ '</strong><br>'
      newContent += data.fruits[i].genus + '<br>'
      newContent += '<span>' + data.fruits[i].season + '</span></p>'
      newContent += '</div>'
    }
    document.querySelector('#content').innerHTML = newContent
  })
}
)
.catch(function (err) {
  console.log('Fetch Error: ' + err)
})

}
