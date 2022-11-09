import React from 'react'
import { useObserver } from './useObserver'

interface IObserverPoprs {
    children?(): React.ReactElement | null
    render?(): React.ReactElement | null
}

function ObserverComponent({
    children,
    render
}: IObserverPoprs) {
    const component = children || render

    if (typeof component !== 'function') {
        return null
    }

    return useObserver(component)
}

ObserverComponent.displayName = 'Observer'

export {ObserverComponent as Observer}