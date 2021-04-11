function covid() {
    var Country = document.getElementById("input1").value;
    var dateOne = document.getElementById("input2").value;
    var dateTwo = document.getElementById("input3").value;
    var request = new XMLHttpRequest();
    request.open('GET', `https://api.covid19api.com/country/${Country}?from=${dateOne}T00:00:00Z&to=${dateTwo}T00:00:00Z`, true)
    request.onload = function() {

        var JSONdata = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {

            JSONdata.forEach((corona) => {
                myFunction(corona.Confirmed, corona.Deaths, corona.Active);
            })
        } else {
            console.log('error')
        }
    }

    request.send();

}

function myFunction(confirm, death, active) {
    var para = document.createElement("div");
    para.innerHTML = "Confirmed cases : " + confirm + " " +
        "<br>Active Cases : " + active + " " +
        "<br>Death Cases : " + death;
    document.body.appendChild(para);

}