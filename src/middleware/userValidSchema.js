export const userValidSchema={
   body:{
     type: "object",
     required:["title", "description"],
     properties:{
      title:{
         type:"string",
         minLength: 1,
       },
       description:{
         type:"string",
         minLength: 4,
         maxLength: 50
       },
       
     },
   },
 
 }


