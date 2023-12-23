import Image from 'next/image'
  import NameDisplay from './(components)/nameDisplay/name';
  import { students } from './(components)/nameDisplay/name';
   // Assuming your data file is in the project root
  
  const Home = () => {
    return (
      <><section className="header"></section><section>
        <div className="text_box">
          <h1>students result</h1>
          
          <NameDisplay names={students} />
        </div></section></>
    );
  };
  
  export default Home;
  
    