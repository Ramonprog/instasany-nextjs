import { ReactNode } from 'react'

interface IGridContainer {
    children: ReactNode
    className?: string
}

const GridContainer = ({ children, className }: IGridContainer) => {
    const defaultClass = 'w-full max-w-[1240px] mx-auto px-3'

    return (
        <div className={`${defaultClass} ${className}`}>
            {children}
        </div>
    )
}

export default GridContainer