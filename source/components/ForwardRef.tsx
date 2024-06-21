import * as React from 'react'

export const ForwardRef = React.forwardRef<any, any>((properties, ref) => {
	const { component, lowerName, children, ...rest } = properties
	return React.createElement(component || lowerName, { ...rest, ref }, children)
})
