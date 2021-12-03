export const formatDate = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()

    return `${day}.${month}.${year}`
}

export const formatTime = (time) => {
    const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
    return `${hours}:${minutes}`
}