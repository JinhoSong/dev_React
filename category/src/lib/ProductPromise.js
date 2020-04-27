import { useState, useEffect } from "react";

export default function ProductPromise(promiseCreator, deps) {

    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const process = async () => {
            setLoading(true); //로딩시작
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch (e) {
                setError(e);
                //에러발생
            }
            setLoading(false);
        };
        process();
    }, deps);
    return [loading, resolved, error];

}