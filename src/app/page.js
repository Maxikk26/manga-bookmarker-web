'use client'

import {redirect} from "next/navigation";
import {useEffect} from "react";

export default function DashboardPage() {
	useEffect(() => {
		redirect(`/login`) // Navigate to the new post page
	}, []);

	return null
}

