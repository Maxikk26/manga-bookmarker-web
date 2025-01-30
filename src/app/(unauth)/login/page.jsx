'use client'

import React, {useEffect} from "react";
import { useRouter } from 'next/navigation'
import {Button, Form, Input} from "antd";
import {apiFetch} from "@/services/api";
import {login} from "@/services/authService";
import {log} from "next/dist/server/typescript/utils";

export default function LoginPage() {
	const router = useRouter()

	const formRules = {
		required: {
			required: true,
			message: 'Required',
		},
	}

	useEffect(() => {
		const token = localStorage.getItem("token");
		if(token)
			router.push('/bookmarks')
	}, []);

	useEffect(() => {
		router.prefetch('/bookmarks')
	}, [router]);


	const onFinish = async (values) => {
		try{
			const response = await login(values)
			if (!response.ok) {
				console.log("not ok",response)
			}
			localStorage.setItem("token",response.token)
			router.push('/bookmarks');
		}catch(error){
			console.error("Login error:", error);
		}
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
					rules={[formRules.required]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[formRules.required]}

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