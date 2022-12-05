
const findGrades = (a) => {
    switch(true){
      case (a<=10):
        return ("E");
      
      case (a>=11 && a<=20):
        return ("D");  
       
        
      case (a>=21 && a<=30):
        return ("C");
        
        
      case (a>=31 && a<=40):
        return ("B");
        
        
      case (a>=41 && a<=50):
        
        return ("A");
       
    }
      
  };
  
  