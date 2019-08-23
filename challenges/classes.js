// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(properties) {
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height;
    }//this clsoes constructor
volume() {
    return this.length * this.width * this.height
  };//this closes volume
  
surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  };//this closes surfaceArea

}//this closes CuboidMaker2

// class CubeMaker extends CuboidMaker2 {
//     constructor(properties) {
//         super(properties);
//         this.cuboid2 = properties.cuboid2;
//     }
//     cubeFormula() {
//         return this.width * this.width * this.width
//     };//this closes cubeFormula

//     cubeSurfaceArea(){
//         return 6 * (this.width * this.width)
//     };//this closes cubeSurfaceArea
// }//thi closes cubeMaker

const cuboid2 = new CuboidMaker2({
    length: '4',
    width: '5',
    height: '5',
    });



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130
// console.log(cuboid2.cubeFormula());
// console.log(cuboid2.cubeSurfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.