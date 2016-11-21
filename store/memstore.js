/* this class is used for storage */

class MemStore{
   constructor(){
     this.map = {};
   }
   
   async set(key,value){
     this.map[key] = value;
   }
   
   async get(key){
     return this.map[key];
   }
   
   async delete(key){
     delete this.map[key];
   }
   
   async increase(key){
     var ret = await this.get(key);
     if(ret === undefined){
       return 0;
     }
    var num = parseInt(ret, 10);
    if(num !== ret) {
      throw new Error('INCREMENT: Wrong type of value');
    }
    this.map[key] = ++num;
    return num;
   }
}

module.exports = MemStore;
