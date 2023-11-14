let reg=document.forms["register"];
reg.addEventListener("submit", getForm);

function getForm(event){
    event.preventDefault();

    let data={
        "name": this.name.value,
        "age": this.age.value,
        "gender": this.gender.value,
        "favclr": this['fav-clr'].value,
        "favfood":[]

    }

    let foods=document.querySelectorAll(".fav-food");
    for(let i of foods){
        if (i.checked==true){
            data["favfood"].push(i.value)
        }

    }
    console.log(data);

    let out=`
    <p>Name: ${data.name}</p>
    <p>Name: ${data.age}</p>
    <p>Name: ${data.gender}</p>
    <p>Name: ${data.favclr}</p>
    <p>Name: ${data.favfood}</p>
    `

    document.getElementById("out").innerHTML=out
}