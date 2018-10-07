import "ShoppingItem.css"

export default class ShoppingItem extends React.Component {

    render() {
        let {item: {title, imgUrl}} = this.props
        return <div className="shopping-stuff">
            <div className="cover" style={{ backgroundImage: `url(${process.env.PUBLIC_PATH}asset/pic/${imgUrl}.jpg)` }}></div>
            <div className="content">
                <div className="stuff-title">
                    <p>{title}</p>
                    <p className='num'>NT$ 450</p>
                </div>
                <div className="quantity-wrapper">
                    <div className="quantity-box click">
                        <span>-</span>
                    </div>
                    <div className="quantity-box">
                        <span>2</span>
                    </div>
                    <div className="quantity-box click">
                        <span>+</span>
                    </div>
                </div>
            </div>
            
            <div className="total">
                <span>NT$ 900</span>
            </div>
            <div className="delete desktop">
                <i className="far fa-trash-alt"></i>
            </div>
        </div>
    }
}
