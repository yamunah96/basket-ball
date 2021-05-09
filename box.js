class Box{
    // pre defined and user defined 
    constructor(x,y,width,height,color){
        // Matter.Bodies.rectangle(x,y,w,h,options);
        var options ={
            restitution: 1.0,
        }
    
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.color=color;
    }


    display(){
        fill(this.color);
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y, this.width,this.height);

    }
}