

function Proveedor({ children, proveedor }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p>{proveedor.nombre}</p>
            <p>{proveedor.telefono}</p>
            {children}
        </div>
    )
}

export default Proveedor