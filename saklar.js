function saklar() {
   let toggle1 = document.getElementById("default-toggle1")
   let toggle2 = document.getElementById("default-toggle2")
   let toggle3 = document.getElementById("default-toggle3")
   // elemen checed yaitu unntuk true / false

    // ngambil id di html
    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")

// toggle.checked ? alert('nyala') : alert('mati')
   
   if (toggle1.checked) {
      lampu1.src = "./assets/Images/on.gif";
   }else{
      lampu1.src = "./assets/Images/off.gif";
   }

   if (toggle2.checked) {
      lampu2.src = "./assets/Images/on.gif";
   }else{
      lampu2.src = "./assets/Images/off.gif";
   }
   if (toggle3.checked) {
      lampu3.src = "./assets/Images/on.gif";
   }else{
      lampu3.src = "./assets/Images/off.gif";
   }
  
 //    jika pake images itu harus ada .src di bagian variabelnya
 // agar file nya bisa masuk / berjalan
   //  if (action == "on") {
   //    if (lampU == 1) {
   //       lampu1.src = "./assets/Images/on.gif";
   //    }
   //    if (lampU == 2) {
   //       lampu2.src = "./assets/Images/on.gif";
   //    }
   //    if (lampU == 3) {
   //       lampu3.src = "./assets/Images/on.gif";
   //    }
    
   //  }
   //  if (action == "off") {
   //    if (lampU == 1) {
   //       lampu1.src = "./assets/Images/off.gif";
   //    }
   //    if (lampU == 2) {
   //       lampu2.src = "./assets/Images/off.gif";
   //    }
   //    if (lampU == 3) {
   //       lampu3.src = "./assets/Images/off.gif";
   //    }
   //  }
 }