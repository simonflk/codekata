// @ts-check
// import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
// const RUN_TESTS = true;



class Wand {
    constructor(object){
    this.casted = []
    let keys = Object.keys(object)
  
    keys.forEach((key)=> {
        return(
            this[key] = ()=>{
          this.casted.splice(0,0,key)
                object[key]()
            }
        )
    })
    this.deletrius = ()=>{
        this.casted = []
       this.casted.splice(0,0,'deletrius')
    }
    this.prioriIncantatem = ()=>{
        let currentCasts = this.casted
       
        this.casted.splice(0,0,'prioriIncantatem')
     
        return currentCasts
    }
    }
}
const newWand = new Wand({
    elevate: () => console.log('elevate'),
    decline: () => console.log('decline')
})

newWand.elevate()
newWand.decline()
newWand.prioriIncantatem()
newWand.deletrius()
console.log(newWand)
// makeTest(Wand, RUN_TESTS);