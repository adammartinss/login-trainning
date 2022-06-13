import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from "yup"
import { Component } from "react"
import AuthService from '../services/auth.service';
import {useNavigate} from "react-router-dom"
type Props = {}
type State = {
    username: string;
    password: string;
    loading: boolean;
    message: string
}
export default class Login extends Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.state = {
            username: "",
            password: "",
            loading: false,
            message: "",
        }
    }
    validationSchema() {
        return yup.object().shape({
            username: yup.string().required("This field is required"),
            password: yup.string().required("This field is required")
        })
    }  
    handleLogin(formValue: { username: string; password: string}){
        const { username, password } = formValue;
        this.setState({
            message: "",
            loading: true
        })
        const navigate = useNavigate();
    AuthService.login(username, password).then(
    ()=>{
        navigate("/profile")
    },
    error => {
        const resMessage = 
        (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
            this.setState({
                loading: false,
                message: resMessage
            })
        }
    )
    }
    render(){
        const { loading, message } = this.state;
        const initialValues = {
            username: "",
            password: "",
    }
        return (
            <Formik
                initialValues={initialValues}
                validationSchema={this.validationSchema}
                onSubmit={this.handleLogin}
            >
                <Form>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <Field name="username" type="text"></Field>
                        <ErrorMessage name="username" component="div" className="alert alert-danger"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="text"></Field>
                        <ErrorMessage name="password" component="div"
                        className="alert alert-danger"/>
                    </div>
                    <div>
                        <button type="submit" disabled={loading}  className="btn btn-primary btn-block">
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Login</span>
                        </button>
                    </div>
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">{message}
                            </div>
                        </div>
                    )}
                </Form>
            </Formik>
        )}}
