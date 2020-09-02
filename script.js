function uploadFileToS3(){
  var event = window.event || callmymethod.caller.arguments[0];
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/*");
  
  var file = document.getElementById("uploadFile").files[0]
  var fileName = document.getElementById("uploadFile").files.item(0).name
  var results = document.getElementById('results');

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: file,
    redirect: 'follow'
  };
  
  fetch(`https://da6kgbk00f.execute-api.ap-south-1.amazonaws.com/v1/uploadFileToS3?name=${fileName}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    results.innerHTML = 'Upload Successful';
}

