/**
 * Created by dell on 2018/11/7.
 */
class Ball{
    //构造函数
    constructor(x,y,color){
        this.x = x;
        this.y = y;
        this.r = 10;
        this.color = color;
    };
    //原型方法
    render(){
         context.beginPath();
         context.arc(this.x,this.y,this.r,0,2*Math.PI,false);
         context.fillStyle = this.color;
         context.fill();
            }

}
class MoveBall extends Ball{
    constructor(x,y,color){
        //继承父类的属性
        super(x,y,color);

    }
    move(){
        let ranNum = Math.floor(Math.random()*20-10);
        this.x += ranNum;
        this.y += ranNum;
        this.r -= 1;
        if(this.r <= 0){
            this.r = 0;
        }
    }
}
let context = document.getElementsByTagName('canvas')[0].getContext('2d');
let ballArr = [];
let colors = ['pink','blue','orange','yellow','white','red'];
document.addEventListener('mousemove',function(e){
    let ball = new  MoveBall(e.offsetX-200,e.offsetY-100,colors[parseInt(Math.random()*6)]);
    ballArr.push(ball);
},false);
setInterval(function(){
    context.clearRect(0,0,800,500);
    for(let i=0;i < ballArr.length;i++){
        ballArr[i].render();
        ballArr[i].move();
    }
},100);




