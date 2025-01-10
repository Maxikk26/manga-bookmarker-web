import { Inter } from 'next/font/google'
import { ConfigProvider } from 'antd'
import StyledComponentsRegistry from '@/lib/AntdRegistry'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Admin Dashboard',
	description: 'Next.js Admin Dashboard with Ant Design',
}

export default function RootLayout({ children }) {

	return (
		<html lang="en" style={{ padding:0,margin:0 }}>
			<body className={inter.className} style={{margin:0}}>
				<StyledComponentsRegistry>
					<ConfigProvider
						theme={{
							token: {
								colorPrimary: '#00b96b',
							},
						}}
					>
						{children}
					</ConfigProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}

