class Polygon
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		
		this.width=width
		this.height=height
		this.body=Bodies.rectangle(x,y,this.width,this.height, options);
         World.add(world, this.body);
         this.image = loadImage("polygon.png")

	}
	display()
	{
			
			var polygonPos=this.body.position;		

			push()
			//translate(groundPos.x, groundPos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			//fill(255,192,203)
           // rect(polygonPos.x,polygonPos.y,this.width,this.height);
           
            imageMode(CENTER);
            
            image(this.image, 100, 350, this.width, this.height);
			pop()
			
	}

}