import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import classNames from 'classnames/bind'
import styles from './LoginForm.module.scss'
import { history } from './history'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      confirmDirty: false,
    }

    this.username = null
    this.email = null
    this.password = null
    this.passwordCheck = null
    this.secretKey = null

    this.handleConfirmBlur = this.handleConfirmBlur.bind(this)
  }

  handleConfirmBlur = e => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is in consistent!')
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['passwordCheck'], { force: true })
    }
    callback()
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form
        onSubmit={e => {
          e.preventDefault()
          this.props.form.validateFields(err => {
            if (!err) {
              const username = this.username.value
              const email = this.email.value
              const password = this.password.value
// signup fetch
            }
          })
        }}
        className={cx("login-form")}
      >
        <Form.Item style={{ margin: "0 0 10px 0" }}>
          {getFieldDecorator("username", {
            rules: [
              { required: true, message: "Please input your username!" }
            ]
          })(
            <Input
              name="username"
              prefix={<Icon type="user" />}
              placeholder="Name"
              ref={node => {
                this.username = node.input
              }}
            />
          )}
        </Form.Item>
        <Form.Item style={{ margin: "0 0 10px 0" }}>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(
            <Input
              name="email"
              prefix={
                <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Email"
              ref={node => {
                this.email = node.input
              }}
            />
          )}
        </Form.Item>
        <Form.Item style={{ margin: "0 0 10px 0" }}>
          {getFieldDecorator("password", {
            rules: [
              { required: true, message: "Please input your Password!" },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(
            <Input
              name="password"
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Password"
              ref={node => {
                this.password = node.input
              }}
            />
          )}
        </Form.Item>
        <Form.Item style={{ margin: "0 0 10px 0" }}>
          {getFieldDecorator("passwordCheck", {
            rules: [
              {
                required: true,
                message: "Two passwords that you enter is inconsistent!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(
            <Input
              onBlur={this.handleConfirmBlur}
              name="passwordCheck"
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Password Check"
              ref={node => {
                this.passwordCheck = node.input
              }}
            />
          )}
        </Form.Item>
        <Form.Item style={{ margin: "0 0 10px 0" }}>
          {getFieldDecorator("secretKey", {
            rules: [{ required: true, message: "Please input Secret Key!" }]
          })(
            <Input
              name="secretKey"
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Secret Key"
              ref={node => {
                this.secretKey = node.input
              }}
            />
          )}
        </Form.Item>
        <Form.Item style={{ margin: "0 0 12px 0" }}>
          <Button
            type="primary"
            htmlType="submit"
            className={cx("login-button")}
          >
            Register
          </Button>
          <Link className={cx("signup-button")} to="/login">
            Sign In
          </Link>
        </Form.Item>
      </Form>
    )
  }
}

export { RegisterForm }
