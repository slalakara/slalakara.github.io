import { useState } from 'react'
import Splitter from '/src/img/SPLITTER.png'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="logo"><img src={Splitter} /></div>
      <div className="tip-calc">
        <div className="tip-entry">
          <div className="customer">
            <div className="customer-header">
              <h5>Hesap Tutarı</h5>
              <p className="uyari"></p>
            </div>
            <input type="number" className="customer-pay"  placeholder="$0" />
          </div>

          <div className="select-tip">
              <p>Bahşiş %'sini Seçin</p>
            <div className="tip-list">
              <button>5</button>
              <button>10</button>
              <button>15</button>
              <button>25</button>
              <button>50</button>
              <form className="customform">
              <input type="number" placeholder="ÖZEL" className="custom-tip" />
              </form>
            </div>
          </div>

          <div className="number-people">
            <div className="number-people-header">
              <h5>Kişi Sayısı</h5>
              <p className="uyari1"></p>
            </div>
            <input type="number" className="number-people-input" placeholder="0" required />
          </div>
        </div>

        <div className="tip-show">
          <div className="tip-amount">
            <div className="tip-amount-text">Bahşiş Miktarı <span>/ kişi</span></div>
            <div className="tip-amount-show">$0.00</div>
          </div>

          <div className="total">
            <div className="total-text">Toplam <span>/ kişi</span></div>
            <div className="total-show">$0.00</div>
          </div>

            <button className="reset-button">Sıfırla</button>

        </div>
      </div>
    </div>
  )
}

export default App

/* const [count, setCount] = useState(0) */
{/* <button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button> */}
