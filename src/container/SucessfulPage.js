import "SucessfulPage.css"
import Footer from 'Footer'

export default class SucessfulPage extends React.Component {

    render() {
        return <div className='page page-sucessful'>
            <div className="section-content" style={{ backgroundImage: `url(${process.env.PUBLIC_PATH}asset/pic/11.jpg)` }}>
                <div className="panel">
                    <div className="processbar">
                        <div className="circle sucess"></div>
                        <div className="stright"></div>
                        <div className="circle sucess"></div>
                        <div className="stright"></div>
                        <div className="circle sucess"></div>
                    </div>
                    <div className="sucessful-word">
                        <img src={`${process.env.PUBLIC_PATH}asset/lg-sucess.svg`} />
                    </div>
                </div>
                <div className="btn">
                    <Link to='/'><span>繼續逛逛</span></Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    }
}