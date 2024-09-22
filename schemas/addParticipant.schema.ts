import * as yup from 'yup'

export interface IAddParticipant {
    name: string
}

export const initialAddParticipantValue: IAddParticipant = {
    name: ''
}

export const addParticipantSchema = yup.object().shape({
    name: yup
        .string()
        .required("Campo obrigatório")
        .matches(/^[a-zA-ZÀ-ú ]*$/, "Nome do participante deve conter apenas letras")
        .min(3, "Nome do participante deve conter ao minimo 3 caracteres")
        .max(30, "Nome do participante nao deve ultrapassar 30 caracteres")
})