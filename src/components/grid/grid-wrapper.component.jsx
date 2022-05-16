const GridWrapper = ({children}) => {
    <div style={{display:'grid', gridTemplateColumns:`1fr 1fr 1fr`, gap:`80px`}}>
        {children}         
    </div>  
}

export default GridWrapper;  