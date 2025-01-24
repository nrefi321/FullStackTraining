export const successResponse = (data, msg = 'Success') => ({
    success:true,
    msg,
    data
})
export const errorResponse = (msg, code = 500) => ({
    success:false,
    msg,
    code
})