function TextArea({ children = '', name, cols, rows, ...props }) {

    return <textarea

        name={name}
        cols={cols}
        rows={rows}
        defaultValue={children}
        {...props}
    ></textarea>
}
export default TextArea