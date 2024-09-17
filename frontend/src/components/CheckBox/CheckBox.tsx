import './CheckBox.css';

type Props = {
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    textView: string
}

function CheckBox({changeHandler, textView}: Props) {
    return (
        <div className='CheckBox'>
            <input className='CheckBox-input' type='checkbox' onChange={(event) => changeHandler(event)} />
            <p className='CheckBox-text'>{textView}</p>
        </div>
    )
}

export default CheckBox;