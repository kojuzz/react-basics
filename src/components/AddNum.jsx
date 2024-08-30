/* eslint-disable react/prop-types */
const AddNum = (props) => {
    return (
        <>    
            <h1 className={props.myStyle}>Click is {props.count}</h1>
            <button onClick={props.handleAdd} className="px-4 py-2 bg-blue-500 tex-white">
                Click
            </button>  

            {props.children}
        </>
    )
}
export default AddNum;