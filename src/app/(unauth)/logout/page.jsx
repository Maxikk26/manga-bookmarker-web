'use client'

import React, {useEffect} from "react";
import {redirect} from "next/navigation";

export default function LoginPage() {

	useEffect(() => {
		localStorage.removeItem("token")
		redirect('/login')
	}, []);

	return (
		<></>
	)
}