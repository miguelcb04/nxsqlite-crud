
function Form2({ action, title, proveedor, disabled }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={proveedor?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={proveedor?.nombre} autoFocus ></input>
                <label htmlFor='telefono'>Telefono</label>
                <input type='number' id='telefono' name='telefono' min='0' step={0.01}
                    placeholder='telefono'
                    defaultValue={proveedor?.telefono} />
            </fieldset>
            <button type='submit'>{title}</button>
        </form>
    )
}

export default Form2