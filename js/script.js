//ini javascript
console.log('Javascript Tersambung');

function validateForm(){

const inputSuhu = document.getElementById('input-suhu').value;

if (inputSuhu == ''){
    alert('Inputan anda kosong');
} else{
    calculate(inputSuhu);
}


function calculate(value){
    let result = parseInt(value) * 9/5 + 32;
    document.getElementById('hasil-suhu').value=result;
    document.getElementById('how-to-suhu').value =  `${document.getElementById('input-suhu').value} * 9/5 + 32 = ` + String(result) ;
    
}
}

function validateForm2(){

    const inputSuhuF = document.getElementById('input-suhuF').value;
    
    if (inputSuhuF == ''){
        alert('Inputan anda kosong');
    } else{
        calculate(inputSuhuF);
    }
    }
    
    function calculate(value){
        let result = (parseInt(value) - 32) * 5/9;
        document.getElementById('hasil-suhuC').value=result;
        document.getElementById('how-to-suhuC').value =  `(${document.getElementById('input-suhuF').value} - 32) * 5/9 = ` + String(result) ;
        
    }



function hapus(value){
    document.getElementById('input-suhu').value='';
    document.getElementById('hasil-suhu').value='';
    document.getElementById('how-to-suhu').value='';
    document.getElementById('input-suhuF').value='';
    document.getElementById('hasil-suhuC').value='';
    document.getElementById('how-to-suhuC').value='';
}

function ganti() {
    var x = document.getElementById("FormCtoF");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

