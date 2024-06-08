import {z} from 'zod'
const createAcademicDepartmentValidationSchema = z.object({
    body : z.object({
        name: z.string({
            invalid_type_error : "Academic Department must be String",
            required_error : "Name is required"
        }),

        academicfaculty : z.string({
            invalid_type_error : "Academic Department must be String", 
            required_error : "Faculty is required"
        })
    })
})
const updateAcademicDepartmentValidationSchema = z.object({
    body : z.object({
        name: z.string({
            invalid_type_error : "Academic Department must be String",
            required_error : "Name is required"
        }).optional(),
        academicfaculty : z.string({
            invalid_type_error : "Academic Department must be String", 
            required_error : "Faculty is required"
        }).optional()
    })
})

export const academicDepartmentValidation = {
    createAcademicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema

}