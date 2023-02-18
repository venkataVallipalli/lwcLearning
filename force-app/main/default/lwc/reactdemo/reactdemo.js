import {LightningElement} from 'lwc';
import {loadScript} from 'lightning/platformResourceLoader';
import react_development_js from '@salesforce/resourceUrl/react_development_js';
import react_dom_development_js from '@salesforce/resourceUrl/react_dom_development_js';

export default class Reactdemo extends LightningElement {

    renderedCallback() {
        loadScript(this, react_development_js).then(() => {
            loadScript(this, react_dom_development_js).then(() => {
                this.reactRender();
            });
        });
    }

    reactRender() {
        const e = React.createElement;

        class LikeButton extends React.Component {
            constructor(props) {
                super(props);
                this.state = { liked: false };
            }

            render() {
                if (this.state.liked) {
                    return 'You liked this.';
                }

                return e(
                    'button',
                    { onClick: () => this.setState({ liked: true }) },
                    'Like'
                );
            }
        }

        const domContainer = this.template.querySelector('.like_button_container');
        ReactDOM.render(e(LikeButton), domContainer);
    }



}