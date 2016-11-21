const BaseModel  = require("./base");
const PREFIZ_EMAIL_TO_ID = "email:";
class UserModel extends BaseModel{
   constructor(store){
     super(store,"user:")
   }
   create(obj){
    return super.create(obj).then((id)=>{
      return this.store.set(PREFIZ_EMAIL_TO_ID + obj.email,id).then(()=>id)
    })
   }
   
   /* this will fail for async-to-generator,wonder why?
   async create(obj){
     const id = await super.create(obj);
     await this.store.set(PREFIZ_EMAIL_TO_ID + obj.email,id);
     return id;
   }
   */
   
   async getByEmail(email){
    const id = await this.store.get(PREFIZ_EMAIL_TO_ID + email);
    return await this.get(id);
   }
}
