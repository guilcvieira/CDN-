"use client"

import React from 'https://esm.sh/react?dev';

export default function Contador() {
    const [contador, setContador] = React.useState(0);
    return (
        <div className="p-1 border">
            <p>
                Contador: {contador}
            </p>

            <button onClick={() => setContador(contador + 1)}>Clique Aqui</button>
        </div>
    )
}