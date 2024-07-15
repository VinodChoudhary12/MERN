
import { useEffect, useState } from "react";
function Timing() {
    const [ctime, setCtime] = useState(new Date().toISOString());
    useEffect(() => {
        const timer = setInterval(() => {
            setCtime(new Date().toISOString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const date = new Date(ctime);
    const time = date.toLocaleTimeString();

    return (
        <>
            <h1 className="text-4xl font-bold text-white mt-4 text-center">
                {`${time} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
            </h1>
        </>
    );
}

export default Timing;
