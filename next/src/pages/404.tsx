import router from "next/router";

// Alternative Even-Calculators

// const Easier = function (int : number): boolean {

//   let current : number = 0
//   let isEven : boolean = true;
  
//   for(let i : number = current; current < int; current++){
//     isEven = !isEven
//   }
  
//   return isEven;
// }

// const ZeroIsEven = function(int : number): boolean {

//   const zeroIsEven = true;

//   let previous : boolean = true;
//   let current : boolean = true;

//   while(int > 0){
//     current = !previous;
//     previous = current
//     int--;
//   }

//   return (current && zeroIsEven);
// }



  const Page404 = () => {
    return (
        <>
        <p>404</p>
        <h1>Page Not Found</h1>
        <br/>
        <button className="link" style={{padding: 5, color: "darkgrey"}} onClick={() => router.push('/406')}>Maybe you will like this "lost" page instead</button>
        </>
    );
  };

  export default Page404;