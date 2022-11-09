import { useState } from 'react';
import { AnnotationsMap, observable } from "../which";

export function useLocalObservable<TStore extends Record<string, any>>(
    initializer: () => TStore,
    annotations?: AnnotationsMap<TStore, never>
): TStore {
    return useState(() => observable(
        initializer(),
        annotations,
        {
            autoBind: true
        }
    ))[0]
}