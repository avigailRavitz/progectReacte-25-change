import{ observable, makeObservable,action} from 'mobx';

class AdminData{
   
     business = {
        id: "123",
        name: "Coding Academy",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        logo: "https://coding-academy.org/images/ca_logo.png",
        description: "The best coding academy in the world",
    };
     service =[
        {
        id: "11",
        name: "פגישת ייעוץ פרונטלית",
        description: "פגישת ייעוץ פרטנית בקליניקה",
        price: 500,
        duration: 60,
         },
         {
        id: "12",
        name: "פגישת ייעוץ פרונטלית",
        description: "פגישת ייעוץ פרטנית בקליניקה",
        price: 500,
        duration: 60,
         }
    ]
    isLogin=false;

    sendToEdit=false;

    constructor(){
        makeObservable(this,{
         //    arreyMeeting:observable,//מערך הפגישות
         //  //  addArryMeeting:action,//
         //    arreyServices:observable,//מערך השרותים
         //   addAarreyServices:action,
            isLogin:observable,//בדיקה אם המשתמש הוא המנהל(משתנה)
            // sendToEdit:observable,
            // setsendToEdit:action,
            setIsLogin:action,//בדיקה אם המשתמש הוא המנהל(פונקציה)
        })
     }
     setIsLogin=(val)=>{
        this.isLogin=val;
     }
   //   setsendToEdit=(val)=>{
   //    this.isLogin=val;
   // }
     sendDetails=async(name,address,phone,owner,logo,description)=>{
      console.log("enter save saveDetalise ")
      console.log(name,address,phone,owner,logo,description)
      const response = await fetch("http://localhost:8787/businessData", {
          method: "POST",
          body: JSON.stringify({
            name,address,phone,owner,logo,description
          }),
          headers: {
            "Content-Type": "businessData/json",
          },
        });
        
     }       
      getDetalise=async()=>{
        console.log("enter save detalis")
        // console.log()
       const response = await fetch("http://localhost:8787/businessData");
       const data = await response.json();
       this.details=JSON.parse(data);
    // console.log(this.details)
       }  
     
}
export default new AdminData;