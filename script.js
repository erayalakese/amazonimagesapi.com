const code = "var requestOptions = {\n" +
    "  method: 'GET'\n" +
    "};\n" +
    "\n" +
    "fetch(\"https://api.amazonimagesapi.com/:ASIN:/:domain:\",\n" +
    "requestOptions)\n" +
    "  .then(response => response.text())\n" +
    "  .then(result => console.log(result))\n" +
    "  .catch(error => console.log('error', error));"

$(document).ready(function () {
    $(".search").on("click", function () {
        $("pre.response").get(0).innerText = "Fetching..."
        
        const asin = $('#asin').val();
        const domain = $('#domain').val();

        let text = code

        text = text.replace(/:ASIN:/g, asin)
        text = text.replace(/:domain:/g, domain)

        $("pre.request").get(0).innerText = text

        var requestOptions = {
            method: 'GET'
        };

        fetch("https://api.amazonimagesapi.com/"+asin+"/"+domain,
            requestOptions)
            .then(response => response.text())
            .then(result => {
                $("pre.response").get(0).innerText = result
                console.log(result)
            })
            .catch(error => {
                $("pre.response").get(0).innerText = error
                console.log('error', error)
            });
    });
})
