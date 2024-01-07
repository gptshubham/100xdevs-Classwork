/*
// if this is an array of number with atleast 1 input return true else return false
const z = require("zod")
const inputValidation = (arr)=>{
    const schema = z.array(z.number())

    const response = schema.safeParse(arr);
    console.log(response)
}

inputValidation(["71",85,93,42])
*/
// email: string => email
// password : 8 characters minimum
const z = require("zod")

const inputValidation = (obj)=>{
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
    })

    const response = schema.safeParse(obj)
    console.log(response)
}
const userDetail = {
    email:"example@gmail.com",
    password: "kuchbhirakhlo",
}
inputValidation(userDetail);