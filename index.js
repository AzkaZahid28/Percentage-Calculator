function per(){
  let Std_name = document.getElementById("name").value;
  let Std_obt_marks = document.getElementById("obt_marks").value;
  let Std_total_marks = document.getElementById("total_marks").value;
  let percentage = Std_obt_marks / Std_total_marks * 100 ;
  alert(`Dear ${Std_name} Your percentage is ${percentage} % `);
//   document.write(`Dear ${Std_name} Your percentage is ${percentage} % `) ; display on next page
//   In order to display the output on the same page we use
  document.getElementById("change").innerHTML = (`Dear ${Std_name} Your percentage is ${percentage} % `);
  document.getElementById("change").style.backgroundColor = "pink" ;
  document.getElementById("pic").src = "./calculator.jpg";

}  