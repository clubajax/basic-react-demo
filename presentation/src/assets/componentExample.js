export default `
class ShareDiv extends Component {
  render() {
    const { title, icon, color } = this.props;
    let itemClass = 'share-item ' + color;
    return (
      <div className={itemClass}>
        <Picture src={icon}/>
        <h1 className="title">{title}</h1>
      </div>
    )
  }
}

const Picture = ({src}) => <i className={src} aria-hidden="true"/>

class ShareWidget extends Component {
  constructor() {
    super();
    this.socialIcons = [
      {title: "Facebook", icon: "fa fa-facebook-official", color: "blue"},
      {title: "Twitter", icon: "fa fa-twitter-square", color: "lightblue"},
      {title: "Instagram", icon: "fa fa-instagram", color: "purple"},
      // {title: "Google +", icon: "fa fa-google-plus-square", color: "red"}
    ];
  }
  render() {
    return (
      <div className="share-widget">
        {this.socialIcons.map( (icon, i) => <ShareDiv key={i} {...icon} /> )}
      </div>
    )
  }
}

ReactDOM.render(
  <ShareWidget />,
  document.getElementById('root')
);`
