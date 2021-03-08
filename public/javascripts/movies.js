console.log('javascript movies vinculado perfectamente');

const confirmRemove = (event, formulario) => {
    event.preventDefault();

    console.log(formulario)

    Swal.fire({
        title: '¿Estás seguro de borrar el registro?',
        text: "No podrás revertir los cambios",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borralo'
    }).then((result) => {
        if (result.isConfirmed) {
           formulario.submit()
        }
    })
}