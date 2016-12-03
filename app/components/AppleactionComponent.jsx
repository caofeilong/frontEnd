import  React from "react";


class AppleactionComponent extends React.Component {

    render() {
        return (
            <div>
                Appleaction Component
                {this.props.children || 'welcome app '}
            </div>
        );
    }
}


export default AppleactionComponent;