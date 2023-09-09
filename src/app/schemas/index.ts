import * as yup from 'yup'

export const basicSchema = yup.object().shape({
    mail: yup.string().email('porfavor introduce un correo valido').required('email requerido'),
    password: yup.string().min(3).required('contraseña requerida')
})