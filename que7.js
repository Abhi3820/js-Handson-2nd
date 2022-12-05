
const Max_out_of_three = (A,B,C) => {
    if(A>B && A>C){
      return (A);
    }
    else if(B>A && B>C){
      return (B);
    }
    else if(A==B && B==C && C==A){
      return (-1)
    }
    else{
      return (C);
    }
  
  };
  
  