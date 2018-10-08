import React from 'react';

type Props = {
    value: number,
    onChange: Function
}

const TextInput = (props: Props) => (
    <input
        onChange={e => props.onChange(parseInt(e.target.value))}
        type="number"
        value={props.value} />
);

export default TextInput;