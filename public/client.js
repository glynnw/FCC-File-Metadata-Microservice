(function () {
  const form = document.querySelector('#upload')
  const submitButton = form.querySelector('#upload-submit')
  const fileUpload = form.querySelector('#file')
  
  submitButton.addEventListener("click", function (event) {
    let formData = new FormData(form)
    fetch('/api/fileanalyze', {
      method: 'POST',
      body: formData
    })
    .then(function (data) {
      return data.json()
    })
    .then(function (json) {
      alert(`Filesize: ${json.fileSize} bytes`)
    })
    .catch(function (err) {
      alert(err)
    })
    event.preventDefault()
  })
})()