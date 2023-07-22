const Button = (props) => {

    let {title, bgColor, textColor, onClick, style, type, onSubmit} = props;

    if(typeof style === 'object'){
        style ={...style}
    }else{
        style={}
    }
    if(bgColor){
        style = {...style, backgroundColor: bgColor}
    }
    if(textColor){
        style = {...style, textColor:textColor}
    }
    if(!type) type = ""
    if(!onSubmit) onSubmit= ()=> null

    function handleSubmit(e){
        if(typeof onSubmit !== 'function') return
        e.preventDefault();
        onSubmit()

    }

    return <button type="submit" className="min-w-[100px] px-1 py-1 flex justify-center items-center border rounded border-red-400 cursor-pointer text-red-500 hover:bg-red-500 hover:text-white" onClick={onClick} style={style}>
    {title}
  </button>
}