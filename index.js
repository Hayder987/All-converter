
    let form = document.querySelector("#form");

    let input = document.querySelector("#input1");
    let input2 = document.querySelector("#input2");
    let unit1 = document.getElementById("select-data")
    let span1 = document.querySelector("#span-1");
    let span2 = document.querySelector("#span-2");
    let demo = document.querySelector(".demo");

form.addEventListener("submit", celcius);

function celcius(x){
    x.preventDefault();

    let unit = unit1.value;
    
    var value1 = parseFloat(input.value);
    var result= 0;
    if (unit ==="aspect"){
        var result = (value1/1.778)
        if (input.value==1920){
            input2.value= 1080;
        }
        else if (input.value==4096){
            input2.value= 2160;
        }
        else if (input.value==2560){
            input2.value= 1444;
        }
        else if (input.value==1280){
            input2.value= 720;
        }
        else{
            input2.value= Math.round(result.toFixed(2));
        }  
        span1.innerHTML= "Width";
        span2.innerHTML= "Height";
        demo.innerHTML ="Note : Aspect Ratio 16:9"
    }
    else if (unit ==="aspect2"){
        var result = (value1*1.778)
        if (input.value==1080){
            input2.value= 1920;
        }
        else if (input.value==720){
            input2.value= 1280;
        }
        else if (input.value==1444){
            input2.value= 2560;
        }
        else if (input.value==2160){
            input2.value= 4096;
        }
        else{
            input2.value= Math.round(result.toFixed(2));
        } 
        span1.innerHTML= "Height";
        span2.innerHTML= "Width";
        demo.innerHTML ="Note : Aspect Ratio 9:16"
    }
    else if (unit ==="farenhite"){
        var result = (value1-32) * 5/9
        input2.value= result.toFixed(2);
        span1.innerHTML= "\u2109";
        span2.innerHTML= "\u2103";
        demo.innerHTML ="Note : farenhite to celcius converter"
    }
    else if (unit ==="celsius"){
        var result = (value1*9/5) + 32
        input2.value= result.toFixed(2)
        span1.innerHTML= "\u2103";
        span2.innerHTML= "\u2109";
        demo.innerHTML ="Note : Celcius To farenhite Calculator"
    }
    else if (unit ==="liter"){
        var result = (value1*33.814)
        input2.value= result.toFixed(2)
        span1.innerHTML= "L";
        span2.innerHTML= "Oz";
        demo.innerHTML ="Note : liter to Ounch Oz Convert"
    }
    else if (unit ==="kilometer"){
        var result = (value1/1.609)
        input2.value= result.toFixed(2)
        span1.innerHTML= "Km";
        span2.innerHTML= "Miles";
        demo.innerHTML ="Note : kilometer to miles Convert"
    }
    else if (unit ==="area"){
        var result = (value1/10.764)
        input2.value= result.toFixed(2)
        span1.innerHTML= "ft <sup>2</sup>";
        span2.innerHTML= "m <sup>2</sup>";
        demo.innerHTML ="Note : Area calculator ft<sup>2</sup> to m<sup>2</sup>"
    }
    else if (unit ==="gallon"){
        var result = (value1*3.785)
        input2.value= result.toFixed(2)
        span1.innerHTML= "gal";
        span2.innerHTML= "L";
        demo.innerHTML ="Note : Gallon to liter converter"
    }
    else if (unit ==="kilogram"){
        var result = (value1/2.205)
        input2.value= result.toFixed(2)
        span1.innerHTML= "Pound";
        span2.innerHTML= "Kg";
        demo.innerHTML ="Note : kilogram to pound Convert"
    }
    
    
  
};

unit1.addEventListener("click", select1);


function select1(){
    let unit = unit1.value; 
     if (unit ==="aspect"){
        span1.innerHTML= "Width";
        span2.innerHTML= "Height";
        demo.innerHTML ="Note : Aspect Ratio 16:9"
        
    }
    else if (unit ==="aspect2"){
        span1.innerHTML= "Height";
        span2.innerHTML= "Width";
        demo.innerHTML ="Note : Aspect Ratio 16:9"
        
    }
    
    else if (unit ==="farenhite"){
     
        span1.innerHTML= "\u2109";
        span2.innerHTML= "\u2103";
        demo.innerHTML ="Note : farenhite to celcius converter"
    }
    else if (unit ==="celsius"){
        span1.innerHTML= "\u2103";
        span2.innerHTML= "\u2109";
        demo.innerHTML ="Note : Celcius To farenhite Calculator"
    }
    else if (unit ==="liter"){
        span1.innerHTML= "L";
        span2.innerHTML= "Oz";
        demo.innerHTML ="Note : liter to Ounch Oz Convert"
    }
    else if (unit ==="kilometer"){
        span1.innerHTML= "Km";
        span2.innerHTML= "Miles";
        demo.innerHTML ="Note : kilometer to miles Convert"
    }
    else if (unit ==="area"){
        span1.innerHTML= "ft <sup>2</sup>";
        span2.innerHTML= "m <sup>2</sup>";
        demo.innerHTML ="Note : Area calculator ft<sup>2</sup> to m<sup>2</sup>"
    }
    else if (unit ==="gallon"){
        span1.innerHTML= "gal";
        span2.innerHTML= "L";
        demo.innerHTML ="Note : Gallon to liter converter"
    }
    else if (unit ==="kilogram"){
        span1.innerHTML= "Pound";
        span2.innerHTML= "Kg";
        demo.innerHTML ="Note : kilogram to pound Convert"
        
    }
    
}

function resetall(){

    span1.innerHTML= "Width";
    span2.innerHTML= "Height";
    demo.innerHTML ="Note : Please selcet conversion and Enter Numaric Value"
}

  

