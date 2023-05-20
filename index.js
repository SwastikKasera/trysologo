const btn = document.getElementById("btn-select-1")
var btn1_active = false;
btn.addEventListener("click", function(){
    if(!btn1_active){
        btn1_active = true;
        btn3_active = false
        btn.style.backgroundColor = "#F3DFC1"
        btn.style.color = "#160F29"
        btn_other.style.color = "#F3DFC1"
        btn_other.style.backgroundColor = "#160F29"
    }else{
        btn1_active = false;
        btn3_active = false;
        btn.style.color = "#F3DFC1"
        btn.style.backgroundColor = "#160F29"
    }
})

const btn_webDesign = document.getElementById("btn-select-2")
var btn2_active = false;
btn_webDesign.addEventListener("click", function(){
    if(!btn2_active){
        btn2_active = true
        btn_webDesign.style.backgroundColor = "#F3DFC1"
        btn_webDesign.style.color = "#160F29"
        btn_other.style.color = "#F3DFC1"
        btn_other.style.backgroundColor = "#160F29"
        btn3_active = false
    }else{
        btn2_active = false;
        btn3_active = false;
        btn_webDesign.style.color = "#F3DFC1"
        btn_webDesign.style.backgroundColor = "#160F29"
    }
})

const btn_other = document.getElementById("btn-select-3")
var btn3_active = false
btn_other.addEventListener("click", function(){
    if(!btn3_active){
        btn1_active = false;
        btn2_active = false;
        btn3_active = true;
        btn_other.style.backgroundColor = "#F3DFC1"
        btn_other.style.color = "#160F29"
        btn_webDesign.style.color = "#F3DFC1"
        btn_webDesign.style.backgroundColor = "#160F29"
        btn.style.color = "#F3DFC1"
        btn.style.backgroundColor = "#160F29"
        
    }else{
        btn3_active = false;
        btn_other.style.color = "#F3DFC1"
        btn_other.style.backgroundColor = "#160F29"
    }
})

// Skill Section Js Code

const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    
    const innerDiv = item.querySelector('.round')
    const icon = item.querySelector('.skill-icon')
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#F3DFC1';
        item.style.color = '#160F29';
        item.style.transitionDuration = '250ms';
        innerDiv.style.backgroundColor = '#160F29';
        innerDiv.style.transitionDuration = '250ms';
        icon.style.color = "#31DDB4"
        icon.style.transitionDuration = '250ms';
        item.style.cursor = 'pointer'
    });
    
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '';
        innerDiv.style.backgroundColor = '';
        item.style.color = '';
        icon.style.color = ""
    });
});
