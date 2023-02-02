
import Footer from './Components/Footer/footer';
import HeaderHome from './Components/Home/home';

function blog() {
  return (
    <>
      <HeaderHome />
      <h1>Post you Blog Here:</h1>
      <form>
        <label htmlFor="">
          <input type='text' />
          Blog Name
        </label>

        <label htmlFor="">
          <input type='text' />
          Blog date
        </label>

        <label htmlFor="">
          <input type='text' />
          Blog Body
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


export default blog;
