import "Stuff.css"

// const Stuff = ({item}) => {
//     let {item: {title, imgUrl}} = this.props
//     return <div className="stuff">
//             <div className="stuff-img">
//                 <div className="img" style={{ backgroundImage: `url(${process.env.PUBLIC_PATH}asset/pic/${imgUrl}.jpg)` }}></div>
//                 <div className="todaypick">
//                     <span>本日精選</span>
//                 </div>
//                 <div className="like">
//                     <i className="far fa-heart"></i>
//                 </div>
//             </div>
//             <div className="stuff-title">
//                 <span>{title}</span>
//                 <span className="price">NT$ 450</span>
//             </div>
//             <Link to='/cart'><div className="btn">加入購物車</div></Link>
//         </div>
// }

// export default Stuff

export default class Stuff extends React.Component {
    likeStuff = () => {
        let {heart} = this
        if( heart.classList.contains('far') ){
            heart.classList.add('fas')
            heart.classList.remove('far')
        }else if(heart.classList.contains('fas')){
            heart.classList.add('far')
            heart.classList.remove('fas')
        }
    }
    render() {
        let {item: {title, imgUrl}} = this.props
        return <div className="stuff">
                <div className="stuff-img">
                    <div className="img" style={{ backgroundImage: `url(${process.env.PUBLIC_PATH}asset/pic/${imgUrl}.jpg)` }}></div>
                    <div className="todaypick">
                        <span>本日精選</span>
                    </div>
                    <div className="like">
                        <i className="far fa-heart" 
                            ref={e => this.heart = e}
                            onClick = {this.likeStuff}>
                        </i>
                    </div>
                </div>
                <div className="stuff-title">
                    <span>{title}</span>
                    <span className="price">NT$ 450</span>
                </div>
                <Link to='/cart'><div className="btn">加入購物車</div></Link>
            </div>
    }
}