'use client'

import React from 'react'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import { useServerInsertedHTML } from 'next/navigation'

const StyledComponentsRegistry = ({ children }) => {
	const cache = React.useMemo(() => createCache(), [])
	const [mounted, setMounted] = React.useState(false)

	useServerInsertedHTML(() => {
		return (
			<style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
		)
	})

	React.useEffect(() => {
		setMounted(true)
	}, [])

	if (mounted) {
		return <StyleProvider cache={cache}>{children}</StyleProvider>
	}

	return <>{children}</>
}

export default StyledComponentsRegistry

