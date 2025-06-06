let button=document.getElementById("btn");
button.addEventListener('click', ( )=>{
    const height=document.getElementById('height').value;
    const weight=document.getElementById('weight').value;
    const result=document.getElementById('output');
    let height_status=false , weight_status=false;
    if(height=== '' || isNaN(height) || (height<=0)){
        document.getElementById('height_error').innerHTML='Please provide a valid height';

    }else{
        document.getElementById('height_error').innerHTML='';
        height_status=true;
    }

    if(weight === '' || weight <=0 || isNaN(weight))
    {
        document.getElementById('weight_error').innerHTML='Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML='';
        weight_status=true;
    }

    if(height_status && weight_status)
    {
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML='Your BMI is:' + ' ' + bmi;
    }else{
        
        result.innerHTML='';
    }

});