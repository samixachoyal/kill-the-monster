class Monster{
  constructor(x,y,width,height){
    var options={
      isStatic:true,
    restitution:0.5,
    friction:1.0

    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image = loadImage("Monster-01.png");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height =height;
    World.add(world,this.body);
  }
display(){
  var pos = this.body.position;
  push();
  translate(pos.x,pos.y)
 imageMode(CENTER);
  image(this.image,0,0,this.width,this.height);
  pop();
}

}