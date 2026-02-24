import Button from './Button';
import Divider from './Divider';
import './styles/Contact.css';

export default function Contact() {
    return (
        <div id="contact">
            <Divider />
            <div className="content">
                <h2 className="section-title">Contact</h2>
                <p>Thank you for visiting my portfolio.</p>
                <p>
                    <b>Let's get in touch!</b>
                </p>
                <Button extraPadding href="mailto: miamantylampi@gmail.com">
                    miamantylampi@gmail.com
                </Button>
            </div>
            <a href="http://www.laras.cc" className="credit">
                Website developer
            </a>
        </div>
    );
}
