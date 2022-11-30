
const inputtxt = "06666665";    
const input = document.getElementById("phone");
let ph = document.getElementById("phone").value;
let max =15;
let min =15;

let id = 1;

let but = document.getElementById("b1");
but.addEventListener("click", func);

function func() {
    if (document.getElementById("phone").value.length < min ){document.getElementById("err").innerHTML = "This number is invalid"; document.getElementById("err").style.color = "red";}
    else  {document.getElementById("err").innerHTML = "Correct number"; document.getElementById("err").style.color = "green";}
    
}
// input.addEventListener('input',(e)=>{ limit(e)});

// input.addEventListener('onkeypress',(e)=>{ onlyNumberKey(e)});


function onlyNumberKey(evt) {
    if (evt.target.value.length >= max) return false;
    if(id === 1) {
        if (evt.target.value.length == 0 && (evt.keyCode != 53 && evt.keyCode != 54 && evt.keyCode != 55)) return false;
        evt.target.value= evt.target.value.replace(/^0+/, '');
        console.log(evt.target.value.length);
        if ((evt.target.value.length+1) > 2) {
            if ((evt.target.value.length+1) % 2== 0) {
                evt.target.value += "  ";
            }
        }

    }   

    else if (id === 2 )
    {
        if (evt.target.value.length == 4) evt.target.value += "  ";
    }

    else if (id === 3)
    {
        if ((evt.target.value.length) % 5 == 0) {
            evt.target.value += "  ";
        }
    }

    else if (id === 4 )
    {
        if (evt.target.value.length == 0) evt.target.value += "(";
        if (evt.target.value.length == 4) evt.target.value += ")   ";
        if (evt.target.value.length == 11) evt.target.value += "-";
    }

    else if (id === 5 )
    {
        console.log(evt.target.value.length);
        if (evt.target.value.length == 0 && evt.keyCode == 48) return false;
        if (evt.target.value.length == 1) evt.target.value += "  ";
        if (evt.target.value.length >= 1)
        {
            if ((evt.target.value.length+1) % 2 == 0) {
                evt.target.value += "  ";
            }
        }
        
    }
    
    
    
    // Only ASCII character in that range allowed
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if ((ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)))
            return false;        
        return true;   
}




function show_options(e) {
    showing_options = true;
    document.getElementById('select_pretty').onmousedown = null; //kill the event until unhover
    document.getElementById('select_pretty').className = 'select_outermost_focus';
    document.getElementById('select_pretty').focus();/*invoke class .select_outermost_focus .unchosen_element*/
    document.getElementById('option1').onmouseup = function() {option_clicked('option1'); id = 1; max = 15; document.getElementById("lab").innerHTML="+213 0";document.getElementById("phone").style.paddingLeft="45px"; document.getElementById("phone").value = ""; document.getElementById("err").innerHTML = ""; min = 15;};
    document.getElementById('option2').onmouseup = function() {option_clicked('option2'); id = 2; max = 14; document.getElementById("lab").innerHTML="+49 ";document.getElementById("phone").style.paddingLeft="33px"; document.getElementById("phone").value = ""; document.getElementById("err").innerHTML = ""; min = 14;};
    document.getElementById('option3').onmouseup = function() {option_clicked('option3'); id = 3; max = 20; document.getElementById("lab").innerHTML="598 ";document.getElementById("phone").style.paddingLeft="30px"; document.getElementById("phone").value = ""; document.getElementById("err").innerHTML = ""; min = 20;};
    document.getElementById('option4').onmouseup = function() {option_clicked('option4'); id = 4; max = 16; document.getElementById("lab").innerHTML="+1 ";document.getElementById("phone").style.paddingLeft="25px"; document.getElementById("phone").value = ""; document.getElementById("err").innerHTML = ""; min = 16;};
    document.getElementById('option5').onmouseup = function() {option_clicked('option5'); id = 5; max = 19; document.getElementById("lab").innerHTML="+33 ";document.getElementById("phone").style.paddingLeft="42px"; document.getElementById("phone").value = ""; document.getElementById("err").innerHTML = ""; min = 19;};

};





