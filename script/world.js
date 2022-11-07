var world = {
	radius: 50,
	bornPlace: [
		floor(this.radius*1+this.radius*0.1*(Math.random()*2-1)),
		floor(this.radius*1+this.radius*0.1*(Math.random()*2-1))
	],
	NORTH: [ 0, -1],
	SOUTH: [ 0,  1],
	WEST:  [-1,  0],
	EAST:  [ 1,  0],
	
}