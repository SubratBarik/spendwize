import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../assets/css/style.css';

function Expenses(props) {
  return (
    <>
      <div id="wrapper" className=''>

        <Navbar />

        <div className="main-block">
          <div className="sideblock">
            <Sidebar />
          </div>
          <div className="content">
            <h3>{props.title}</h3>
            <div className='expense-block'>
              <button className='btn-expense'>Add Expense</button>
              <table className='table'>
                <tr>
                  <th>A</th>
                  <th>B</th>
                  <th>C</th>
                  <th>D</th>
                  <th>E</th>
                  <th>F</th>
                </tr>
                <tr>
                  <td>a</td>
                  <td>b</td>
                  <td>c</td>
                  <td>d</td>
                  <td>e</td>
                  <td>f</td>
                </tr>
                <tr>
                  <td>g</td>
                  <td>h</td>
                  <td>i</td>
                  <td>j</td>
                  <td>k</td>
                  <td>l</td>
                </tr>
                <tr>
                  <td>m</td>
                  <td>n</td>
                  <td>o</td>
                  <td>p</td>
                  <td>q</td>
                  <td>r</td>
                </tr>
                <tr>
                  <td>s</td>
                  <td>t</td>
                  <td>u</td>
                  <td>v</td>
                  <td>w</td>
                  <td>x</td>
                </tr>
                <tr>
                  <td>a</td>
                  <td>b</td>
                  <td>c</td>
                  <td>d</td>
                  <td>e</td>
                  <td>f</td>
                </tr>
                <tr>
                  <td>g</td>
                  <td>h</td>
                  <td>i</td>
                  <td>j</td>
                  <td>k</td>
                  <td>l</td>
                </tr>
                <tr>
                  <td>m</td>
                  <td>n</td>
                  <td>o</td>
                  <td>p</td>
                  <td>q</td>
                  <td>r</td>
                </tr>
                <tr>
                  <td>s</td>
                  <td>t</td>
                  <td>u</td>
                  <td>v</td>
                  <td>w</td>
                  <td>x</td>
                </tr>
                <tr>
                  <td>a</td>
                  <td>b</td>
                  <td>c</td>
                  <td>d</td>
                  <td>e</td>
                  <td>f</td>
                </tr>
                <tr>
                  <td>g</td>
                  <td>h</td>
                  <td>i</td>
                  <td>j</td>
                  <td>k</td>
                  <td>l</td>
                </tr>
                <tr>
                  <td>m</td>
                  <td>n</td>
                  <td>o</td>
                  <td>p</td>
                  <td>q</td>
                  <td>r</td>
                </tr>
                <tr>
                  <td>s</td>
                  <td>t</td>
                  <td>u</td>
                  <td>v</td>
                  <td>w</td>
                  <td>x</td>
                </tr>
                <tr>
                  <td>a</td>
                  <td>b</td>
                  <td>c</td>
                  <td>d</td>
                  <td>e</td>
                  <td>f</td>
                </tr>
                <tr>
                  <td>g</td>
                  <td>h</td>
                  <td>i</td>
                  <td>j</td>
                  <td>k</td>
                  <td>l</td>
                </tr>
                <tr>
                  <td>m</td>
                  <td>n</td>
                  <td>o</td>
                  <td>p</td>
                  <td>q</td>
                  <td>r</td>
                </tr>
                <tr>
                  <td>s</td>
                  <td>t</td>
                  <td>u</td>
                  <td>v</td>
                  <td>w</td>
                  <td>x</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </>
  )
}

export default Expenses;
