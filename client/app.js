//$.ajax({method: 'POST', url: '/upload_json', ... })`

// .preventDefault()
$('form').submit((e)=>{
    e.preventDefault()

    $.ajax({
        method:'post',
        url: '/upload_json',
        dataType: "json"
    })

})

