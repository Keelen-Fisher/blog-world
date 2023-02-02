
import Footer from './Components/Footer/footer';
import HeaderHome from './Components/Home/home';

function journal() {
  return (
    <>
      <HeaderHome />
      <h1>Post your Daily Message Here:</h1>
      <form>
        <label htmlFor="">
          <input type='text' />
          Journal Name
        </label>

        <label htmlFor="">
          <input type='text' />
          Journal date
        </label>

        <label htmlFor="">
          <input type='text' />
          What is on Your Mind?
        </label>

        <label htmlFor="">
          <input type='text' />
          Admin
        </label>
      </form>
      <Footer />
    </>
  )
}


export default journal;
