export const UPLOAD="UPLOAD"


export const upload=(data)=>{
  return async dispatch=>{
    dispatch({
     type:UPLOAD,
     load:data
    })
  }
}