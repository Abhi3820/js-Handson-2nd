
const isEligible = (a) => {
    if(a<=120){
      if(a>=18){
        return "Eligible for Voting";
      }
      else{
        return "Not Eligible for Voting";
      }
    }
      
  }
  isEligible(19);
  
  