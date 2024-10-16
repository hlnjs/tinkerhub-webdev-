// console.log("Hello MEC")
            // let x=5;
            // console.log(x);
            // x=10;
            // console.log(x);
            // const y=12;
            // console.log(y);
            // x="HEllo";
            // console.log(x)

            // if(8>9){
            //     console.log(1)
            // }
            // else{
            //     console.log(0)
            // }
            let count=0;
            let count2=2;
            function myFunc(param1){
                count=count+count2;
                console.log ( `Hello ${param1}. Your count is: ${count}. Yourre\n welcome`)

            }




            // myFunc()
function changeButton(){
    if (document.querySelector('.secondbutton').innerText==="subscribe"){
        document.getElementById('secondbutton').innerText="subscribed";
        document.querySelector('.secondbutton').classList.remove('secondbutton');
        document.querySelector('.secondbutton').classList.add('secondbuttonJS');

    }
    else{
        document.getElementById('secondbutton').innerText='Subscribe';
        document.querySelector('secondbuttonJS').classList.add('secondbutton');
        //document.querySelector('secondJS').classList.remove('secondbuttonJS');

    }
}
class  Car{
    brand="HONDA";
    color="BLUE";
    price=1200;
   
}
// Car.brand="honda";
// console.log(Car.brand)
let car1=new Car()

let x=JSON.stringify(car1);
let y=JSON.parse(x);



console.log(x);
console.log(y);
// Window.document.body.innerHTML

