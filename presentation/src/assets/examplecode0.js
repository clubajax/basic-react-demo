export default `
class ShareDiv extends React.Component {
  render() {
    return <div>Share to {this.props.socialMediaType}</div>;
  }
}

ReactDOM.render(
  <ShareDiv socialMediaType="Facebook" />,
  document.getElementById('root')
);`
