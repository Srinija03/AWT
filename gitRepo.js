function getRepo()
{
    
    const username=document.getElementById("uname").value;
    const url='https://api.github.com/users/'+username+'/repos';
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>
    {
        table=document.createElement("TABLE");
        table.border="2";
    row=table.insertRow(-1)
    cellH1=row.insertCell(-1)
    cellH2=row.insertCell(-1)
    cellH3=row.insertCell(-1)
    cellH1.innerHTML="Username";
    cellH2.innerHTML="Repository";
    cellH3.innerHTML="Description";
     data.forEach((element)=>
     {
      row1=table.insertRow(-1);
      cell1=row1.insertCell(-1)
      cell2=row1.insertCell(-1)
      cell3=row1.insertCell(-1)
      cell1.innerHTML=element.owner.login
      cell2.innerHTML=element.name
      cell3.innerHTML=element.description
    })
    var divtab=document.getElementById("div1");
    divtab.append(table);
})
.catch(function(error) {
    console.log(error);
  });
}