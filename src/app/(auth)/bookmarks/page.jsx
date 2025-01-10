'use client'

import React from 'react'
import { Form, Input, Button, Switch } from 'antd'

export default function BookmarksPage() {
	const [form] = Form.useForm()

	const onFinish = (values) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<div>
			<h1>Settings</h1>
			<Form
				form={form}
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Username"
					name="username"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Email"
					name="email"
					rules={[
						{ required: true, message: 'Please input your email!' },
						{ type: 'email', message: 'Please enter a valid email!' },
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item name="notifications" label="Email Notifications" valuePropName="checked">
					<Switch />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Save Settings
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

