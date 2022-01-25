function Input({ children = 'Type something', name, type, ...props }) {
    return <input name={name} type={type}  {...props} />
}
export default Input