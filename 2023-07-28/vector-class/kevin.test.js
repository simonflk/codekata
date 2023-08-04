// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;



/**
 * @param {number[]} components
 */

 class Vector {
  constructor(components){
  this.components = components
  this.getComponentsLength = (numberArray) =>{
    return numberArray.length
  }
  this.equals = (vector) => {
    const matchingComponentsArray = this.components.filter((number, index)=> number === vector.components[index])
    if (matchingComponentsArray.length === this.components.length){
      return true
    } else {
      return false
    }
  }
  this.add = (numberArray) => {
    if (this.getComponentsLength(numberArray.components) === this.getComponentsLength(this.components)){
      return new Vector(this.components.map((number, index) => number + numberArray.components[index] ))
    } else {
      throw new Error('error')
    }
  }
  this.subtract = (numberArray) => {
    if (this.getComponentsLength(numberArray.components) === this.getComponentsLength(this.components)){
      return new Vector(this.components.map((number, index) => number - numberArray.components[index] ))
    } else {
      throw new Error('error')
    }
  }
  this.dot = (numberArray) => {
     if (this.getComponentsLength(numberArray.components) === this.getComponentsLength(this.components)){
       let dotTotal = 0
       let newComponents = new Vector(this.components.map((number, index) => number * numberArray.components[index] )).components
      newComponents.forEach((number)=> dotTotal += number)
       return dotTotal
    } else {
      throw new Error('error')
    }
  }
  this.norm = () => {
    let normTotal = 0
    this.components.forEach((number)=>{
      normTotal = normTotal + (number ** 2)
    })
    return Math.sqrt(normTotal)
  }
  
  this.toString = ()=>{
    return '(' + this.components.toString() + ')'
  }

}
}


makeTest(Vector, RUN_TESTS);

