import {FormInput} from './TextInputElements'

const TextInput = (props) => 
props.fieldType === 'textfield' ? (
    <FormInput
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(e) => props.onChange(e)}
        placeholder={props.placeholder}
    />
) : (
    <FormInput
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(e) => props.onChange(e)}
        placeholder={props.placeholder}
        autoComplete="false"
    />
)

export default TextInput
