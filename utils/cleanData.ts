import  z from 'zod'

export default function sanitizeData<T extends z.ZodType>(schema:T , data: unknown) {

    if(!schema ){
        throw new Error('A valid Zod schema must be provided to sanitize data.')
    }

    const parsedData = schema.safeParse(data);
     if (parsedData.success){
     return {
        success:true,
        data:parsedData.data
     }
     }
     return {
        success:false,
        error:parsedData.error,
        message:parsedData.data
     }


}