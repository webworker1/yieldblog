import React from 'react';
import { Form, Button } from 'react-bootstrap'
import Link from '../tags/link';


const AUTHENTICATED = [
    "jonmgalante@gmail.com",
    "ctanner@foxchasepartners.com",
    "kwalla89@gmail.com",
    "admin001@theyieldblog.com",
    "colesbury@gmail.com",
    "ettenger@gmail.com",
    "cmwalsh126@gmail.com",
    "jqin@theyieldblog.com"
]


class Paywall extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ""
        }
    }

    setEmail = (e) => {
        this.setState({email: e.target.value});
    }

    setLocalStorage = () => {
        localStorage.setItem('yield_email', this.state.email);
    }

    
    render() {
        if (AUTHENTICATED.includes(localStorage.getItem('yield_email'))) {
            return this.props.children;
        } else {
            return (<div className='paywall-wrapper'>
                    Support the blog, join The Yield Blog Slack, and read every article!<br/>
                    <Link href="https://www.patreon.com/yieldblog">Support us on Patreon for nearly instant access</Link>
                    <br/><br/>

                    {this.props.text}
                    <br/><br/>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>If you're already a subscriber, just enter your subscriber email address / early access code</Form.Label>
                            <Form.Control onChange={this.setEmail} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button onClick={this.setLocalStorage} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                {console.log(localStorage.getItem('yield_cred'))}
            </div>)
        }
    }

}

export default Paywall;