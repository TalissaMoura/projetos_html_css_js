let slideImg = document.querySelector(".slide").querySelector("img")
const left = document.querySelector(".arrow-left");
const right = document.querySelector(".arrow-right");
let btn = document.querySelector(".button-photos");
console.log(btn);
/*create a iterator */
class Iterador {
    constructor(length){
        this.length = length;
        this.index = 1; 
    }
    next(){
        if (this.index < this.length){
            this.index ++;
            return this.index;
        }
        else {
            this.index = 1;
            return this.index
        }
    }
    prev(){
        if((this.index > 0) && (this.index !=1)){
            this.index--;
            return this.index;
        }
        else if(this.index==1){
                this.index = this.length;
                return this.index;
            }
        }
    getIndex(){
        return this.index;
    }
    setIndex(value){
        this.index = value;
    }
    }


i = new Iterador(5);

/*Add events on the left and right buttons*/
right.addEventListener("click",function (){
    let index = i.next();
    let nextImg = slideImg.setAttribute("src","fotos/pic"+index+".jpg")
    return nextImg;    
});

left.addEventListener("click",function (){
    let index = i.prev();
    let prevImg = slideImg.setAttribute("src","fotos/pic"+index+".jpg");
    return prevImg;   
});

/*change the class from hidden to show */
btn.addEventListener("click",function(){
    var container = document.querySelector("#img-container");
    var getClass = container.getAttribute("class");
    if(getClass=="hidden"){
       container.setAttribute("class","show");
       btn.textContent = "Hide photos";
       return container;
    }
    else if (getClass=="show"){
        container.setAttribute("class","hidden")
        btn.textContent = "Show photos";
        return container;
    }
    
});

