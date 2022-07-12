import Login from '../components/Login';
//import axios from "axios";

const Handler = ({registered}) => {
  return(
    <Login registered={registered}/>
  );
}

export async function getServerSideProps(ctx) {
  const { req, res } = ctx;
  //console.log(ctx.req.aborted);
  return {
    props: {
      registered: ctx.query.registered ? true : false
    }
  }
}

  export default Handler;