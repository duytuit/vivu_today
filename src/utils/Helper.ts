export const createFormData = (body:any, file?:any, files?:any, gallery?:any, image?:any, avatar?:any) => {
    const data = new FormData()
    if (file) {
        data.append("file", file)
    }
    if (avatar) {
        data.append("avatar", avatar)
    }
    if (files) {
        
        Object.keys(files).forEach((value) => {
            
            data.append(value, files[value])
        })
    }
    if (gallery) {
        gallery.forEach((g:any) => {
            data.append('gallery', g)
        })
    }
    if (image) {
        if (image[0]) {
            image.forEach((g:any) => {
                data.append('image', g)
            })
        } else {
            data.append("image", image)
        }
    }
    Object.keys(body).forEach(key => {
        if (typeof body[key] === "object") data.append(key, JSON.stringify(body[key]))
        else if (body[key] || body[key] === 0 || body[key] === '') data.append(key, body[key])
    })
    return data
}
export const convertData = (body:any) => {
    Object.keys(body).forEach(key => {
        if (typeof body[key] === "object") body[key] = JSON.stringify(body[key])
    })
    return body
}
export const formatCurrency=(input:any) =>{
    var number = input.value.replace(/[,.]/g, '');
    return new Intl.NumberFormat().format(number).toString().replace(/\./g, ',');
}

export const formatCurrencyV2=(value:any) =>{
    var number = value.replace(/[,.]/g, '');
    return new Intl.NumberFormat().format(number).replace(/\./g, ',');
}
export const convertObjToParam=(body:any) =>{
    return Object.keys(body)
      .map(function (key) {
        return key + '=' + body[key];
      })
      .join('&');
}
export const convertObjToParamV2=(body:any) =>{
    return Object.keys(body)
      .sort()
      .map(function (key) {
        return key + '=' + body[key];
      })
      .join('&');
}

export const stringToTime=(value:any) =>{
    return new Date(value).toUTCString();
}