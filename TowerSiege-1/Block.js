class Block
{
	constructor(x,y,width,height)
	{
		var options={
            isStatic:true,
            restitution:0,
            friction:1
            			
			}
		
		this.width=width
		this.height=height
		this.body=Bodies.rectangle(x, y, width, height , options);
 		World.add(world, this.body);

	}


	display()
	{
		if (this.body.speed<3){
			
		  
			var blockPos=this.body.position;		

		
			//translate(groundPos.x, groundPos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			fill(255,192,203)
			rect(blockPos.x,blockPos.y,this.width, this.height);
			
		}else{
			World.remove(world,this.body)
			push()
			this.Visibility = this.Visibility - 5
			tint(255,this.Visibility)
			//image(this.image,this.body.position.x,this.body.position.y,50,50)
			pop()
			
	}

}
score(){
	if(this.visibility<0 && this.visibility>-150){
		score = score++;
	}
}
}

