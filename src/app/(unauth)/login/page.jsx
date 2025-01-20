'use client'

import React, {useEffect} from "react";
import { useRouter } from 'next/navigation'
import {Button, Form, Input} from "antd";

export default function LoginPage() {
	const router = useRouter()

	useEffect(() => {
		router.prefetch('/bookmarks')
	}, [router]);


	const onFinish = (values) => {
		console.log('Success:', values);
		router.push('/bookmarks');
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div style={{width:'75%',display:'flex',justifyContent:'center',alignItems: 'center'}}>
			<Form
				style={{
					width:'100%',
				}}
				initialValues={{
					remember: true,
				}}
				layout="vertical"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				requiredMark={'optional'}
			>
				<Form.Item
					label="Username"
					name="username"
					rules={[
						{
							required: true,
							message: 'Required',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: 'Required',
						},
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item label={null} style={{paddingTop:'3%'}}>
					<Button type="primary" htmlType="submit" style={{width:'100%'}}>
						Login
					</Button>
				</Form.Item>
			</Form>
		</div>

	)
}