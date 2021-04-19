// For Firebase JS SDK v7.20.0 and later, measurementId is optional



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCs1jjrKNAIXII4MLxYBlP51h4WDbYobA4",
    authDomain: "my-project-8da37.firebaseapp.com",
    databaseURL: "https://my-project-8da37-default-rtdb.firebaseio.com",
    projectId: "my-project-8da37",
    storageBucket: "my-project-8da37.appspot.com",
    messagingSenderId: "455635436453",
    appId: "1:455635436453:web:f41e41d16a8b7e9f7f5e4c",
    measurementId: "G-FT77Q66MKY"
  };
  firebase.initializeApp(firebaseConfig)
  var dbref=firebase.database().ref().child("students")

  function insertData()
  {
      console.log("Inserting data...")
      var sname=document.getElementById("sname").value;
      var rollno=document.getElementById("rollno").value;
      dbref.child(rollno).set({
        sname:sname,
        rollno:rollno
      })
  }

  function deleteData()
  {
      var roll=prompt("Enter the roll number to be deleted..");
      dbref.child(roll).remove()
      console.log("Data deleted")
  }

  function updateData()
  {
      var name1=document.getElementById("sname").value;
      var roll1=document.getElementById("rollno").value;
      dbref.child(roll1).update({sname:name1})
      console.log("Data updated")
  }

  function readData()
  {
      var table=document.createElement("table");
      table.border="1"
      row=table.insertRow(-1)
      h1=row.insertCell(-1)
      h2=row.insertCell(-1)
      h1.innerHTML="Name";
      h2.innerHTML="Roll No.";
      console.log("Reading data..")
      dbref.on("value",(snap)=>{
          snap.forEach((data)=>{
              r1=table.insertRow(-1)
              c1=r1.insertCell(-1)
              c1.innerHTML=data.val().sname
              c2=r1.insertCell(-1)
              c2.innerHTML=data.val().rollno
          })
      })
      var div=document.getElementById("table");
      div.append(table);
  }
